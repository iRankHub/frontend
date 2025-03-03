import React from 'react';
import { SWRConfig } from 'swr';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        errorRetryCount: 3,
        // You can add more global SWR config here
      }}
    >
      {children}
    </SWRConfig>
  );
};
