"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { TooltipProps } from '@/types';
import { cn } from "@/lib/utils";

const OnboardingTooltip: React.FC<TooltipProps> = ({
  title,
  description,
  targetId,
  position = 'right',
  onNext,
  onPrevious,
  isFirst,
  isLast,
  onSkip,
  sidebarOpen
}) => {
  const [coords, setCoords] = useState({ top: 190, left: 290 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      const target = document.getElementById(targetId);
      const tooltip = tooltipRef.current;

      if (target && tooltip) {
        const rect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = rect.top;
        let left = rect.left;

        // Adjust based on sidebar state
        const sidebarWidth = sidebarOpen ? 288 : 90; // w-72 = 18rem = 288px

        switch (position) {
          case 'right':
            left = sidebarWidth + 16; // Position next to sidebar
            top = rect.top + (rect.height / 2);
            break;
          case 'left':
            left = rect.left - tooltipRect.width - 16;
            top = rect.top + (rect.height / 2);
            break;
          case 'bottom':
            top = rect.bottom + 16;
            left = rect.left + (rect.width / 2);
            break;
          case 'top':
            top = rect.top - tooltipRect.height - 16;
            left = rect.left + (rect.width / 2);
            break;
        }

        // Ensure tooltip stays within viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Prevent right overflow
        if (left + tooltipRect.width > viewportWidth) {
          left = viewportWidth - tooltipRect.width - 16;
        }

        // Prevent bottom overflow
        if (top + tooltipRect.height > viewportHeight) {
          top = viewportHeight - tooltipRect.height - 16;
        }

        // Prevent top overflow
        if (top < 0) {
          top = 16;
        }

        setCoords({ top, left });
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
  }, [targetId, position, sidebarOpen]);

  return (
    <div
      ref={tooltipRef}
      className={cn(
        "fixed z-50 bg-white rounded-lg shadow-lg p-4 w-80",
        "dark:bg-zinc-900 dark:border dark:border-zinc-800"
      )}
      style={{
        top: coords.top,
        left: coords.left,
        transform: position === 'right' || position === 'left'
          ? 'translateY(-50%)'
          : 'translateX(-50%)',
        maxWidth: '90vw'
      }}
    >
      <h3 className="font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">{description}</p>
      <div className="flex justify-between">
        <div>
          {!isFirst && (
            <Button
              variant="outline"
              size="sm"
              onClick={onPrevious}
              className="dark:border-zinc-700"
            >
              Previous
            </Button>
          )}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onSkip}
            className="dark:border-zinc-700"
          >
            Skip Tour
          </Button>
          <Button size="sm" onClick={onNext}>
            {isLast ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTooltip;
