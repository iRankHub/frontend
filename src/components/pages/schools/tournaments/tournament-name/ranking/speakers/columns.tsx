import { ColumnDef } from "@tanstack/react-table";
import { Rankings } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { StudentRanking } from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<StudentRanking.AsObject>[] = [
  {
    accessorKey: "schoolName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.index + 4}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "studentName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("studentName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "schoolName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Schools"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">{row.getValue("schoolName")}</span>
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
        <div className="w-full pr-5 text-center">
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
        <div className="w-full pr-5 text-center">
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
        <div className="w-full pr-5 text-center">
          <span className="text-sm">
            {/* if its a float, convert to an int */}
            {parseInt(String(row.getValue("averageRank")))}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];

