'use client';

import { useEffect } from 'react';

export default function ElectronInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.electronAPI && window.initializeLoading) {
      window.initializeLoading();
    }
  }, []);

  return null; // This component doesn't render anything
}