"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Rooms } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";

export const columns: ColumnDef<Rooms>[] = [
  {
    accessorKey: "names",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" className="justify-center" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
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
      <DataTableColumnHeader column={column} title="Preliminary" className="justify-center" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
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
      <DataTableColumnHeader column={column} title="Elimination" className="justify-center" />
    ),
    cell: ({ row }) => {
      const value = row.getValue("elimination");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-10 text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("elimination")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  }
];