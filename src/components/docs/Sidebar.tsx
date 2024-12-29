'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig, NavItem } from "@/lib/docs/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (href: string) => {
    setOpenSections((prev) =>
      prev.includes(href)
        ? prev.filter((section) => section !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const isOpen = (href: string) => {
    return openSections.includes(href) || isActive(href);
  };

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      const active = isActive(item.href);
      const open = isOpen(item.href);
      const Icon = item.icon;

      if (item.items) {
        return (
          <Collapsible
            key={item.href}
            open={open}
            onOpenChange={() => toggleSection(item.href)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between",
                  active && "bg-accent"
                )}
              >
                <div className="flex items-center">
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  {item.title}
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform",
                    open && "rotate-90"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-4 border-l pl-4">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "block py-2 text-sm",
                      isActive(subItem.href) && "font-medium text-primary",
                      !isActive(subItem.href) && "text-muted-foreground"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      }

      return (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            className={cn("w-full justify-start", active && "bg-accent")}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {item.title}
          </Button>
        </Link>
      );
    });
  };

  return (
    <div className={cn("w-full", className)}>
      <nav className="grid gap-2 px-4">
        {renderNavItems(docsConfig)}
      </nav>
    </div>
  );
}
