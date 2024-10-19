import React from "react";
import { cn } from "../lib/utils";
import { useAppState } from "@/context/global-context";

const MaxWidthWrapper = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  const { sidebarOpen } = useAppState();
  return (
    <div
      className={cn(
        "p-5 max-w-[calc(100vw_-_288px)] ml-72 mt-20",
        className,
        !sidebarOpen && "ml-1"
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
