'use client';

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
import { ChevronRight, BookOpen } from "lucide-react";
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

  return (
    <div className={cn("w-full", className)}>
      {/* iRankHub Logo Section */}
      <div className="mb-8 px-4">
        <Link
          href="/docs"
          className="flex items-center space-x-2 text-foreground"
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">iRankHub</span>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">Documentation</p>
      </div>

      <nav className="grid gap-2 px-4">
        {docsConfig.map((item) => {
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
                      active && "bg-primary/10 text-primary hover:bg-primary/20",
                      "hover:bg-primary/10"
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
                  <div className="ml-4 mt-1 border-l pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block py-2 text-sm transition-colors hover:text-primary",
                          isActive(subItem.href)
                            ? "font-medium text-primary"
                            : "text-muted-foreground"
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
                className={cn(
                  "w-full justify-start",
                  active && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {item.title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
