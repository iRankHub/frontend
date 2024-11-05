import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import LeaguesMobile from "./menu-mobile";
import { Menu } from "./menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function AccountMenuWrapper({ children, className }: Props) {
  return (
    <div className={cn("mt-7 flex gap-5 relative", className)}>
      <Menu />
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
            <Icons.menuRight className="text-white w-5 h-5 scale-x-[-1] mr-1" />
          </Button>
        </SheetTrigger>
        <LeaguesMobile />
      </Sheet>
    </div>
  );
}

export default AccountMenuWrapper;
