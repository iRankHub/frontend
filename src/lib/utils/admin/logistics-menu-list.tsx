import {
    Users,
    LucideIcon,
    List,
    Mails,
    Network,
    DoorOpen,
    BookText,
    BarChart,
    HandCoins,
    Grid2X2,
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
  
  export function getLogisticsMenuList(
    pathname: string,
    routeName: string
  ): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: `/admin/tournaments/list/${routeName}/logistics/billings`,
            label: "Billings",
            active: pathname === `/admin/tournaments/list/${routeName}/logistics/billings`,
            icon: HandCoins,
            submenus: [],
          },
          {
            href: `/admin/tournaments/list/${routeName}/logistics/billings/expenses`,
            label: "Expenses",
            active: pathname === `/admin/tournaments/list/${routeName}/logistics/billings/expenses`,
            icon: Grid2X2,
            submenus: [],
          },
        ],
      },
    ];
  }
  