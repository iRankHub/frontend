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
            href: "/admin/dashboard/inbox",
            label: "Inbox",
            active: pathname.includes("/admin/dashboard/inbox"),
            icon: InboxIcon,
            submenus: []
          },
          {
            href: "/admin/dashboard/tournaments",
            label: "Tournaments",
            active: pathname.includes("/admin/dashboard/tournaments"),
            icon: Sheet,
            submenus: [
              {
                href: "/admin/dashboard/tournaments/formats",
                label: "Formats",
                active: pathname === "/formats"
              },
              {
                href: "/admin/dashboard/tournaments/leagues",
                label: "Leagues",
                active: pathname === "/leagues"
              },
              {
                href: "/admin/dashboard/tournaments/create",
                label: "Create Tournament",
                active: pathname === "/create"
              },
              {
                href: "/admin/dashboard/tournaments/list",
                label: "List Tournaments",
                active: pathname === "/list"
              },
            ]
          },
          {
            href: "/admin/dashboard/users",
            label: "Users",
            active: pathname.includes("/admin/dashboard/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "/admin/dashboard/logistics",
            label: "Logistics",
            active: pathname.includes("/admin/dashboard/logistics"),
            icon: Sheet,
            submenus: [
              {
                href: "/admin/dashboard/logistics/billings",
                label: "Billings",
                active: pathname === "/billings"
              },
              {
                href: "/admin/dashboard/logistics/orders",
                label: "Mission Orders",
                active: pathname === "/orders"
              },
            ]
          },
          {
            href: "/admin/dashboard/reports",
            label: "Reporting & Analytics",
            active: pathname.includes("/admin/dashboard/reports"),
            icon: File,
            submenus: []
          },
          {
            href: "/admin/dashboard/archives",
            label: "Archives",
            active: pathname.includes("/admin/dashboard/archives"),
            icon: ArchiveIcon,
            submenus: []
          },
        ]
      },
    ];
  }