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
          href: `/admin/profile`,
          label: "Profile",
          active: pathname === `/admin/profile`,
          icon: List,
          submenus: [],
        },
        {
          href: `/admin/profile/passwords`,
          label: "Passwords",
          active: pathname === `/admin/profile/passwords`,
          icon: Users,
          submenus: [],
        },
        {
          href: `/admin/profile/two-factor`,
          label: "2 Factor Authentication",
          active: pathname === `/admin/profile/two-factor`,
          icon: KeyRound,
          submenus: [],
        }
      ],
    },
  ];
}
