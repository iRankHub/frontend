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
          href: `/volunteers/profile`,
          label: "Profile",
          active: pathname === `/volunteers/profile`,
          icon: List,
          submenus: [],
        },
        {
          href: `/volunteers/profile/account`,
          label: "Account",
          active: pathname === `/volunteers/profile/account`,
          icon: Mails,
          submenus: [],
        },
        {
          href: `/volunteers/profile/passwords`,
          label: "Passwords",
          active: pathname === `/volunteers/profile/passwords`,
          icon: Users,
          submenus: [],
        },
      ],
    },
  ];
}
