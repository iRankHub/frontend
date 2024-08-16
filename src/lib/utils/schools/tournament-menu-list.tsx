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
          href: `/schools/tournaments/${routeName}`,
          label: "Tournament Info",
          active: pathname === `/schools/tournaments/${routeName}`,
          icon: List,
          submenus: [],
        },
        {
          href: `/schools/tournaments/${routeName}/invitations`,
          label: "Invitations",
          active: pathname.includes(
            `/schools/tournaments/${routeName}/invitations`
          ),
          icon: Mails,
          submenus: [],
        },
        {
          href: `/schools/tournaments/${routeName}/teams`,
          label: "Teams",
          active: pathname === `/schools/tournaments/${routeName}/teams`,
          icon: Users,
          submenus: [
            {
              href: `/schools/tournaments/${routeName}/teams/add-teams`,
              label: "Add Teams",
              active: pathname === `/schools/tournaments/${routeName}/teams/add-teams`,
            },
            {
              href: `/schools/tournaments/${routeName}/teams/view-teams`,
              label: "View Teams",
              active:
                pathname === `/schools/tournaments/${routeName}/teams/view-teams`,
            },
          ],
        },
        {
          href: `/schools/tournaments/${routeName}/pairings`,
          label: "Pairings",
          active: pathname === `/schools/tournaments/${routeName}/pairings`,
          icon: Network,
          submenus: [
            {
              href: `/schools/tournaments/${routeName}/pairings/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/pairings/preliminaries`,
            },
            {
              href: `/schools/tournaments/${routeName}/pairings/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/pairings/elimination`,
            },
          ],
        },
        {
          href: `/schools/tournaments/${routeName}/rooms`,
          label: "Rooms",
          active: pathname.includes(`/schools/tournaments/${routeName}/rooms`),
          icon: DoorOpen,
          submenus: [],
        },
        {
          href: `/schools/tournaments/${routeName}/judges`,
          label: "Judges",
          active: pathname.includes(`/schools/tournaments/${routeName}/judges`),
          icon: Users,
          submenus: [],
        },
        {
          href: `/schools/tournaments/${routeName}/ballots`,
          label: "Ballots",
          active: pathname === `/schools/tournaments/${routeName}/ballots`,
          icon: BookText,
          submenus: [
            {
              href: `/schools/tournaments/${routeName}/ballots/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/ballots/preliminaries`,
            },
            {
              href: `/schools/tournaments/${routeName}/ballots/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/ballots/elimination`,
            },
          ],
        },
        {
          href: `/schools/tournaments/${routeName}/ranking`,
          label: "Ranking",
          active: pathname === `/schools/tournaments/${routeName}/ranking`,
          icon: BarChart,
          submenus: [
            {
              href: `/schools/tournaments/${routeName}/ranking/speakers`,
              label: "Speakers",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/ranking/speakers`,
            },
            {
              href: `/schools/tournaments/${routeName}/ranking/teams`,
              label: "Teams",
              active:
                pathname === `/schools/tournaments/${routeName}/ranking/teams`,
            },
            {
              href: `/schools/tournaments/${routeName}/ranking/schools`,
              label: "Schools",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/ranking/schools`,
            },
            {
              href: `/schools/tournaments/${routeName}/ranking/volunteers`,
              label: "Volunteers",
              active:
                pathname ===
                `/schools/tournaments/${routeName}/ranking/volunteers`,
            },
          ],
        },
      ],
    },
  ];
}
