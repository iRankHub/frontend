import { ColumnDef } from "@tanstack/react-table";
import { Rankings } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";

export const columns: ColumnDef<Rankings>[] = [
  {
    accessorKey: "place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-start">
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
        <div className="w-full pr-5 text-end">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("names")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "schools",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Schools"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-sm">{row.getValue("schools")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "points",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Points"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("points")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "wins",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Wins"
        className="justify-center text-xs"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("wins")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "rank",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Rank"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[50px] items-center justify-center">
          <span className="text-sm">{row.getValue("rank")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
