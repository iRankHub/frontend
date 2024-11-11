import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon,
    InboxIcon,
    Sheet,
    File,
    ArchiveIcon,
    Ribbon
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
            href: "/schools/dashboard",
            label: "Dashboard",
            active: pathname.includes("/schools/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/schools/tournaments",
            label: "Tournaments",
            active: pathname.includes("/schools/tournaments"),
            icon: Sheet,
            submenus: []
          },
          {
            href: "/schools/performance",
            label: "Performance",
            active: pathname.includes("/schools/performance"),
            icon: Ribbon,
            submenus: []
          },
          {
            href: "/schools/archives",
            label: "Archives",
            active: pathname.includes("/schools/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }