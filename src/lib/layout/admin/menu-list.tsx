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
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/dashboard/inbox",
            label: "Inbox",
            active: pathname.includes("/dashboard/inbox"),
            icon: InboxIcon,
            submenus: []
          },
          {
            href: "/dashboard/tournaments",
            label: "Tournaments",
            active: pathname.includes("/dashboard/tournaments"),
            icon: Sheet,
            submenus: [
              {
                href: "/dashboard/tournaments/formats",
                label: "Formats",
                active: pathname === "/formats"
              },
              {
                href: "/dashboard/tournaments/leagues",
                label: "Leagues",
                active: pathname === "/leagues"
              },
              {
                href: "/dashboard/tournaments/create",
                label: "Create Tournament",
                active: pathname === "/create"
              },
              {
                href: "/dashboard/tournaments/list",
                label: "List Tournaments",
                active: pathname === "/list"
              },
            ]
          },
          {
            href: "/dashboard/users",
            label: "Users",
            active: pathname.includes("/dashboard/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "/dashboard/logistics",
            label: "Logistics",
            active: pathname.includes("/dashboard/logistics"),
            icon: Sheet,
            submenus: [
              {
                href: "/dashboard/logistics/billings",
                label: "Billings",
                active: pathname === "/billings"
              },
              {
                href: "/dashboard/logistics/orders",
                label: "Mission Orders",
                active: pathname === "/orders"
              },
            ]
          },
          {
            href: "/dashboard/reports",
            label: "Reporting & Analytics",
            active: pathname.includes("/dashboard/reports"),
            icon: File,
            submenus: []
          },
          {
            href: "/dashboard/archives",
            label: "Archives",
            active: pathname.includes("/dashboard/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }