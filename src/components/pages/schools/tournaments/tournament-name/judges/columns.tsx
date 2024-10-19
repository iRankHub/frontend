"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Check, ChevronsUpDown, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
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
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  GetJudgeResponse,
  Judge,
  RoomInfo,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { GetTournamentJudgeProps, GetTournamentRoomsProps } from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentJudge } from "@/core/debates/judges";
import { useParams } from "next/navigation";
import { getTournamentRooms } from "@/core/debates/rooms";

export const columns: ColumnDef<Judge.AsObject>[] = [
  {
    accessorKey: "idebateId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="iDebate ID"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("idebateId")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminaryDebates",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="text-sm">
            {row.getValue("preliminaryDebates") === 0
              ? "None"
              : row.getValue("preliminaryDebates")}
          </span>
        </div>
      );
    },
    filterFn: (row, columnId, filterValue: string) => {
      let value = row.getValue(columnId) as string;
      if (typeof value === "number") value = String(value);
      return value?.toLowerCase().includes(filterValue);
    },
    enableHiding: false,
  },
  {
    accessorKey: "eliminationDebates",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">
            {row.getValue("eliminationDebates") === 0
              ? "None"
              : row.getValue("eliminationDebates")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
