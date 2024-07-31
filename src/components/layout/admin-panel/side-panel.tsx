import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Panelheader = ({ children, className }: Props) => (
  <SheetHeader className={cn(
    "w-full h-14 border-b border-muted shadow grid items-center px-4",
    className
  )}>
    {children}
  </SheetHeader>
);

function SidePanel({ children }: Props) {
  return (
    <SheetContent
      className="h-[calc(100vh_-_56px)] top-[57px] p-0"
      isOverlayVisible={false}
    >
      {children}
    </SheetContent>
  );
}

export default SidePanel;
