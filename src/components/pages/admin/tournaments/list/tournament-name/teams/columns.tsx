"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";
import { Teams } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

export const columns: ColumnDef<Teams>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="School ID" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[200px] truncate font-medium">
          {row.getValue("id")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "school",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="School"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("school")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "no_of_teams",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No. of Teams" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("no_of_teams")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "no_of_speakers",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No. of Speakers" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("no_of_speakers")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full h-6 items-center justify-center">
          <Sheet>
            <SheetTrigger>
              <Button
                type="button"
                variant={"secondary"}
                size={"icon"}
                className="w-full bg-transparent hover:bg-transparent m-0"
              >
                <Icons.view className="w-5 h-5 text-info" />
              </Button>
            </SheetTrigger>
            <SidePanel>
              <Panelheader>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-bold capitalize">
                    {row.getValue("school")}
                  </h3>
                  <Button
                    type="button"
                    className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                    size={"icon"}
                  >
                    <Icons.pencilLine className="w-4 h-4" />
                  </Button>
                </div>
              </Panelheader>
              <div className="w-full h-[calc(100%_-_70px)] p-5 flex flex-col">
                <div className="w-full flex-1">
                  <div className="w-full leading-6 mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-foreground">
                        Green Hills Team 1
                      </h3>
                      <Badge className="bg-primary hover:bg-primary text-sm text-white">
                        Negative
                      </Badge>
                    </div>
                    <p
                      className={cn(
                        "text-sm text-muted-foreground font-medium",
                        inter
                      )}
                    >
                      Speakers
                    </p>
                  </div>
                  <Team />
                  <Team />
                  <Team />
                </div>
                <Button>
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
            </SidePanel>
          </Sheet>
        </div>
      );
    },
    enableHiding: false,
    maxSize: 20,
  },
];

const Team = () => {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
        <span className="bg-transparent outline-none text-foreground font-semibold text-start">
          Team 1
        </span>
        <Icons.chevronUpDown className="w-3 h-3 text-border" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-3 w-full">
        <div className="flex items-center justify-between gap-3">
          <Card className="w-full px-4 py-5">
            <p className="text-foreground text-sm mb-2">Speaker 1: Bideri Alec</p>
            <p className="text-foreground text-sm mb-2">Speaker 2: Iman Koulibally</p>
            <p className="text-foreground text-sm mb-2">Speaker 3: Joselyto</p>
          </Card>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
