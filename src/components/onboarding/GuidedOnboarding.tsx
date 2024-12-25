"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingStep, HighlightOverlayProps } from '@/types';
import OnboardingTooltip from './OnboardingTooltip';
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

const HighlightOverlay: React.FC<HighlightOverlayProps> = ({ targetId, sidebarOpen }) => {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const target = document.getElementById(targetId);
      if (target) {
        const rect = target.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height
        });
      }
    };

    const observer = new MutationObserver(updatePosition);
    const target = document.getElementById(targetId);

    if (target) {
      observer.observe(target, {
        attributes: true,
        childList: true,
        subtree: true
      });
      updatePosition();
    }

    window.addEventListener('resize', updatePosition);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePosition);
    };
  }, [targetId, sidebarOpen]);

  return (
    <div className="fixed inset-0 bg-black/50 pointer-events-none z-40">
      <div
        className="absolute bg-transparent"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
          height: position.height,
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};

const steps: OnboardingStep[] = [
  {
    targetId: 'dashboard-section',
    title: 'Welcome to IrankHub!',
    description: 'Let\'s take a quick tour of your dashboard. Here you can monitor all activities and statistics.',
    position: 'right',
    route: '/admin/dashboard'
  },
  {
    targetId: 'tournaments-dropdown',
    title: 'Tournament Management',
    description: 'Expand this menu to access all tournament-related features including formats, leagues, and tournament creation.',
    position: 'right',
    waitForElement: true
  },
  {
    targetId: 'tournament-formats',
    title: 'Tournament Formats',
    description: 'Define and manage different tournament formats for your competitions.',
    position: 'right',
    waitForElement: true
  },
  {
    targetId: 'tournament-leagues',
    title: 'Tournament Leagues',
    description: 'Organize your tournaments into leagues and manage league settings.',
    position: 'right',
    waitForElement: true
  },
  {
    targetId: 'create-tournament',
    title: 'Create Tournament',
    description: 'Start creating a new tournament with customizable settings.',
    position: 'right',
    waitForElement: true
  },
  {
    targetId: 'list-tournaments',
    title: 'Tournament List',
    description: 'View and manage all your tournaments in one place.',
    position: 'right',
    waitForElement: true
  },
  {
    targetId: 'reports-section',
    title: 'Reports & Analytics',
    description: 'Access detailed reports and analytics about your tournaments and participants.',
    position: 'right',
    route: '/admin/reports'
  }
];

const GuidedOnboarding: React.FC = () => {
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sidebar = useStore(useSidebarToggle, (state) => state);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
      // Ensure sidebar is open for onboarding
      if (sidebar?.isOpen === false) {
        sidebar?.setIsOpen();
      }
    }
  }, [sidebar]);

  useEffect(() => {
    const checkElement = async () => {
      const step = steps[currentStep];
      if (step.waitForElement) {
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
          const element = document.getElementById(step.targetId);
          if (element) break;
          await new Promise(resolve => setTimeout(resolve, 500));
          attempts++;
        }
      }
    };

    if (showOnboarding) {
      checkElement();
    }
  }, [currentStep, showOnboarding]);

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      const nextStep = steps[currentStep + 1];

      if (nextStep.route) {
        await router.push(nextStep.route);
      }

      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = steps[currentStep - 1];
      if (prevStep.route) {
        router.push(prevStep.route);
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('hasCompletedOnboarding', 'true');
    setShowOnboarding(false);
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!showOnboarding) return null;

  return (
    <>
      <HighlightOverlay
        targetId={steps[currentStep].targetId}
        sidebarOpen={sidebar?.isOpen}
      />
      <OnboardingTooltip
        {...steps[currentStep]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSkip={handleSkip}
        isFirst={currentStep === 0}
        isLast={currentStep === steps.length - 1}
        sidebarOpen={sidebar?.isOpen}
      />
    </>
  );
};

export default GuidedOnboarding;
