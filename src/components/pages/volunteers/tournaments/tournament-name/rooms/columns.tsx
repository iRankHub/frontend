"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  GetRoomResponse,
  Room,
  RoomStatus,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { getRoom, updateTournamentRoom } from "@/core/debates/rooms";
import { GetTournamentRoomProps, UpdateRoomProps } from "@/types/pairings";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useRoomsStore } from "@/stores/admin/debate/rooms.store";

export const columns: ColumnDef<RoomStatus.AsObject>[] = [
  {
    accessorKey: "roomName",
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
            {row.getValue("roomName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminary",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue("preliminary");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="default"
            className={cn(
              `bg-green-200 hover:bg-green-200 text-success capitalize rounded-md`,
              variant
            )}
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
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue("elimination");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
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
];
