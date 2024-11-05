"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Speaker, Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { createTeamSchema } from "@/lib/validations/admin/tournaments/create-team.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContentWithNoPrimitivePortal,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { getStudents } from "@/core/users/users";
import { Student } from "@/lib/grpc/proto/user_management/users_pb";
import { UpdateTeamType } from "@/types/tournaments/teams";
import { updateTournamentTeam } from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";
import DeleteTeam from "./delete-team";
import { ToastAction } from "@/components/ui/toast";
import UpdateTeamForm from "./update-team-form";

export const columns: ColumnDef<Team.AsObject>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "speakersList",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No. of Speakers"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {(row.getValue("speakersList") as Speaker.AsObject[]).length}
          </span>
        </div>
      );
    },
    enableHiding: false,
    filterFn: (row, columnId, filterValue: string) => {
      let value = row.getValue(columnId) as string;
      if (typeof value === "number") value = String(value);
      return value?.toLowerCase().includes(filterValue);
    },
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
    cell: ({ row }) => {
      return (
        <div className="w-full text-center gap-3">
          {row.original.name !== "Public Speaking" && (
            <UpdateTeamForm team={row.original} />
          )}
          <DeleteTeam team={row.original} />
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
    maxSize: 20,
  },
];
