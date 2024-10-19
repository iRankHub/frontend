import {
  Users,
  LucideIcon,
  Mails,
  UserRoundPlus,
  CircleUserRound,
  RectangleEllipsis,
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

export function getProfileMenuList(
  pathname: string,
): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/volunteers/profile`,
          label: "Profile",
          active: pathname === `/volunteers/tournaments`,
          icon: UserRoundPlus,
          submenus: [],
        },
        {
          href: `/volunteers/profile`,
          label: "Account",
          active: pathname === `/volunteers/profile`,
          icon: CircleUserRound,
          submenus: [],
        },
        {
          href: `/volunteers/password`,
          label: "Password",
          active: pathname === `/volunteers/password`,
          icon: RectangleEllipsis,
          submenus: [],
        },
      ],
    },
  ];
}
