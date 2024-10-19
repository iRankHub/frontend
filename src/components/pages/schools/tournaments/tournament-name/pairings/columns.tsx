"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<Pairing.AsObject>[] = [
  {
    accessorKey: "team1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Affirmative" className="px-4 justify-start" />
    ),
    cell: ({ row }) => {
      const team1 = row.getValue("team1") as { name: string };
      return <div className="w-full text-start pr-5">{team1.name}</div>;
    },
    enableHiding: false,
    filterFn: (row, id, value) => {
      return row.getValue<{ name: string }>(id).name.toLowerCase().includes((value as string).toLowerCase())
    },
  },
  {
    accessorKey: "team2",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Negative"
         className="px-4 justify-start"
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
    filterFn: (row, id, value) => {
      return row.getValue<{ name: string }>(id).name.toLowerCase().includes((value as string).toLowerCase())
    },
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
            className={`bg-primary text-white rounded-md hover:bg-primary`}
          >
            {row.getValue("roomName")}
          </Badge>
        </div>
      );
    },
    enableHiding: false,
  },
];