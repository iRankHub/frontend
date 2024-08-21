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
        title="Names"
        className="justify-center"
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
            <div className="w-full text-center">
              <span className="max-w-[200px] truncate font-medium">
                {row.getValue("inviteeName")}
              </span>
            </div>
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
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="justify-center"
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

      let variant;
      switch (row.getValue("status")) {
        case "accepted":
          variant = "green-200 text-success";
          break;
        case "rejected":
          variant = "red-200 text-destructive";
          break;
        case "pending":
          variant = "slate-400";
          break;
        default:
          variant = "secondary";
      }
      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="w-full pr-5 text-center">
              <Badge
                variant="default"
                className={`bg-${variant} hover:bg-${variant}`}
              >
                {row.getValue("status")}
              </Badge>
            </div>
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "inviteeRole",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Category"
        className="justify-center"
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

      const category = userRoles.find(
        (category) => category.value === row.getValue("inviteeRole")
      );

      if (!category) {
        return null;
      }

      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="w-full pr-5 text-center">
              <Badge variant="default" className="hover:bg-${variant">
                {category.label}
              </Badge>
            </div>
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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
    cell: ({ row }) => {
      return (
        <div className="w-full flex items-center justify-end gap-2">
          <ResendInvite invitationId={row.getValue("invitationId")} />
          <AcceptInvite invitationId={row.getValue("invitationId")} />
          <RejectInvite invitationId={row.getValue("invitationId")} />
        </div>
      );
    },
  },
];
