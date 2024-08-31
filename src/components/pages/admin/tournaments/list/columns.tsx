"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  Tournament,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";

export const columns: ColumnDef<Tournament.AsObject>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "tournamentId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="justify-center"
      />
    ),
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
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="justify-center"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "numberOfSchools",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Schools"
        className="justify-center"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "numberOfTeams",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Teams"
        className="justify-center"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="justify-center"
      />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="justify-center"
      />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
];
