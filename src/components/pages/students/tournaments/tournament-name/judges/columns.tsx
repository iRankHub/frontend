"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Judges } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";

export const columns: ColumnDef<Judges>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="iDebate ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("id")}
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
        <div className="w-full text-center">
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
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="text-sm">{row.getValue("preliminary")}</span>
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
      return (
        <div className="w-full pr-10 text-center">
          <span className="text-sm">{row.getValue("elimination")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  }
];
