"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTournamentMenuList } from "@/lib/utils/admin/tournament-menu-list";
import { useState } from "react";
import { Command } from "@/components/ui/command";
import { CollapseMenuButton } from "../../create/collapse-menu-button";
import { Input } from "@/components/ui/input";

export function TournamentMenu() {
  const pathname = usePathname();
  const { name: routeName } = useParams<{ name: string }>();
  const menuList = getTournamentMenuList(pathname, routeName);
  const [isOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter menu based on the search term
  const filteredMenuList = menuList
    .map((group) => ({
      ...group,
      menus: group.menus.filter(({ label }) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((group) => group.menus.length > 0);
  return (
    <div className="hidden xl:inline w-full max-w-xs">
      <div className="flex items-center gap-3 mt-2 h-auto">
        <Command className="rounded-md w-full border">
          <Input
            placeholder="Search leagues..."
            className="ring-0 h-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Command>
      </div>
      <p className="text-muted-foreground text-xs italic font-medium mt-1">
        {filteredMenuList.reduce((acc, group) => acc + group.menus.length, 0)}{" "}
        records found
      </p>
      <ScrollArea className="[&>div>div[style]]:!block">
        <nav className="mt-8 h-full w-full">
          <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
            {filteredMenuList.map(({ groupLabel, menus }, index) => (
              <li
                className={cn("w-full", groupLabel ? "pt-5" : "")}
                key={index}
              >
                <p className="text-sm font-medium text-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
                {menus.map(
                  ({ href, label, icon: Icon, active, submenus }, index) =>
                    submenus.length === 0 ? (
                      <div className="w-full mb-2.5" key={index}>
                        <Button
                          variant={active ? "ghost" : "outline"}
                          className={cn(
                            "w-full justify-start h-10 mb-1 text-foreground font-medium hover:bg-input border-none ring-0 hover:text-foreground p-0",
                            !active ? "bg-transparent" : "bg-input"
                          )}
                          asChild
                        >
                          <Link href={href}>
                            <span className="mr-2 bg-input p-2 rounded-lg text-primary">
                              <Icon size={18} />
                            </span>
                            <p
                              className={cn(
                                "max-w-[200px] truncate",
                                isOpen === false
                                  ? "-translate-x-96 opacity-0"
                                  : "translate-x-0 opacity-100"
                              )}
                            >
                              {label}
                            </p>
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="w-full mb-2.5" key={index}>
                        <CollapseMenuButton
                          icon={Icon}
                          label={label}
                          active={active}
                          submenus={submenus}
                          isOpen={isOpen}
                        />
                      </div>
                    )
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
