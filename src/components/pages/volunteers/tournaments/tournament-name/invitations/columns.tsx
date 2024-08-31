"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { userRoles } from "@/components/tables/data/data";
import { InvitationInfo } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import ResendInvite from "./actions/resend-invite";
import AcceptInvite from "./actions/accept-invite";
import RejectInvite from "./actions/reject-invite copy";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import {
  useBulkResendInvites,
  useBulkUpdateInvite,
} from "./actions/bulk-invitation-handle";
import { InvitationStatuses } from "@/types/tournaments/invitations";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const columns: ColumnDef<InvitationInfo.AsObject>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row, table }) => {
      // get all selected rows
      // const selectedRows = table.getFilteredSelectedRowModel().rows;
      // const bulkInvitationIds = selectedRows.map(
      //   (row) => row.original.invitationId
      // );
      // const { handleUpdate } = useBulkUpdateInvite({
      //   invitationIds: bulkInvitationIds,
      // });
      // const { handleResend } = useBulkResendInvites({
      //   invitationIds: bulkInvitationIds,
      // });
      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
              className="translate-y-[2px]"
            />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem className="text-foreground font-bold">
              Actions (Selected)
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={() => handleUpdate(InvitationStatuses.ACCEPTED)}
            >
              <Icons.addCircle className="w-4 h-4" />
              Approve
            </ContextMenuItem>
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={() => handleUpdate(InvitationStatuses.REJECTED)}
            >
              <Icons.addCircle className="w-4 h-4" />
              Rejected
            </ContextMenuItem>
            <ContextMenuSeparator className="bg-input" />
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={handleResend}
            >
              <Icons.trash2 className="w-4 h-4" />
              Resend
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "idebateId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IDebate ID" />
    ),
    cell: ({ row, table }) => {
      // get all selected rows
      // const selectedRows = table.getFilteredSelectedRowModel().rows;
      // const bulkInvitationIds = selectedRows.map(
      //   (row) => row.original.invitationId
      // );
      // const { handleUpdate } = useBulkUpdateInvite({
      //   invitationIds: bulkInvitationIds,
      // });
      // const { handleResend } = useBulkResendInvites({
      //   invitationIds: bulkInvitationIds,
      // });
      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="w-[80px]">{row.getValue("idebateId")}</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem className="text-foreground font-bold">
              Actions (Selected)
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={() => handleUpdate(InvitationStatuses.ACCEPTED)}
            >
              <Icons.addCircle className="w-4 h-4" />
              Approve
            </ContextMenuItem>
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={() => handleUpdate(InvitationStatuses.REJECTED)}
            >
              <Icons.addCircle className="w-4 h-4" />
              Rejected
            </ContextMenuItem>
            <ContextMenuSeparator className="bg-input" />
            <ContextMenuItem
              className="flex items-center gap-3"
              // onClick={handleResend}
            >
              <Icons.trash2 className="w-4 h-4" />
              Resend
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "inviteeName",
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
            Competition
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
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
            {format(new Date(row.getValue("createdAt")), "dd/MM/yyyy")}
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
    accessorKey: "invitationId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-end"
      />
    ),
    cell: ({ row, table }) => {
      // get status from table
      const columnStatus = row.getValue("status");
      const isAcceptReject = columnStatus === "pending";
      return (
        <div
          className={cn(
            "w-full flex items-center justify-end gap-2",
            !isAcceptReject && "pr-10"
          )}
        >
          <Dialog>
            <DialogTrigger className="mt-0.5">
              <Button
                type="button"
                variant={"secondary"}
                size={"icon"}
                className="bg-transparent w-8 h-8 p-1 m-0"
              >
                <Icons.mailResend className="w-8 h-8 text-info" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-base">
                  Read the invitation
                </DialogTitle>
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
          {isAcceptReject && (
            <>
              <AcceptInvite invitationId={row.getValue("invitationId")} />
              <RejectInvite invitationId={row.getValue("invitationId")} />
            </>
          )}
        </div>
      );
    },
  },
];
