"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import SidePanel, {
  PanelHeader,
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import ProvideFeedback from "./submit-feedback";
import ViewFeedback from "./ViewFeedback";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function ActionCell({ row }: { row: any }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const data = row.original;

  return (
    <div className="w-full text-center flex items-center justify-center gap-2">
      <Sheet modal open={viewOpen} onOpenChange={setViewOpen}>
        <SheetTrigger>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.view className="w-4 h-4 text-info" />
          </Button>
        </SheetTrigger>
        <SidePanel>
          <PanelHeader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">Details Summary</h3>
            </div>
          </PanelHeader>
          <div className="h-full">
            <ViewFeedback feedbackData={data} />
          </div>
        </SidePanel>
      </Sheet>

      <Sheet modal open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <SheetTrigger>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.messageSquareReply className="w-4 h-4 text-primary" />
          </Button>
        </SheetTrigger>
        <SidePanel>
          <PanelHeader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">Feedback</h3>
            </div>
          </PanelHeader>
          <ScrollArea className="flex-1">
            <div className="h-full">
              <ProvideFeedback
                onClose={() => setFeedbackOpen(false)}
                feedbackData={data}
              />
            </div>
          </ScrollArea>
        </SidePanel>
      </Sheet>
    </div>
  );
}

export const columns: ColumnDef<StudentFeedbackEntry.AsObject>[] = [
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
        className="justify-start"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center pr-12">
          {row.getValue("roundNumber")}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "roomName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Room"
        className="justify-start"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "studentTeamName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Team"
        className="justify-start"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "opponentTeamName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Opponent"
        className="justify-start"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "isEliminationRound",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-start"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pl-5 text-start">
          {(row.getValue("isEliminationRound") as boolean) === true
            ? "Yes"
            : "No"}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "headJudgeName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Head Judge"
        className="justify-start"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-start">{row.getValue("headJudgeName")}</div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "speakerPoints",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Points"
        className="justify-start"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pl-5 text-start">
          {row.getValue("speakerPoints")}
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
        className="justify-start"
      />
    ),
    cell: ({ row }) => {
      const status = (row.getValue("isRead") as boolean) === true;
      const variant =
        status === true
          ? "bg-green-200 text-success hover:bg-green-200"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-start">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {(row.getValue("isRead") as boolean) === true ? "Read" : "Not Read"}
          </Badge>
        </div>
      );
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
