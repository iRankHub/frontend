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
          href: `/students/tournaments/${routeName}`,
          label: "Tournament Info",
          active: pathname.includes(`/students/tournaments/${routeName}`),
          icon: List,
          submenus: [],
        },
        {
          href: `/students/tournaments/${routeName}/invitations`,
          label: "Invitations",
          active: pathname.includes(
            `/students/tournaments/${routeName}/invitations`
          ),
          icon: Mails,
          submenus: [],
        },
        {
          href: `/students/tournaments/${routeName}/teams`,
          label: "Teams",
          active: pathname.includes(
            `/students/tournaments/${routeName}/teams`
          ),
          icon: Users,
          submenus: [],
        },
        {
          href: `/students/tournaments/${routeName}/pairings`,
          label: "Pairings",
          active: pathname.includes(
            `/students/tournaments/${routeName}/pairings`
          ),
          icon: Network,
          submenus: [
            {
              href: `/students/tournaments/${routeName}/pairings/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/students/tournaments/${routeName}/pairings/preliminaries`,
            },
            {
              href: `/students/tournaments/${routeName}/pairings/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/students/tournaments/${routeName}/pairings/elimination`,
            },
          ],
        },
        {
          href: `/students/tournaments/${routeName}/rooms`,
          label: "Rooms",
          active: pathname.includes(
            `/students/tournaments/${routeName}/rooms`
          ),
          icon: DoorOpen,
          submenus: [],
        },
        {
          href: `/students/tournaments/${routeName}/judges`,
          label: "Judges",
          active: pathname.includes(
            `/students/tournaments/${routeName}/judges`
          ),
          icon: Users,
          submenus: [],
        },
        {
          href: `/students/tournaments/${routeName}/ballots`,
          label: "Ballots",
          active: pathname.includes(
            `/students/tournaments/${routeName}/ballots`
          ),
          icon: BookText,
          submenus: [
            {
              href: `/students/tournaments/${routeName}/ballots/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ballots/preliminaries`,
            },
            {
              href: `/students/tournaments/${routeName}/ballots/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ballots/elimination`,
            },
          ],
        },
        {
          href: `/students/tournaments/${routeName}/ranking`,
          label: "Ranking",
          active: pathname.includes(
            `/students/tournaments/${routeName}/ranking`
          ),
          icon: BarChart,
          submenus: [
            {
              href: `/students/tournaments/${routeName}/ranking/speakers`,
              label: "Speakers",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ranking/speakers`,
            },
            {
              href: `/students/tournaments/${routeName}/ranking/teams`,
              label: "Teams",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ranking/teams`,
            },
            {
              href: `/students/tournaments/${routeName}/ranking/schools`,
              label: "Schools",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ranking/schools`,
            },
            {
              href: `/students/tournaments/${routeName}/ranking/volunteers`,
              label: "Volunteers",
              active:
                pathname ===
                `/students/tournaments/${routeName}/ranking/volunteers`,
            },
          ],
        },
      ],
    },
  ];
}
