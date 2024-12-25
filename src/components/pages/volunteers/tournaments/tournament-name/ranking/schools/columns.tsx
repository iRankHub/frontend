import { ColumnDef } from "@tanstack/react-table";
import { Rankings } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { SchoolRanking } from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<SchoolRanking.AsObject>[] = [
  {
    accessorKey: "schoolName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-start">
          <span className="max-w-[200px] truncate font-medium">
            {/* {row.getValue("id")} */}
            {row.index + 4}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "schoolName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-end">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("schoolName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "teamCount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Teams"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-sm">{row.getValue("teamCount")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "totalPoints",
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
          <span className="text-sm">{row.getValue("totalPoints")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "totalWins",
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
          <span className="text-sm">{row.getValue("totalWins")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "averageRank",
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
          <span className="text-sm">{row.getValue("averageRank")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
