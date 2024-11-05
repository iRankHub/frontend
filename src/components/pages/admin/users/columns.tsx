"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { statuses, userRoles } from "@/components/tables/data/data";
import { ApproveUser } from "./approve-user";
import { RejectUser } from "./reject-user";
import ViewUser from "./view-user";
import { DeleteUser } from "./delete-user";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});

// Define role-specific color mappings
const roleColorMap: Record<string, { bg: string; text: string }> = {
  admin: { bg: "bg-primary", text: "text-white" },
  student: { bg: "bg-sky-200", text: "text-sky-800" },
  school: { bg: "bg-rose-200", text: "text-rose-800" },
  volunteer: { bg: "bg-amber-200", text: "text-amber-800" },
};

export const columns: ColumnDef<UserSummary.AsObject>[] = [
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
    accessorKey: "userid",
    enableSorting: false,
    enableHiding: false,
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "idebateid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IDebate ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("idebateid")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Emails"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full text-center">
          <span className={cn("max-w-[200px] truncate", inter)}>
            {row.getValue("email")}
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
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );
      if (!status) {
        return null;
      }

      let bgColor, textColor;
      switch (status.label) {
        case "Approved":
          bgColor = "bg-green-200";
          textColor = "text-success";
          break;
        case "Rejected":
          bgColor = "bg-red-200";
          textColor = "text-destructive";
          break;
        case "Pending":
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
            {status.label}
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
    accessorKey: "userrole",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Category"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const role = userRoles.find(
        (role) => role.value === row.getValue("userrole")
      );

      if (!role) {
        return null;
      }

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
              "border-0"
            )}
          >
            {role.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-end text-end pr-5"
      />
    ),
    cell: ({ row }) => {
      return (
        <Options
          userid={row.getValue("userid")}
          status={row.getValue("status")}
          user={row.original as UserSummary.AsObject}
        />
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
];

const Options = ({
  userid,
  status,
  user,
}: {
  userid: number;
  status: string;
  user: UserSummary.AsObject;
}) => {
  return (
    <div className={cn("w-full text-end", status !== "pending" && "pr-5")}>
      <ViewUser user={user} />
      {status === "pending" ? (
        <>
          <ApproveUser userid={userid} />
          <RejectUser userid={userid} />
        </>
      ) : (
        <DeleteUser userid={userid} />
      )}
    </div>
  );
};
