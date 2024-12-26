'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { useOnboarding } from '@/context/OnboardingContext';
import { OnboardingTooltip } from './OnboardingTooltip';
import { onboardingConfig } from '@/config/onboarding';

export const OnboardingWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isEnabled, globallyDisabled } = useOnboarding();

  const currentPageConfig = onboardingConfig[pathname];

  if (globallyDisabled || !currentPageConfig) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {isEnabled && currentPageConfig && (
        <OnboardingTooltip pageConfig={currentPageConfig} />
      )}
    </>
  );
};
