"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Ballot, Judge } from "@/lib/grpc/proto/debate_management/debate_pb";
import BallotUpdateForm from "./ballot-update-form";

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
      <DataTableColumnHeader column={column} title="Rec. Status" className="justify-center" />
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
];
