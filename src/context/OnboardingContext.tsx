'use client';

import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { onboardingConfig } from '@/config/onboarding';

type OnboardingContextType = {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  isWaitingForAction: boolean;
  globallyDisabled: boolean;
  isLoading: boolean;
  error: string | null;
  toggleOnboarding: () => void;
  nextStep: () => void;
  previousStep: () => void;
  markPageComplete: (pageId: string) => Promise<void>;
  getCompletedPages: () => string[];
  verifyActionComplete: () => Promise<void>;
  skipOnboarding: () => Promise<void>;
  disableGlobally: () => void;
  enableGlobally: () => void;
  resetOnboarding: () => void;
};

const STORAGE_KEYS = {
  GLOBALLY_DISABLED: 'onboardingGloballyDisabled',
  COMPLETED_PAGES: 'onboardingCompletedPages',
  CURRENT_STEP: 'onboardingCurrentStep',
} as const;

export const OnboardingContext = createContext<OnboardingContextType | null>(null);

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [isWaitingForAction, setIsWaitingForAction] = useState(false);
  const [globallyDisabled, setGloballyDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load preferences on mount
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const globalPreference = localStorage.getItem(STORAGE_KEYS.GLOBALLY_DISABLED);
        const savedCompletedPages = localStorage.getItem(STORAGE_KEYS.COMPLETED_PAGES);
        const savedCurrentStep = localStorage.getItem(STORAGE_KEYS.CURRENT_STEP);

        if (globalPreference === 'true') {
          setGloballyDisabled(true);
          setIsEnabled(false);
        }

        if (savedCompletedPages) {
          setCompletedPages(JSON.parse(savedCompletedPages));
        }

        if (savedCurrentStep) {
          setCurrentStep(parseInt(savedCurrentStep, 10));
        }
      } catch (err) {
        setError('Failed to load onboarding preferences');
        console.error('Failed to load onboarding preferences:', err);
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
      }
    };

    loadPreferences();
  }, []);

  // Handle automatic onboarding display
  useEffect(() => {
    if (!isInitialized || isLoading || globallyDisabled) return;

    const currentConfig = onboardingConfig[pathname];
    if (!currentConfig) {
      setIsEnabled(false);
      return;
    }

    // Check if the page is already completed
    const isPageComplete = completedPages.includes(pathname);
    if (isPageComplete) {
      setIsEnabled(false);
      return;
    }

    // Initialize onboarding for this page
    const timer = setTimeout(() => {
      setIsEnabled(true);
      setCurrentStep(0);
      setError(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, completedPages, globallyDisabled, isLoading, isInitialized]);

  // Save current step to localStorage
  useEffect(() => {
    if (!isLoading && isInitialized) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_STEP, currentStep.toString());
    }
  }, [currentStep, isLoading, isInitialized]);

  const toggleOnboarding = () => {
    setIsEnabled(prev => !prev);
    setError(null);
  };

  const nextStep = () => {
    const currentConfig = onboardingConfig[pathname];
    if (!currentConfig) return;

    if (currentStep < currentConfig.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setError(null);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setError(null);
    }
  };

  const markPageComplete = async (pageId: string) => {
    try {
      const updated = Array.from(new Set([...completedPages, pageId]));
      setCompletedPages(updated);
      localStorage.setItem(STORAGE_KEYS.COMPLETED_PAGES, JSON.stringify(updated));
    } catch (err) {
      setError('Failed to mark page as complete');
      console.error('Failed to mark page as complete:', err);
      throw err;
    }
  };

  const getCompletedPages = () => completedPages;

  const verifyActionComplete = async () => {
    try {
      setIsWaitingForAction(false);
      setError(null);
    } catch (err) {
      setError('Failed to verify action completion');
      console.error('Failed to verify action:', err);
      throw err;
    }
  };

  const skipOnboarding = async () => {
    try {
      await markPageComplete(pathname);
      setIsEnabled(false);
      setError(null);
    } catch (err) {
      setError('Failed to skip onboarding');
      console.error('Failed to skip onboarding:', err);
    }
  };

  const disableGlobally = () => {
    try {
      setGloballyDisabled(true);
      setIsEnabled(false);
      localStorage.setItem(STORAGE_KEYS.GLOBALLY_DISABLED, 'true');
      setError(null);
    } catch (err) {
      setError('Failed to disable onboarding globally');
      console.error('Failed to disable globally:', err);
    }
  };

  const enableGlobally = () => {
    try {
      setGloballyDisabled(false);
      localStorage.setItem(STORAGE_KEYS.GLOBALLY_DISABLED, 'false');
      setError(null);
    } catch (err) {
      setError('Failed to enable onboarding globally');
      console.error('Failed to enable globally:', err);
    }
  };

  const resetOnboarding = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPLETED_PAGES);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_STEP);
      localStorage.removeItem(STORAGE_KEYS.GLOBALLY_DISABLED);
      setCompletedPages([]);
      setCurrentStep(0);
      setGloballyDisabled(false);
      setIsEnabled(true);
      setError(null);
    } catch (err) {
      setError('Failed to reset onboarding');
      console.error('Failed to reset onboarding:', err);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        isEnabled,
        setIsEnabled,
        currentStep,
        isWaitingForAction,
        globallyDisabled,
        isLoading,
        error,
        toggleOnboarding,
        nextStep,
        previousStep,
        markPageComplete,
        getCompletedPages,
        verifyActionComplete,
        skipOnboarding,
        disableGlobally,
        enableGlobally,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};
