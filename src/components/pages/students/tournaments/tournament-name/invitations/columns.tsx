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
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

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
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
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
      return <div className="w-[80px]">{row.getValue("idebateId")}</div>;
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
      return (
        <div className="w-full text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("inviteeName")}
          </span>
        </div>
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
      let bgColor, textColor;
      switch (row.getValue("status")) {
        case "accepted":
          bgColor = "bg-green-200";
          textColor = "text-success";
          break;
        case "rejected":
          bgColor = "bg-red-200";
          textColor = "text-destructive";
          break;
        case "pending":
          bgColor = "bg-slate-400";
          textColor = "text-background";
          break;
        default:
          bgColor = "bg-secondary";
          textColor = "text-secondary";
      }
      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="default"
            className={`${bgColor} ${textColor} hover:${bgColor}`}
          >
            {row.getValue("status")}
          </Badge>
        </div>
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
      const category = userRoles.find(
        (category) => category.value === row.getValue("inviteeRole")
      );

      if (!category) {
        return null;
      }

      return (
        <div className="w-full pr-5 text-center">
          <Badge variant="default" className="hover:bg-${variant">
            {category.label}
          </Badge>
        </div>
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
        className="text-center"
      />
    ),
    cell: ({ row, table }) => {
      // get status from table
      const columnStatus = row.getValue("status");
      const isAcceptReject = columnStatus === "pending";
      return (
        <div
          className={cn(
            "w-full flex items-center justify-center gap-2",
            !isAcceptReject
          )}
        >
          <ResendInvite invitationId={row.getValue("invitationId")} />
          {isAcceptReject && (
            <>
              <AcceptInvite invitationId={row.getValue("invitationId")} />
              <RejectInvite invitationId={row.getValue("invitationId")} />
            </>
          )}
        </div>
      );
    },
    enableSorting: false,
  },
];
