"use client";

import { ColumnDef, Row } from "@tanstack/react-table";

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
import { useState } from "react";

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
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-center"
        buttonClassName="ml-0"
      />
    ),
    cell: ({ row }) => <HandleBallotActions row={row} />,
    enableHiding: false,
    enableSorting: false,
    maxSize: 20,
  },
];

const HandleBallotActions = ({ row }: { row: Row<Ballot.AsObject> }) => {
  const recordedStatus = row.getValue("recordingStatus");
  const isBallotRecord = recordedStatus === "Recorded";
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex w-full h-6 items-center justify-center">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="w-full bg-transparent hover:bg-transparent m-0"
          >
            <Icons.pencilLine className="w-5 h-5 text-primary" />
          </Button>
        </SheetTrigger>
        {/* {isBallotRecord ? (
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="w-full bg-transparent hover:bg-transparent m-0"
          >
            <Icons.circleCheck className="w-5 h-5 text-green-500" />
          </Button>
        ) : (
          <SheetTrigger>
            <Button
              type="button"
              variant={"secondary"}
              size={"icon"}
              className="w-full bg-transparent hover:bg-transparent m-0"
            >
              <Icons.pencilLine className="w-5 h-5 text-primary" />
            </Button>
          </SheetTrigger>
        )} */}
        <SidePanel>
          <Panelheader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">
                {row.getValue("roomName")} ballot
              </h3>
              <Button
                type="button"
                className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                size={"icon"}
              >
                <Icons.pencilLine className="w-4 h-4" />
              </Button>
            </div>
          </Panelheader>
          <div className="w-full h-[calc(100%_-_70px)] p-5 flex flex-col">
            <BallotUpdateForm
              ballotId={row.original.ballotId}
              setSheetOpen={setIsSheetOpen}
            />
          </div>
        </SidePanel>
      </Sheet>
    </div>
  );
};
