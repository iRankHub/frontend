import {
  Users,
  LucideIcon,
  List,
  Mails,
  Network,
  DoorOpen,
  BookText,
  BarChart,
  KeyRound,
  BookTextIcon,
  CircleUser,
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
          href: `/admin/notification-settings/schools`,
          label: "Schools",
          active: pathname === `/admin/notification-settings/schools`,
          icon: BookTextIcon,
          submenus: [],
        },
        {
          href: `/admin/notification-settings/students`,
          label: "Students",
          active: pathname === `/admin/notification-settings/students`,
          icon: CircleUser,
          submenus: [],
        },
        {
          href: `/admin/notification-settings/volunteers`,
          label: "Volunteers",
          active: pathname === `/admin/notification-settings/volunteers`,
          icon: Users,
          submenus: [],
        }
      ],
    },
  ];
}
