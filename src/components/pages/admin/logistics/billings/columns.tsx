"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Inter } from "next/font/google";
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
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  PanelBody,
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { billingsStatuses } from "@/components/tables/data/data";
import { Billings } from "@/components/tables/data/schema";
import { Input } from "@/components/ui/input";
import { ListRegistrationItem } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TournamentRegistration from "./tournament-registration";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});

export const columns: ColumnDef<ListRegistrationItem.AsObject>[] = [
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
    accessorKey: "iDebateSchoolId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IDebate ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("iDebateSchoolId")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "schoolName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="text-center pr-5"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center pr-5">{row.getValue("schoolName")}</div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "plannedTeamsCount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Teams"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center pr-5">
          <span className={cn("truncate", inter)}>
            {row.getValue("plannedTeamsCount")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      const status = row.getValue("paymentStatus") as string;
      if (!status) {
        return null;
      }

      let bgColor, textColor;
      switch (status) {
        case "paid":
          bgColor = "bg-green-200";
          textColor = "text-success";
          break;
        case "discount":
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
        <div className="text-center pr-5">
          <Badge
            variant="default"
            className={`${bgColor} ${textColor} hover:${bgColor}`}
          >
            {status}
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
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      const registration = row.original;
      return <TournamentRegistration registration={registration} />;
    },
    enableHiding: false,
  },
];