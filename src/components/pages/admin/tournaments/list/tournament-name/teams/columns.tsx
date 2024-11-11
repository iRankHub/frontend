"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Speaker, Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import DeleteTeam from "./delete-team";
import UpdateTeamForm from "./update-team-form";

export const columns: ColumnDef<Team.AsObject>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "speakersList",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No. of Speakers"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {(row.getValue("speakersList") as Speaker.AsObject[]).length}
          </span>
        </div>
      );
    },
    enableHiding: false,
    filterFn: (row, columnId, filterValue: string) => {
      let value = row.getValue(columnId) as string;
      if (typeof value === "number") value = String(value);
      return value?.toLowerCase().includes(filterValue);
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center gap-3">
          {row.original.name !== "Public Speaking" && (
            <UpdateTeamForm team={row.original} />
          )}
          <DeleteTeam team={row.original} />
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
    maxSize: 20,
  },
];
