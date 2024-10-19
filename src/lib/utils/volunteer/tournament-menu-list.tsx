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

export function getTournamentMenuList(
  pathname: string,
  routeName: string
): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/volunteers/tournaments/${routeName}`,
          label: "Tournament Info",
          active: pathname === `/volunteers/tournaments/${routeName}`,
          icon: List,
          submenus: [],
        },
        {
          href: `/volunteers/tournaments/${routeName}/invitations`,
          label: "Invitations",
          active: pathname === `/volunteers/tournaments/${routeName}/invitations`,
          icon: Mails,
          submenus: [],
        },
        {
          href: `/volunteers/tournaments/${routeName}/teams`,
          label: "Teams",
          active: pathname === `/volunteers/tournaments/${routeName}/teams`,
          icon: Users,
          submenus: [],
        },
        {
          href: `/volunteers/tournaments/${routeName}/pairings`,
          label: "Pairings",
          active: pathname === `/volunteers/tournaments/${routeName}/pairings`,
          icon: Network,
          submenus: [
            {
              href: `/volunteers/tournaments/${routeName}/pairings/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/volunteers/tournaments/${routeName}/pairings/preliminaries`,
            },
            {
              href: `/volunteers/tournaments/${routeName}/pairings/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/volunteers/tournaments/${routeName}/pairings/elimination`,
            },
          ],
        },
        {
          href: `/volunteers/tournaments/${routeName}/rooms`,
          label: "Rooms",
          active: pathname === `/volunteers/tournaments/${routeName}/rooms`,
          icon: DoorOpen,
          submenus: [],
        },
        {
          href: `/volunteers/tournaments/${routeName}/judges`,
          label: "Judges",
          active: pathname === `/volunteers/tournaments/${routeName}/judges`,
          icon: Users,
          submenus: [],
        },
        {
          href: `/volunteers/tournaments/${routeName}/ballots`,
          label: "Ballots",
          active: pathname === `/volunteers/tournaments/${routeName}/ballots`,
          icon: BookText,
          submenus: [
            {
              href: `/volunteers/tournaments/${routeName}/ballots/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/volunteers/tournaments/${routeName}/ballots/preliminaries`,
            },
            {
              href: `/volunteers/tournaments/${routeName}/ballots/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/volunteers/tournaments/${routeName}/ballots/elimination`,
            },
          ],
        },
      ],
    },
  ];
}
