"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { JudgeFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import ViewFeedback from "./ViewFeedback";
import { useState } from "react";

const ActionCell = ({ row }: { row: any }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const data = row.original as JudgeFeedbackEntry.AsObject;

  return (
    <div className="w-full text-center flex items-center justify-center gap-2">
      <Sheet modal open={viewOpen} onOpenChange={setViewOpen}>
        <SheetTrigger>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.view className="w-4 h-4 text-info" />
          </Button>
        </SheetTrigger>
        <SidePanel>
          <Panelheader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">Feedback Summary</h3>
            </div>
          </Panelheader>
          <ViewFeedback feedbackData={data} />
        </SidePanel>
      </Sheet>
    </div>
  );
};

export const columns: ColumnDef<JudgeFeedbackEntry.AsObject>[] = [
  {
    id: "select",
    header: () => null,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "roundNumber",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Round"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pl-5 text-center pr-10">
          {row.getValue("roundNumber")}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "studentAlias",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Students"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center">
          {row.getValue("studentAlias")}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "tournamentDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center">
          {row.getValue("tournamentDate")}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "isRead",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const status = (row.getValue("isRead") as boolean) === true;
      const variant =
        status === true
          ? "bg-green-200 text-success hover:bg-green-200"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {(row.getValue("isRead") as boolean) === true ? "Read" : "Not Read"}
          </Badge>
        </div>
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-center"
      />
    ),
    cell: ActionCell,
    enableHiding: false,
    enableSorting: false,
  },
];
