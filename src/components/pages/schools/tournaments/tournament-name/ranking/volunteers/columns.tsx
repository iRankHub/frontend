import { ColumnDef } from "@tanstack/react-table";
import { Rankings } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  StudentRanking,
  VolunteerTournamentRank,
} from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<VolunteerTournamentRank.AsObject>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("rank")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "volunteerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("volunteerName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminaryRounds",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminaries"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">{row.getValue("preliminaryRounds")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminaryRounds",
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
          <span className="text-sm">{row.getValue("preliminaryRounds")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "averageRating",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Points"
        className="justify-center text-xs"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">{row.getValue("averageRating")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];

