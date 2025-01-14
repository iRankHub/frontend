import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useOnboarding } from '@/context/OnboardingContext';
import type { PageConfig } from '@/types/onboarding';
import _ from 'lodash';

type OnboardingTooltipProps = {
  pageConfig: PageConfig;
};

type BaseActionConfig = {
  message?: string;
  verificationFn?: () => Promise<boolean>;
};

type ClickActionConfig = BaseActionConfig & {
  type: 'click';
};

type InputActionConfig = BaseActionConfig & {
  type: 'input';
};

type CustomActionConfig = BaseActionConfig & {
  type: 'custom';
  verificationFn: () => Promise<boolean>;
};

type ActionConfig = ClickActionConfig | InputActionConfig | CustomActionConfig;

// Type guard function to check if an object matches ActionConfig
const isActionConfig = (action: any): action is ActionConfig => {
  if (!action || typeof action !== 'object') return false;
  if (!('type' in action)) return false;

  return ['click', 'input', 'custom'].includes(action.type);
};

export const OnboardingTooltip = ({ pageConfig }: OnboardingTooltipProps) => {
  const {
    currentStep,
    isWaitingForAction,
    nextStep,
    previousStep,
    markPageComplete,
    verifyActionComplete,
    skipOnboarding,
    disableGlobally,
    setIsEnabled
  } = useOnboarding();

  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0, transform: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const actionObserverRef = useRef<MutationObserver | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const positioningAttempts = useRef(0);
  const maxAttempts = 5;

  const currentStepConfig = pageConfig.steps[currentStep];

  const cleanup = () => {
    if (overlayRef.current && document.body.contains(overlayRef.current)) {
      document.body.removeChild(overlayRef.current);
    }

    const target = document.querySelector(
      `[data-onboarding-id="${currentStepConfig?.targetSelector}"]`
    );
    if (target) {
      target.classList.remove('relative', 'z-50');
      target.removeAttribute('style');
    }

    if (actionObserverRef.current) {
      actionObserverRef.current.disconnect();
    }

    setIsVisible(false);
    setError(null);
    positioningAttempts.current = 0;
  };

  const setupActionListeners = (target: Element, actionConfig: ActionConfig) => {
    if (actionConfig.type === 'click') {
      const handleClick = async () => {
        try {
          if (actionConfig.verificationFn) {
            const isComplete = await actionConfig.verificationFn();
            if (isComplete) {
              await verifyActionComplete();
              nextStep();
            }
          } else {
            await verifyActionComplete();
            nextStep();
          }
        } catch (err) {
          setError('Failed to verify action completion');
          console.error('Action verification failed:', err);
        }
      };

      target.addEventListener('click', handleClick);
      return () => target.removeEventListener('click', handleClick);
    }

    if (actionConfig.type === 'input') {
      const handleInput = async () => {
        try {
          if (actionConfig.verificationFn) {
            const isComplete = await actionConfig.verificationFn();
            if (isComplete) {
              await verifyActionComplete();
              nextStep();
            }
          }
        } catch (err) {
          setError('Failed to verify input action');
          console.error('Input verification failed:', err);
        }
      };

      target.addEventListener('input', handleInput);
      return () => target.removeEventListener('input', handleInput);
    }

    if (actionConfig.type === 'custom' && actionConfig.verificationFn) {
      actionObserverRef.current = new MutationObserver(async () => {
        try {
          const isComplete = await actionConfig.verificationFn();
          if (isComplete) {
            actionObserverRef.current?.disconnect();
            await verifyActionComplete();
            nextStep();
          }
        } catch (err) {
          setError('Failed to verify custom action');
          console.error('Custom action verification failed:', err);
        }
      });

      actionObserverRef.current.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      });
    }
  };

  const updatePosition = () => {
    if (!currentStepConfig) return;

    const target = document.querySelector(
      `[data-onboarding-id="${currentStepConfig.targetSelector}"]`
    );

    if (!target) {
      if (positioningAttempts.current < maxAttempts) {
        positioningAttempts.current++;
        setTimeout(updatePosition, 100);
        return;
      }
      setError(`Target element ${currentStepConfig.targetSelector} not found`);
      return;
    }

    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const spacing = 15;

    let position = { top: 0, left: 0, transform: '' };

    switch (currentStepConfig.placement) {
      case 'top':
        position = {
          top: rect.top + scrollTop - spacing,
          left: rect.left + scrollLeft + (rect.width / 2),
          transform: 'translate(-50%, -100%)'
        };
        break;
      case 'bottom':
        position = {
          top: rect.bottom + scrollTop + spacing,
          left: rect.left + scrollLeft + (rect.width / 2),
          transform: 'translate(-50%, 0)'
        };
        break;
      case 'left':
        position = {
          top: rect.top + scrollTop + (rect.height / 2),
          left: rect.left + scrollLeft - spacing,
          transform: 'translate(-100%, -50%)'
        };
        break;
      case 'right':
        position = {
          top: rect.top + scrollTop + (rect.height / 2),
          left: rect.right + scrollLeft + spacing,
          transform: 'translate(0, -50%)'
        };
        break;
      default:
        position = {
          top: rect.bottom + scrollTop + spacing,
          left: rect.left + scrollLeft + (rect.width / 2),
          transform: 'translate(-50%, 0)'
        };
    }

    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    if (tooltipRect) {
      if (position.top < 0) position.top = spacing;
      if (position.left < 0) position.left = spacing;
      if (position.top + tooltipRect.height > window.innerHeight) {
        position.top = window.innerHeight - tooltipRect.height - spacing;
      }
      if (position.left + tooltipRect.width > window.innerWidth) {
        position.left = window.innerWidth - tooltipRect.width - spacing;
      }
    }

    setTooltipPosition(position);
    setIsVisible(true);

    target.classList.add('relative', 'z-50');
    target.setAttribute(
      'style',
      'box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); border-radius: 4px;'
    );
  };

  useEffect(() => {
    if (!currentStepConfig) return;

    overlayRef.current = document.createElement('div');
    overlayRef.current.className = `fixed inset-0 bg-black/50 dark:bg-black/70 z-40 ${currentStepConfig.waitForAction ? 'pointer-events-none' : ''
      }`;
    document.body.appendChild(overlayRef.current);

    setTimeout(updatePosition, 100);

    const handleResize = _.debounce(updatePosition, 100);
    const handleScroll = _.debounce(updatePosition, 50);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    const target = document.querySelector(
      `[data-onboarding-id="${currentStepConfig.targetSelector}"]`
    );

    let cleanupFn: (() => void) | undefined;

    if (target && currentStepConfig.waitForAction && isActionConfig(currentStepConfig.waitForAction)) {
      cleanupFn = setupActionListeners(target, currentStepConfig.waitForAction);
    }

    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
      if (cleanupFn) cleanupFn();
    };
  }, [currentStep, currentStepConfig]);

  useEffect(() => {
    return () => cleanup();
  }, []);

  if (!currentStepConfig) return null;

  return (
    <>
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          {error}
        </div>
      )}
      <div
        ref={tooltipRef}
        className={`fixed z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-sm border border-gray-200 dark:border-gray-700 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'
          } ${currentStepConfig.waitForAction ? 'pointer-events-none' : ''}`}
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
          transform: tooltipPosition.transform,
        }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {currentStepConfig.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {currentStepConfig.content}
        </p>
        {currentStepConfig.waitForAction && (
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium">
            {currentStepConfig.waitForAction.message || 'Complete this action to continue'}
          </p>
        )}
        <div className={`flex flex-col gap-4 ${currentStepConfig.waitForAction ? 'pointer-events-auto' : ''}`}>
          <div className="flex justify-between items-center">
            <button
              onClick={previousStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {!currentStepConfig.waitForAction && (
              <button
                onClick={async () => {
                  if (currentStep === pageConfig.steps.length - 1) {
                    await markPageComplete(pageConfig.id);
                    cleanup();
                    setIsEnabled(false);
                  } else {
                    nextStep();
                  }
                }}
                className="px-4 py-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
              >
                {currentStep === pageConfig.steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
          <div className="flex justify-between items-center border-t dark:border-gray-700 pt-4 mt-2">
            <button
              onClick={() => {
                cleanup();
                skipOnboarding();
              }}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Skip this page
            </button>
            <button
              onClick={() => {
                cleanup();
                disableGlobally();
              }}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Don&apos;t show onboarding again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
