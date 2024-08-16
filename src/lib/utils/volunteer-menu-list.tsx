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
            href: "/volunteers/dashboard",
            label: "Dashboard",
            active: pathname.includes("/volunteers/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/volunteers/tournaments",
            label: "Tournaments",
            active: pathname.includes("/volunteers/tournaments"),
            icon: Sheet,
            submenus: []
          },
          {
            href: "/volunteers/archives",
            label: "Archives",
            active: pathname.includes("/volunteers/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }