import {
  Users,
  LucideIcon,
  List,
  Mails,
  Network,
  DoorOpen,
  BookText,
  BarChart,
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
          href: `/schools/profile`,
          label: "Profile",
          active: pathname === `/schools/profile`,
          icon: List,
          submenus: [],
        },
        {
          href: `/schools/profile/account`,
          label: "Account",
          active: pathname === `/schools/profile/account`,
          icon: Mails,
          submenus: [],
        },
        {
          href: `/schools/profile/passwords`,
          label: "Passwords",
          active: pathname === `/schools/profile/passwords`,
          icon: Users,
          submenus: [],
        },
      ],
    },
  ];
}
