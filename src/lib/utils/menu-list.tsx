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
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  dataOnboardingId?: string;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  dataOnboardingId?: string;
  icon: LucideIcon;
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
          submenus: [],
        },
        {
          href: "/admin/tournaments",
          label: "Tournaments",
          active: pathname.includes("/admin/tournaments"),
          dataOnboardingId: "tournaments-collapse-button",
          icon: Sheet,
          submenus: [
            {
              href: "/admin/tournaments/formats",
              label: "Formats",
              active: pathname === "/formats",
              dataOnboardingId: "tournaments-formats-submenu",
            },
            {
              href: "/admin/tournaments/leagues",
              label: "Leagues",
              active: pathname === "/leagues",
              dataOnboardingId: "tournaments-leagues-submenu",
            },
            {
              href: "/admin/tournaments/create",
              label: "Create Tournament",
              active: pathname === "/create",
              dataOnboardingId: "tournaments-create-submenu",
            },
            {
              href: "/admin/tournaments/list",
              label: "List Tournaments",
              active: pathname === "/list",
              dataOnboardingId: "tournaments-list-submenu",
            },
          ],
        },
        {
          href: "/admin/users",
          label: "Users",
          active: pathname.includes("/admin/users"),
          dataOnboardingId: "users",
          icon: Users,
          submenus: [],
        },
        {
          href: "/admin/reports",
          label: "Reporting & Analytics",
          active: pathname.includes("/admin/reports"),
          dataOnboardingId: "reporting-&-analytics",
          icon: File,
          submenus: [],
        },
        {
          href: "/admin/archives",
          label: "Archives",
          active: pathname.includes("/admin/archives"),
          dataOnboardingId: "archives",
          icon: ArchiveIcon,
          submenus: [],
        },
      ],
    },
  ];
}
