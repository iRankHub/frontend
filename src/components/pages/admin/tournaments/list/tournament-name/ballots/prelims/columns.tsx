"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";
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
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { BallotPreliminaries } from "@/components/tables/data/schema";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

export const columns: ColumnDef<BallotPreliminaries>[] = [
  {
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[200px] truncate font-medium">
          {row.getValue("room")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "head_judge",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Head Judge"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("head_judge")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rec. Status" className="justify-center" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      const variant =
        status === "recorded"
          ? "bg-green-200 text-success hover:bg-green-200"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("status")}
          </Badge>
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
        buttonClassName="ml-0"
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
                <Icons.pencilLine className="w-5 h-5 text-primary" />
              </Button>
            </SheetTrigger>
            <SidePanel>
              <Panelheader>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-bold capitalize">
                    {row.getValue("room")}
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
                  <Speaker />
                  <Speaker />
                  <Speaker />
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

const Speaker = () => {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
        <span className="bg-transparent outline-none text-foreground font-semibold text-start">
          Bider Alec
        </span>
        <Icons.chevronUpDown className="w-3 h-3 text-border" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-3 w-full px-10">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex flex-col items-center gap-3">
            <span
              className={cn("text-sm text-muted-foreground font-medium", inter)}
            >
              Points
            </span>
            <Input
              placeholder="points"
              className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span
              className={cn("text-sm text-muted-foreground font-medium", inter)}
            >
              Rank
            </span>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
                <span className="text-white text-sm">1</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 border rounded-md">
                <span className="text-foreground text-sm">2</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 border rounded-md">
                <span className="text-foreground text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
        <Textarea placeholder="Add comment" className="resize-none" />
      </CollapsibleContent>
    </Collapsible>
  );
};
