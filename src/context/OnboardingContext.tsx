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
  toggleOnboarding: () => void;
  nextStep: () => void;
  previousStep: () => void;
  markPageComplete: (pageId: string) => void;
  getCompletedPages: () => string[];
  verifyActionComplete: () => Promise<void>;
  skipOnboarding: () => void;
  disableGlobally: () => void;
  enableGlobally: () => void;
};

export const OnboardingContext = createContext<OnboardingContextType | null>(null);

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [isWaitingForAction, setIsWaitingForAction] = useState(false);
  const [globallyDisabled, setGloballyDisabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load preferences on mount
  useEffect(() => {
    const globalPreference = localStorage.getItem('onboardingGloballyDisabled');
    const savedCompletedPages = localStorage.getItem('onboardingCompletedPages');

    if (globalPreference === 'true') {
      setGloballyDisabled(true);
      setIsEnabled(false);
    }

    if (savedCompletedPages) {
      setCompletedPages(JSON.parse(savedCompletedPages));
    }

    setIsInitialized(true);
  }, []);

  // Handle automatic onboarding display
  useEffect(() => {
    if (!isInitialized) return;
    if (globallyDisabled) return;

    const currentConfig = onboardingConfig[pathname];

    // Check both memory state and localStorage
    const localStoragePages = localStorage.getItem('onboardingCompletedPages');
    const storedCompletedPages = localStoragePages ? JSON.parse(localStoragePages) : [];
    const isPageComplete = completedPages.includes(pathname) || storedCompletedPages.includes(pathname);

    if (currentConfig && !isPageComplete) {
      setTimeout(() => {
        setIsEnabled(true);
        setCurrentStep(0);
      }, 100);
    } else {
      setIsEnabled(false);
    }
  }, [pathname, completedPages, globallyDisabled, isInitialized]);

  const toggleOnboarding = () => setIsEnabled(!isEnabled);

  const nextStep = () => setCurrentStep(prev => prev + 1);

  const previousStep = () => setCurrentStep(prev => Math.max(0, prev - 1));

  const markPageComplete = (pageId: string) => {
    // Get current completed pages from localStorage
    const storedPages = localStorage.getItem('onboardingCompletedPages');
    const currentCompleted = storedPages ? JSON.parse(storedPages) : [];

    // Update both memory and localStorage if not already completed
    if (!currentCompleted.includes(pageId)) {
      const updated = [...currentCompleted, pageId];
      setCompletedPages(updated);
      localStorage.setItem('onboardingCompletedPages', JSON.stringify(updated));
    }
  };

  const getCompletedPages = () => completedPages;

  const verifyActionComplete = async () => {
    setIsWaitingForAction(false);
  };

  const skipOnboarding = () => {
    setIsEnabled(false);
    markPageComplete(pathname);
  };

  const disableGlobally = () => {
    setGloballyDisabled(true);
    setIsEnabled(false);
    localStorage.setItem('onboardingGloballyDisabled', 'true');
  };

  const enableGlobally = () => {
    setGloballyDisabled(false);
    localStorage.setItem('onboardingGloballyDisabled', 'false');
  };

  return (
    <OnboardingContext.Provider
      value={{
        isEnabled,
        setIsEnabled,
        currentStep,
        isWaitingForAction,
        globallyDisabled,
        toggleOnboarding,
        nextStep,
        previousStep,
        markPageComplete,
        getCompletedPages,
        verifyActionComplete,
        skipOnboarding,
        disableGlobally,
        enableGlobally,
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
