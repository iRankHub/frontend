"use client";

import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { Student } from "@/lib/grpc/proto/user_management/users_pb";
import { getStudents } from "@/core/users/users";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [allStudents, setAllStudents] = useState<Student.AsObject[]>([]);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const options: GetSchoolsType = {
      pageSize: 1000,
      page: 1,
      token: user.token,
    };
    getStudents({ ...options })
      .then((res) => {
        setAllStudents(res.studentsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);

  // Step 1: Extract speakers from existing teams
  const teams = table
    .getRowModel()
    .rows.map((row) => row.original) as Team.AsObject[]; // Adjust based on your table structure

  const usedStudents = teams.flatMap((team) =>
    team.speakersList.map((speaker) => speaker.speakerId)
  );

  // Step 2: Filter students to exclude already assigned ones
  const availableStudents = allStudents.filter(
    (student) => !usedStudents.includes(student.studentid)
  );

  const memberssOptions = useMemo(() => {
    const column = table.getColumn("speakersList");
    if (!column) return [];

    const uniqueSpeakerCounts = Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("speakersList"))
      )
    );

    return uniqueSpeakerCounts
      .filter((value) => typeof value === "number")
      .sort((a, b) => (a as number) - (b as number))
      .map((value) => ({
        label: String(value) + " speakers",
        value: value as number,
      }));
  }, [table]);

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between bg-brown">
      <div className="flex flex-1 items-center space-x-3 p-5 py-4">
        <Input
          placeholder="Search team name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("speakersList") && (
          <DataTableFacetedFilter
            column={table.getColumn("speakersList")}
            title="No. Of Teams"
            options={memberssOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="mx-5 flex items-center gap-5">
        <Button
          type="button"
          className="border border-dashed border-white text-white dark:text-foreground gap-2 text-sm font-bold h-8 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background group"
        >
          <Icons.fileUp className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
          Export
          <span className="sr-only">Export</span>
        </Button>
      </div>
    </div>
  );
}
