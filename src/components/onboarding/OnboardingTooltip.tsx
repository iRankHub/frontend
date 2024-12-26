import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useOnboarding } from '@/context/OnboardingContext';
import type { PageConfig } from '@/types/onboarding';

type OnboardingTooltipProps = {
  pageConfig: PageConfig;
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
  const [isPositioned, setIsPositioned] = useState(false);
  const actionObserverRef = useRef<MutationObserver | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const positioningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentStepConfig = pageConfig.steps[currentStep];

  const cleanup = () => {
    if (overlayRef.current && document.body.contains(overlayRef.current)) {
      document.body.removeChild(overlayRef.current);
    }

    if (positioningTimeoutRef.current) {
      clearTimeout(positioningTimeoutRef.current);
    }

    const target = document.querySelector(
      `[data-onboarding-id="${currentStepConfig?.targetSelector}"]`
    );
    if (target) {
      target.classList.remove('relative', 'z-50');
      target.removeAttribute('style');
    }
  };

  useEffect(() => {
    if (!currentStepConfig) return;

    cleanup();

    overlayRef.current = document.createElement('div');
    overlayRef.current.className = 'fixed inset-0 bg-black/50 dark:bg-black/70 z-40';
    document.body.appendChild(overlayRef.current);

    const target = document.querySelector(
      `[data-onboarding-id="${currentStepConfig.targetSelector}"]`
    );
    if (!target) return;

    target.classList.add('relative', 'z-50');
    target.setAttribute('style', 'box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); border-radius: 4px;');

    if (currentStepConfig.waitForAction) {
      const { type, verificationFn } = currentStepConfig.waitForAction;

      if (type === 'click') {
        const handleClick = async () => {
          if (verificationFn) {
            const isComplete = await verificationFn();
            if (isComplete) {
              await verifyActionComplete();
              nextStep();
            }
          } else {
            await verifyActionComplete();
            nextStep();
          }
        };

        target.addEventListener('click', handleClick);
        return () => {
          target.removeEventListener('click', handleClick);
          cleanup();
        };
      }

      if (type === 'custom' && verificationFn) {
        actionObserverRef.current = new MutationObserver(async () => {
          const isComplete = await verificationFn();
          if (isComplete) {
            actionObserverRef.current?.disconnect();
            await verifyActionComplete();
            nextStep();
          }
        });

        actionObserverRef.current.observe(target, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true
        });

        return () => {
          actionObserverRef.current?.disconnect();
          cleanup();
        };
      }
    }

    const updatePosition = () => {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const spacing = 15;

      // Default position is below the element
      let top = rect.bottom + scrollTop + spacing;
      let left = rect.left + scrollLeft + (rect.width / 2);
      let transform = 'translate(-50%, 0)';

      // If too close to bottom, position above
      if (rect.bottom + 250 > window.innerHeight) {
        top = rect.top + scrollTop - spacing;
        transform = 'translate(-50%, -100%)';
      }

      setTooltipPosition({ top, left, transform });
      setIsPositioned(true);
    };

    const attemptPositioning = (attempts = 0) => {
      updatePosition();

      if (attempts < 3) {
        positioningTimeoutRef.current = setTimeout(() => {
          attemptPositioning(attempts + 1);
        }, 50);
      }
    };

    attemptPositioning();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
      cleanup();
    };
  }, [currentStep, currentStepConfig]);

  useEffect(() => {
    return () => cleanup();
  }, []);

  if (!currentStepConfig || !isPositioned) return null;

  return (
    <div
      className="fixed z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-sm border border-gray-200 dark:border-gray-700"
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
      <div className="flex flex-col gap-4">
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
                  // Mark as complete first
                  await markPageComplete(pageConfig.id);
                  // Then cleanup and disable
                  cleanup();
                  setIsEnabled(false);
                  // Force a localStorage update
                  const currentCompleted = localStorage.getItem('onboardingCompletedPages');
                  const completedPages = currentCompleted ? JSON.parse(currentCompleted) : [];
                  if (!completedPages.includes(pageConfig.id)) {
                    completedPages.push(pageConfig.id);
                    localStorage.setItem('onboardingCompletedPages', JSON.stringify(completedPages));
                  }
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
  );
};
