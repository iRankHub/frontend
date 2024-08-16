import {
    Users,
    LayoutGrid,
    LucideIcon,
    Sheet,
    File,
    ArchiveIcon
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/students/dashboard",
            label: "Dashboard",
            active: pathname.includes("/students/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/students/tournaments",
            label: "Tournaments",
            active: pathname.includes("/students/tournaments"),
            icon: Sheet,
            submenus: []
          },
          {
            href: "/students/archives",
            label: "Archives",
            active: pathname.includes("/students/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }