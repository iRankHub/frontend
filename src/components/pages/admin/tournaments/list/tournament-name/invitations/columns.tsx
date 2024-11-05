"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { userRoles } from "@/components/tables/data/data";
import { InvitationInfo } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import ResendInvite from "./actions/resend-invite";
import AcceptInvite from "./actions/accept-invite";
import { cn } from "@/lib/utils";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import RejectInvite from "./actions/reject-invite";

type InvitationInfoAsObject = InvitationInfo.AsObject;

const roleColorMap: Record<string, { bg: string; text: string }> = {
  student: { bg: "bg-sky-200", text: "text-sky-800" },
  school: { bg: "bg-rose-200", text: "text-rose-800" },
  volunteer: { bg: "bg-amber-200", text: "text-amber-800" },
};

const isWithinDeadline = (
  tournamentEndDate: Date | null,
  action: 'accept' | 'reject' | 'resend'
): boolean => {
  if (!tournamentEndDate) return false;
  const now = new Date();
  return now <= tournamentEndDate;
};

const isTournamentEnded = (tournamentEndDate: Date | null): boolean => {
  if (!tournamentEndDate) return false;
  return new Date() > tournamentEndDate;
};

const getStatusBadgeStyles = (status: string): { bgColor: string; textColor: string } => {
  switch (status) {
    case "accepted":
      return { bgColor: "bg-green-200", textColor: "text-success" };
    case "rejected":
      return { bgColor: "bg-red-200", textColor: "text-destructive" };
    case "pending":
      return { bgColor: "bg-slate-400", textColor: "text-background" };
    default:
      return { bgColor: "bg-secondary", textColor: "text-secondary" };
  }
};

// Custom cell renderer component for the Actions column
const ActionsCellRenderer: React.FC<{ invitation: InvitationInfoAsObject }> = ({ invitation }) => {
  const { tournament } = useInvitationsStore((state) => state);
  const tournamentEndDate = tournament?.endDate ? new Date(tournament.endDate) : null;

  const canTakeAction = isWithinDeadline(tournamentEndDate, 'accept');
  const tournamentEnded = isTournamentEnded(tournamentEndDate);

  if (tournamentEnded) {
    return <div className="w-full text-center">Ended</div>;
  }

  return (
    <div className={cn("w-full flex items-center justify-center gap-2", invitation.status !== "pending")}>
      {canTakeAction && (
        <>
          <ResendInvite invitationId={invitation.invitationId} />
          <AcceptInvite invitationId={invitation.invitationId} />
          <RejectInvite invitationId={invitation.invitationId} />
        </>
      )}
    </div>
  );
};

export const columns: ColumnDef<InvitationInfoAsObject>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "idebateId",
    header: ({ column }) => <DataTableColumnHeader column={column} title="IDebate ID" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("idebateId")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "inviteeName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Names" className="justify-center" />,
    cell: ({ row }) => (
      <div className="w-full text-center">
        <span className="max-w-[200px] truncate font-medium">{row.getValue("inviteeName")}</span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" className="justify-center" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const { bgColor, textColor } = getStatusBadgeStyles(status);
      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="default"
            className={`${bgColor} ${textColor} hover:${bgColor} capitalize`}
          >
            {status}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    enableHiding: false,
  },
  {
    accessorKey: "inviteeRole",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" className="justify-center" />,
    cell: ({ row }) => {
      const role = userRoles.find((category) => category.value === row.getValue("inviteeRole"));
      
      if (!role) return null;

      // Get color mapping based on role value
      const colorMapping = roleColorMap[role.value] || {
        bg: "bg-gray-200",
        text: "text-gray-800",
      };

      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="outline"
            className={cn(
              colorMapping.bg,
              colorMapping.text,
              `hover:${colorMapping.bg}`,
              "border-0",
              "capitalize"
            )}
          >
            {role.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "invitationId",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" className="text-center" />,
    cell: ({ row }) => <ActionsCellRenderer invitation={row.original} />,
    enableSorting: false,
  },
];
