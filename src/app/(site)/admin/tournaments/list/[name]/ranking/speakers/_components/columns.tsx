"use client";

import { ColumnDef } from "@tanstack/react-table";

import { priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Check, ChevronsUpDown, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("place")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
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
    accessorKey: "schools",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Schools"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-sm">{row.getValue("schools")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "points",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Points"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("points")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "wins",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Wins"
        className="justify-center text-xs"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("wins")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "rank",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Rank"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("rank")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
