"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";
import { useStore } from "zustand";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "./sidebar-toggle";
import { Command, CommandInput } from "@/components/ui/command";
import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const { setTheme, theme } = useTheme();
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center gap-10">
        <div className="flex items-center space-x-4">
          <SheetMenu />
          <SidebarToggle
            isOpen={sidebar?.isOpen}
            setIsOpen={sidebar?.setIsOpen}
          />
          <Command className="rounded-md w-10 lg:w-72 border">
            <CommandInput
              placeholder="Type to search..."
              className="ring-0 h-8"
            />
          </Command>
        </div>
        <div className="flex flex-1 items-center space-x-3 justify-end">
          {/* <SwitchSun className="bg-muted" /> */}
          <ModeToggle />
          <DropdownMenu>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="rounded-full w-8 h-8 bg-background"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <Icons.bell className="w-[1.2rem] h-[1.2rem] text-muted-foreground m-1" />
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">Notifications</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenu>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
