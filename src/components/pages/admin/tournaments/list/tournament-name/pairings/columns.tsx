"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { PairingsPreliminaries } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { roomsPairings } from "@/components/tables/data/data";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<Pairing.AsObject>[] = [
  {
    accessorKey: "team1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Affirmative" />
    ),
    cell: ({ row }) => {
      const team1 = row.getValue("team1") as { name: string };
      return <div className="w-full text-center pr-5">{team1.name}</div>;
    },
    enableHiding: false,
  },
  {
    accessorKey: "team2",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Negative"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const team2 = row.getValue("team2") as { name: string };
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {team2.name}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "roomName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Room"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="default"
            className={`bg-primary text-white rounded-md`}
          >
            {row.getValue("roomName")}
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
        className="w-full text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full h-6 items-center justifycenter-">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className=" w-full bg-transparent m-0"
          >
            <Icons.pencilLine className="w-4 h-4 text-primary" />
          </Button>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
];
