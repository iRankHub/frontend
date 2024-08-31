"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { InvitationsStudents } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export const columns: ColumnDef<InvitationsStudents>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="IDebate ID"
        className="justify-center"
      />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "reason",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Reason"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("reason")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "date",
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
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("date")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return <Actions />;
    },
    enableHiding: false,
  },
];

const Actions = () => {
  const [resendCancel, setResendCancel] = React.useState(false);
  const [acceptCancel, setAcceptCancel] = React.useState(false);
  const [rejectCancel, setRejectCancel] = React.useState(false);
  return (
    <div className="w-full text-center">
      <Dialog
        open={resendCancel}
        onOpenChange={(isOpen) => setResendCancel(isOpen)}
      >
        <DialogTrigger className="mt-0.5">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.mailResend className="w-6 h-6 text-info" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">Read the invitation</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Click to go to your email invitation
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="submit"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
              onClick={() => setResendCancel(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"sm"}
              variant={"default"}
              className="max-w-32 hover:bg-primary"
            >
              Check Email
              {/* {deleteLoading && (
                    <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )} */}
              <span className="sr-only">Check Email</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={acceptCancel}
        onOpenChange={(isOpen) => setAcceptCancel(isOpen)}
      >
        <DialogTrigger className="mt-0.5">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.mailx className="w-6 h-6 text-success-border" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Accept the invitation
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Are you sure you want to accept the invitation ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="submit"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
              onClick={() => setAcceptCancel(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"sm"}
              variant={"default"}
              className="max-w-32 hover:bg-primary"
            >
              Accept
              <span className="sr-only">Check Email</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={rejectCancel}
        onOpenChange={(isOpen) => setRejectCancel(isOpen)}
      >
        <DialogTrigger className="mt-0.5">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.mailx className="w-6 h-6 text-destructive" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Reject the invitation
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Are you sure to want to reject the invitation ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="submit"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
              onClick={() => setRejectCancel(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"sm"}
              variant={"destructive"}
              className="max-w-32"
            >
              Reject
              <span className="sr-only">Reject</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
