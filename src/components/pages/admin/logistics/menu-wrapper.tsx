import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { LogisticsMenu } from "./menu";
import LogisticsMobileMenu from "./menu-mobile";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function MenuWrapper({ children, className }: Props) {
  return (
    <div className={cn(
        "mt-7 flex gap-5 relative",
        className
    )}>
      <LogisticsMenu />
      <div className="bg-background w-full min-h-full rounded-md border border-gray-200 pb-4">
        {children}
      </div>
      <Sheet>
        <SheetTrigger>
          <Button
            type="button"
            size={"icon"}
            className="flex xl:hidden fixed right-5 bottom-5 bg-primary rounded-full cursor-pointer z-50 hover:bg-primary"
          >
            <Icons.menuRight className="text-white w-5 h-5" />
          </Button>
        </SheetTrigger>
        <LogisticsMobileMenu />
      </Sheet>
    </div>
  );
}

export default MenuWrapper;
