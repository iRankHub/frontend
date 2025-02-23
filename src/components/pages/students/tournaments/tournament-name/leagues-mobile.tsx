"use client";

import React, { useState } from "react";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CollapseMenuButton } from "@/components/layout/students-panel/collapse-menu-button";
import { getTournamentMenuList } from "@/lib/utils/students/tournament-menu-list";

function LeaguesMobile() {
  const pathname = usePathname();
  const { name: routeName } = useParams<{ name: string }>();
  const menuList = getTournamentMenuList(pathname, routeName);
  const [isOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter menu based on the search term
  const filteredMenuList = menuList
    .map((group) => ({
      ...group,
      menus: group.menus.filter(
        ({ label, submenus }) =>
          label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submenus.some((submenu) =>
            submenu.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
      ),
    }))
    .filter((group) => group.menus.length > 0);

  // Count total matches including submenus
  const totalMatches = filteredMenuList.reduce((acc, group) => {
    return (
      acc +
      group.menus.reduce((menuAcc, menu) => {
        const submenuMatches = menu.submenus.filter((submenu) =>
          submenu.label.toLowerCase().includes(searchTerm.toLowerCase())
        ).length;
        const menuMatches = menu.label
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
          ? 1
          : 0;
        return menuAcc + menuMatches + submenuMatches;
      }, 0)
    );
  }, 0);

  // Function to determine if a menu item should be expanded
  const shouldExpandMenu = (menu: { label: string; submenus: any[] }) => {
    if (!searchTerm) return false;
    return menu.submenus.some((submenu) =>
      submenu.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <SidePanel panelHideOnbreakpoint="xl" className="overflow-auto">
      <Panelheader>
        <div className="w-full h-12 flex flex-row items-center justify-between px-3 pb-2">
          <h3 className="text-sm font-bold">Tournament Menu</h3>
        </div>
      </Panelheader>
      <div className="w-full p-3">
        <div className="flex items-center gap-3 mt-2 h-auto">
          <Command className="rounded-md w-full border">
            <Input
              placeholder="Search menu..."
              className="ring-0 h-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Command>
        </div>
        <p className="text-muted-foreground text-xs italic font-medium mt-1">
          {totalMatches}{" "}
          records found
        </p>
        <ScrollArea className="[&>div>div[style]]:!block">
          <nav className="mt-3 h-full w-full">
            <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1">
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
                            submenus={submenus.filter(
                              (submenu) =>
                                !searchTerm ||
                                submenu.label
                                  .toLowerCase()
                                  .includes(searchTerm.toLowerCase()) ||
                                label.toLowerCase().includes(searchTerm.toLowerCase())
                            )}
                            isOpen={isOpen}
                            defaultOpen={shouldExpandMenu({ label, submenus })}
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
    </SidePanel>
  );
}

export default LeaguesMobile;
