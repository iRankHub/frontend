"use client";

import Link from "next/link";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  dataOnboardingId?: string;
};

interface CollapseMenuButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  dataOnboardingId?: string;
  submenus: Submenu[];
  isOpen: boolean | undefined;
  defaultOpen?: boolean;
  onMobileNavigate?: () => void;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  dataOnboardingId,
  isOpen,
  defaultOpen = false,
  onMobileNavigate,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive || defaultOpen);

  useEffect(() => {
    setIsCollapsed(defaultOpen || isSubmenuActive);
  }, [defaultOpen, isSubmenuActive]);

  const handleLinkClick = () => {
    onMobileNavigate?.();
  };

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        data-onboarding-id={dataOnboardingId}
        asChild
      >
        <Button
          variant={active ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start h-10 mb-1 text-background dark:text-foreground font-bold group",
            active && "bg-[#F5AE73] hover:bg-[#F5AE73]"
          )}
        >
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon
                  size={18}
                  className={cn(!active && "group-hover:text-primary")}
                />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0",
                  !active && "group-hover:text-primary"
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0"
              )}
            >
              <ChevronDown
                size={18}
                className={cn(
                  "transition-transform duration-200",
                  !active && "group-hover:text-primary"
                )}
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active, dataOnboardingId: subMenuOnboardingId }, index) => (
          <Button
            key={index}
            data-onboarding-id={subMenuOnboardingId}
            variant={active ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start h-10 mb-1 text-background dark:text-foreground font-bold group",
              active && "bg-[#F5AE73] hover:bg-[#F5AE73]"
            )}
            asChild
          >
            <Link href={href} onClick={handleLinkClick}>
              <span className="mr-4 ml-2">
                <Dot
                  size={18}
                  className={cn(!active && "group-hover:text-primary")}
                />
              </span>
              <p
                className={cn(
                  "max-w-[170px] truncate",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0",
                  !active && "group-hover:text-primary"
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={active ? "secondary" : "ghost"}
                data-onboarding-id={dataOnboardingId}
                className={cn(
                  "w-full justify-start h-10 mb-1 text-background dark:text-foreground font-bold group",
                  active && "bg-[#F5AE73] hover:bg-[#F5AE73]"
                )}
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100",
                        !active && "group-hover:text-primary"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label, dataOnboardingId: subMenuOnboardingId }, index) => (
          <DropdownMenuItem
            key={index}
            asChild
          >
            <Link
              className="cursor-pointer"
              href={href}
              data-onboarding-id={subMenuOnboardingId}
              onClick={handleLinkClick}
            >
              <p className="max-w-[180px] truncate">{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
