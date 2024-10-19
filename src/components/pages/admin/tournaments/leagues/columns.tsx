"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { League } from "@/lib/grpc/proto/tournament_management/tournament_pb";

export const columns: ColumnDef<League.AsObject>[] = [
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
    accessorKey: "leagueId",
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="name"
        className="justify-center"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "leagueType",
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
    accessorKey: "details",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Details"
        className="justify-center"
      />
    ),
    enableHiding: false,
  },
];
