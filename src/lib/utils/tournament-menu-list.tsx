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
          href: `/admin/tournaments/list/${routeName}`,
          label: "Tournament Info",
          active: pathname.includes(`/admin/tournaments/list/${routeName}`),
          icon: List,
          submenus: [],
        },
        {
          href: `/admin/tournaments/list/${routeName}/invitations`,
          label: "Invitations",
          active: pathname.includes(
            `/admin/tournaments/${routeName}/invitations`
          ),
          icon: Mails,
          submenus: [],
        },
        {
          href: `/admin/tournaments/list/${routeName}/teams`,
          label: "Teams",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/teams`
          ),
          icon: Users,
          submenus: [],
        },
        {
          href: `/admin/tournaments/list/${routeName}/pairings`,
          label: "Pairings",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/pairings`
          ),
          icon: Network,
          submenus: [
            {
              href: `/admin/tournaments/list/${routeName}/pairings/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/pairings/preliminaries`,
            },
            {
              href: `/admin/tournaments/list/${routeName}/pairings/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/pairings/elimination`,
            },
          ],
        },
        {
          href: `/admin/tournaments/list/${routeName}/rooms`,
          label: "Rooms",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/rooms`
          ),
          icon: DoorOpen,
          submenus: [],
        },
        {
          href: `/admin/tournaments/list/${routeName}/judges`,
          label: "Judges",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/judges`
          ),
          icon: Users,
          submenus: [],
        },
        {
          href: `/admin/tournaments/list/${routeName}/ballots`,
          label: "Ballots",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/ballots`
          ),
          icon: BookText,
          submenus: [
            {
              href: `/admin/tournaments/list/${routeName}/ballots/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/ballots/preliminaries`,
            },
            {
              href: `/admin/tournaments/list/${routeName}/ballots/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/ballots/elimination`,
            },
          ],
        },
        {
          href: `/admin/tournaments/list/${routeName}/ranking`,
          label: "Ranking",
          active: pathname.includes(
            `/admin/tournaments/list/${routeName}/ranking`
          ),
          icon: BarChart,
          submenus: [
            {
              href: `/admin/tournaments/list/${routeName}/ranking/preliminaries`,
              label: "Preliminaries",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/ranking/preliminaries`,
            },
            {
              href: `/admin/tournaments/list/${routeName}/ranking/elimination`,
              label: "Elimination",
              active:
                pathname ===
                `/admin/tournaments/list/${routeName}/ranking/elimination`,
            },
          ],
        },
      ],
    },
  ];
}
