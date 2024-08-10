"use client";

import { ColumnDef } from "@tanstack/react-table";

import { priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "names",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("names")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preliminary" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <Badge
            variant="default"
            className={`bg-green-200 hover:bg-green-200 text-success capitalize rounded-md`}
          >
            {row.getValue("preliminary")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "elimination",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Elimination" />
    ),
    cell: ({ row }) => {
      const value = row.getValue("elimination");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="flex items-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("elimination")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-1">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.view className="w-4 h-4 text-info" />
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button
                type="button"
                variant={"secondary"}
                size={"icon"}
                className="bg-transparent w-6 h-6 p-1 m-0"
              >
                <Icons.pencilLine className="w-4 h-4 text-primary" />
              </Button>
            </SheetTrigger>
            <SidePanel>
              <Panelheader>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-bold capitalize">
                    {row.getValue("names")}
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
                  <div className="w-full mb-3">
                    <span className="text-sm text-foreground font-medium">
                      Name
                    </span>
                    <Input
                      placeholder="room name"
                      value={"Room 1"}
                      className="text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <h3 className="uppercase text-xs my-5 text-muted-foreground font-semibold">
                    preliminary
                  </h3>
                  <div className="flex items-center gap-8 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        Round 1
                      </span>
                      <Badge className="bg-green-200 text-success hover:bg-green-200 rounded-md text-xs">
                        Occupied
                      </Badge>
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground">
                        Round 2
                      </span>
                      <Badge className="bg-green-200 text-success hover:bg-green-200 rounded-md text-xs">
                        Occupied
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground">
                        Round 3
                      </span>
                      <Badge className="bg-green-200 text-success hover:bg-green-200 rounded-md text-xs">
                        Occupied
                      </Badge>
                    </div>
                  </div>
                  <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold mt-5">
                    Elimination
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground">
                        Quater Finals
                      </span>
                      <Badge className="bg-secondary text-foreground hover:bg-secondary rounded-md text-xs">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground">
                        Semi Finals
                      </span>
                      <Badge className="bg-secondary text-foreground hover:bg-secondary rounded-md text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end ga-3">
                  <Button
                    variant={"default"}
                    size={"sm"}
                    className="hover:bg-primary"
                  >
                    Save Changes
                    <span className="sr-only">Save Changes</span>
                  </Button>
                </div>
              </div>
            </SidePanel>
          </Sheet>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Trash2 className="w-4 h-4 text-destructive" />
          </Button>
        </div>
      );
    },
    enableHiding: false,
  },
];
