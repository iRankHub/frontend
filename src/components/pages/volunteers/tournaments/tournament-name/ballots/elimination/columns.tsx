"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { BallotElimination } from "@/components/tables/data/schema";

export const columns: ColumnDef<BallotElimination>[] = [
  {
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" className="justify-start" />
    ),
    cell: ({ row }) => (
      <div className="w-full pr-10 text-start">
        <span className="max-w-[200px] truncate font-medium">
          {row.getValue("room")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "head_judge",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Head Judge"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("head_judge")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rec. Status" className="justify-center" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      const variant =
        status === "Recorded"
          ? "bg-green-200 text-success hover:bg-green-200"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-10 text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
    enableHiding: false,
  }
];