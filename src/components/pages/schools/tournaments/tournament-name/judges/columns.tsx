"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  Judge,
} from "@/lib/grpc/proto/debate_management/debate_pb";


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
