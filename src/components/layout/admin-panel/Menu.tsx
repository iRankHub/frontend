"use client";

import React from "react";
import Link from "next/link";
import { Ellipsis, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { getMenuList } from "@/lib/utils/menu-list";
import { CollapseMenuButton } from "./collapse-menu-button";
import { useUserStore } from "@/stores/auth/auth.store";

interface MenuProps {
  isOpen: boolean | undefined;
  onMobileNavigate?: () => void;
}

export function Menu({ isOpen, onMobileNavigate }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  const { logout } = useUserStore((state) => state);

  const handleLinkClick = () => {
    // Only close on mobile
    if (window.innerWidth < 1024) { // 1024px is the lg breakpoint in Tailwind
      onMobileNavigate?.();
    }
  };

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full" id="dashboard-section">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-50px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, groupIndex) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={groupIndex}>
              {menus.map(
                ({ href, label, icon: Icon, active, dataOnboardingId, submenus }, menuIndex) =>
                  submenus.length === 0 ? (
                    <div
                      className="w-full"
                      key={menuIndex}
                      data-menu-item={label.toLowerCase().replace(/ /g, '-')}
                      data-onboarding-id={dataOnboardingId}
                    >
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={active ? "secondary" : "ghost"}
                              className={cn(
                                "w-full justify-start h-10 mb-1 text-background dark:text-foreground font-bold group",
                                active && "bg-[#F5AE73] hover:bg-[#F5AE73]"
                              )}
                              asChild
                            >
                              <Link href={href} onClick={handleLinkClick}>
                                <span className={cn(isOpen === false ? "" : "mr-4")}>
                                  <Icon
                                    size={18}
                                    className={cn(
                                      !active && "group-hover:text-primary dark:text-foreground"
                                    )}
                                  />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100",
                                    !active && "group-hover:text-primary dark:text-foreground"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={menuIndex}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                        dataOnboardingId={dataOnboardingId}
                        onMobileNavigate={handleLinkClick}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {
                      handleLinkClick();
                      logout();
                    }}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5 group dark:bg-foreground outline-none ring-0 border-0"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut
                        size={18}
                        className={cn("group-hover:text-primary text-foreground dark:text-background")}
                      />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap text-foreground dark:text-background",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100",
                        "group-hover:text-primary"
                      )}
                    >
                      Sign out
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Sign out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
