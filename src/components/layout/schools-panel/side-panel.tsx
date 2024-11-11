import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "left" | "bottom";
  panelHideOnbreakpoint?: "sm" | "lg" | "xl";
};

export const Panelheader = ({ children, className }: Props) => (
  <SheetTitle
    className={cn(
      "w-full h-14 border-b border-muted shadow grid items-center px-4",
      className
    )}
  >
    {children}
  </SheetTitle>
);

export const PanelBody = ({ children, className }: Props) => (
  <SheetHeader
    className={cn(
      "w-full !h-[calc(100%_-_56px)] overflow-hidden border-b border-muted shadow grid items-center px-4",
      className
    )}
  >
    {children}
  </SheetHeader>
);

function SidePanel({ children, className, side, panelHideOnbreakpoint }: Props) {
  return (
    <SheetContent
      className={cn("h-[calc(100vh_-_56px)] top-[57px] p-0", className, panelHideOnbreakpoint !== undefined && `${panelHideOnbreakpoint}:hidden`)}
      isOverlayVisible={false}
      side={side}
    >
      {children}
    </SheetContent>
  );
}

export default SidePanel;

