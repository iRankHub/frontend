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
            href: "/admin/dashboard",
            label: "Dashboard",
            active: pathname.includes("/admin/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/admin/tournaments",
            label: "Tournaments",
            active: pathname.includes("/admin/tournaments"),
            icon: Sheet,
            submenus: [
              {
                href: "/admin/tournaments/formats",
                label: "Formats",
                active: pathname === "/formats"
              },
              {
                href: "/admin/tournaments/leagues",
                label: "Leagues",
                active: pathname === "/leagues"
              },
              {
                href: "/admin/tournaments/create",
                label: "Create Tournament",
                active: pathname === "/create"
              },
              {
                href: "/admin/tournaments/list",
                label: "List Tournaments",
                active: pathname === "/list"
              },
            ]
          },
          {
            href: "/admin/users",
            label: "Users",
            active: pathname.includes("/admin/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "/admin/logistics",
            label: "Logistics",
            active: pathname.includes("/admin/logistics"),
            icon: Sheet,
            submenus: [
              {
                href: "/admin/logistics/billings",
                label: "Billings",
                active: pathname === "/billings"
              },
              {
                href: "/admin/logistics/orders",
                label: "Mission Orders",
                active: pathname === "/orders"
              },
            ]
          },
          {
            href: "/admin/reports",
            label: "Reporting & Analytics",
            active: pathname.includes("/admin/reports"),
            icon: File,
            submenus: []
          },
          {
            href: "/admin/archives",
            label: "Archives",
            active: pathname.includes("/admin/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }