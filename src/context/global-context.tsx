'use client'
import React, { useEffect, useState } from "react";

const AppStateContext = React.createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    sidebarOpen: false,
    setSidebarOpen: () => null,
});

export function useAppState() {
  const value = React.useContext(AppStateContext);
  if (!value) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return value;
}

const AppStateProvider = ({ children }: React.PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AppStateContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;