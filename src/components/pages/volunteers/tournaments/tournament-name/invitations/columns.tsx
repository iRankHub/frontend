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
import RejectInvite from "./actions/reject-invite";
import { cn } from "@/lib/utils";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";

type InvitationInfoAsObject = InvitationInfo.AsObject;

const getDeadlineDate = (tournamentStartDate: Date, daysBeforeStart: number, time: string): Date => {
  const deadline = new Date(tournamentStartDate);
  deadline.setDate(deadline.getDate() - daysBeforeStart);
  const [hours, minutes] = time.split(':').map(Number);
  deadline.setHours(hours, minutes, 0, 0);
  return deadline;
};

const isWithinDeadline = (
  invitation: InvitationInfoAsObject,
  tournamentStartDate: Date | null,
  action: 'accept' | 'reject' | 'resend'
): boolean => {
  if (!tournamentStartDate) return false;
  
  const now = new Date();
  const { inviteeRole, status } = invitation;

  const acceptDeadline = getDeadlineDate(tournamentStartDate, 3, "23:59");
  const rejectDeadline = getDeadlineDate(tournamentStartDate, 1, "23:59");

  if (inviteeRole === "school") {
    if (status === "pending") {
      if (action === 'accept') return now <= acceptDeadline;
      if (action === 'reject') return now <= rejectDeadline;
    } else if (status === "accepted") {
      if (action === 'reject') return now <= rejectDeadline;
    }
  } else if (inviteeRole === "volunteer") {
    const volunteerDeadline = getDeadlineDate(tournamentStartDate, 2, "23:59");
    return now <= volunteerDeadline;
  }

  return action === 'resend';
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
  const tournamentStartDate = tournament?.startDate ? new Date(tournament.startDate) : null;
  const tournamentEndDate = tournament?.endDate ? new Date(tournament.endDate) : null;

  const canAccept = isWithinDeadline(invitation, tournamentStartDate, 'accept');
  const canReject = isWithinDeadline(invitation, tournamentStartDate, 'reject');
  const canResend = isWithinDeadline(invitation, tournamentStartDate, 'resend');
  const tournamentEnded = isTournamentEnded(tournamentEndDate);

  if (tournamentEnded) {
    return <div className="w-full text-sm text-center">Ended</div>;
  }

  return (
    <div className={cn("w-full flex items-center justify-center gap-2", invitation.status !== "pending")}>
      {canResend && invitation.status !== "accepted" && <ResendInvite invitationId={invitation.invitationId} />}
      {invitation.status === "pending" && (
        <>
          {canAccept && <AcceptInvite invitationId={invitation.invitationId} />}
          {canReject && <RejectInvite invitationId={invitation.invitationId} />}
        </>
      )}
      {invitation.status === "accepted" && invitation.inviteeRole === "school" && canReject && (
        <RejectInvite invitationId={invitation.invitationId} />
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
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("idebateId")}</div>,
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
          <Badge variant="default" className={`${bgColor} ${textColor} hover:${bgColor}`}>
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
      const category = userRoles.find((category) => category.value === row.getValue("inviteeRole"));
      if (!category) return null;
      return (
        <div className="w-full pr-5 text-center">
          <Badge variant="default">{category.label}</Badge>
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