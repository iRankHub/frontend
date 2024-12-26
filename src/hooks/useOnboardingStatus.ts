import React from 'react';
import { useEffect } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import { usePathname } from 'next/navigation';
import { onboardingConfig } from '../config/onboarding';

export const useOnboardingStatus = () => {
  const pathname = usePathname();
  const {
    isEnabled,
    toggleOnboarding,
    getCompletedPages,
    globallyDisabled
  } = useOnboarding();

  useEffect(() => {
    // Check if this page has onboarding and hasn't been completed
    const pageConfig = onboardingConfig[pathname];
    const completedPages = getCompletedPages();

    if (
      pageConfig &&
      !completedPages.includes(pathname) &&
      !globallyDisabled
    ) {
      // Auto-start onboarding for new pages
      if (!isEnabled) {
        toggleOnboarding();
      }
    }
  }, [pathname]);

  return {
    hasOnboarding: !!onboardingConfig[pathname],
    isCompleted: getCompletedPages().includes(pathname),
    isEnabled,
    toggleOnboarding
  };
};
