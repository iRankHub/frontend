"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Ballot, Judge } from "@/lib/grpc/proto/debate_management/debate_pb";
import { Icons } from "@/components/icons";

export const columns: ColumnDef<Ballot.AsObject>[] = [
  {
    accessorKey: "roomName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[200px] truncate font-medium">
          {row.getValue("roomName")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "judgesList",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Head Judge"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      const judges = row.getValue("judgesList") as Judge.AsObject[];
      return (
        <div className="text-center pr-5">
          <span className="max-w-[200px] truncate font-medium">
            {judges[0].name}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "recordingStatus",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Rec. Status"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const status = row.getValue("recordingStatus");
      const variant =
        status === "Recorded"
          ? "bg-green-200 text-success hover:bg-green-200"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("recordingStatus")}
          </Badge>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "team1",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Affirmative"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const team1 = (row.getValue("team1") as { name: string }).name;
      const verdict = row.original.verdict;
      const isVerdictPending = verdict === "pending";
      return (
        <div className="w-full pr-5 text-center flex items-center justify-center gap-2">
          <span className="max-w-[200px] truncate font-medium">{team1}</span>
          {!isVerdictPending &&
            (verdict === team1 ? (
              <Icons.medal className="text-success-border" size={18} />
            ) : (
              <Icons.circleX className="text-destructive" size={18} />
            ))}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "team2",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Negative"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const team2 = (row.getValue("team2") as { name: string }).name;
      const verdict = row.original.verdict;
      const isVerdictPending = verdict === "pending";
      return (
        <div className="w-full pr-5 text-center flex items-center justify-center gap-2">
          <span className="max-w-[200px] truncate font-medium">{team2}</span>
          {!isVerdictPending &&
            (verdict === team2 ? (
              <Icons.medal className="text-success-border" size={18} />
            ) : (
              <Icons.circleX className="text-destructive" size={18} />
            ))}
        </div>
      );
    },
    enableHiding: false,
  },
];
