"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Ballot } from "@/lib/grpc/proto/debate_management/debate_pb";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

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
        <div className="flex space-x-2 justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("head_judge")}
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
        status === "recorded"
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