'use client'
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        // Add a slight delay to ensure content is rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [pathname, searchParams]);
}
