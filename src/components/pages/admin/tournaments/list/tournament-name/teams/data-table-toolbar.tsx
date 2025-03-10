"use client";

import { Icons } from "@/components/icons";
import SidePanel, { Panelheader } from "@/components/layout/admin-panel/side-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import AddTeamForm from "./add-team-form";
import { useEffect, useState } from "react";
import { Student } from "@/lib/grpc/proto/user_management/users_pb";
import { getStudents } from "@/core/users/users";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import * as XLSX from "xlsx";
import { useToast } from "@/components/ui/use-toast";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [allStudents, setAllStudents] = useState<Student.AsObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();
  const [studentPagination, setStudentPagination] = useState({
    page: 1,
    pageSize: 50,
    total: 0,
  });

  const loadStudents = async (page: number) => {
    if (!user || loading || (!hasMore && page > 1)) return;

    setLoading(true);
    const options: GetSchoolsType = {
      pageSize: studentPagination.pageSize,
      page,
      token: user.token,
    };

    try {
      const res = await getStudents({ ...options });
      if (page === 1) {
        setAllStudents(res.studentsList);
      } else {
        setAllStudents((prev) => [...prev, ...res.studentsList]);
      }

      setStudentPagination((prev) => ({
        ...prev,
        page,
        total: res.totalcount,
      }));

      setHasMore(res.studentsList.length === studentPagination.pageSize);
    } catch (err: any) {
      toast({
        title: "Error loading students",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents(1);
  }, [user]);

  const teams = table.getRowModel().rows.map((row) => row.original) as Team.AsObject[];
  const usedStudents = teams.flatMap((team) => team.speakersList.map((speaker) => speaker.speakerId));
  const availableStudents = allStudents.filter((student) => !usedStudents.includes(student.studentid));

  return (
    <div className="flex flex-col w-full">
      <div className="w-full rounded-t-md overflow-hidden bg-brown">
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="w-full sm:w-auto">
              <Input
                placeholder="Search team name..."
                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
                }
                className="h-8 w-full sm:w-[150px] lg:w-[280px]"
              />
            </div>
            {isFiltered && (
              <Button
                variant="ghost"
                onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 lg:px-3 w-full sm:w-auto"
              >
                Reset
                <Cross2Icon className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Sheet modal>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  className="border border-dashed border-white text-background dark:text-foreground gap-2 text-sm font-bold h-8 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background group w-full sm:w-auto"
                >
                  <Icons.fileUp className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
                  Add Team
                  <span className="sr-only">Add Team</span>
                </Button>
              </SheetTrigger>
              <SidePanel>
                <Panelheader>Add Team</Panelheader>
                <AddTeamForm
                  availableStudents={availableStudents}
                  setAllStudents={setAllStudents}
                  pagination={studentPagination}
                  onLoadMore={() => loadStudents(studentPagination.page + 1)}
                  hasMore={hasMore}
                  loading={loading}
                />
              </SidePanel>
            </Sheet>
            {exportToExcel({ table })}
          </div>
        </div>
      </div>
    </div>
  );
}

const exportToExcel = ({
  table,
  filename = "table-data.xlsx",
}: {
  table: Table<any>;
  filename?: string;
}) => {
  const handleExport = () => {
    const rows = table.getRowModel().rows;
    const data = rows.map((row) => ({
      "Team Name": row.getValue("name"),
      "No. of Speakers": (row.getValue("speakersList") as any[]).length,
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    ws["!cols"] = [{ wch: 30 }, { wch: 15 }];
    XLSX.utils.book_append_sheet(wb, ws, "Teams");
    XLSX.writeFile(wb, filename);
  };

  return (
    <Button
      onClick={handleExport}
      type="button"
      className="border border-dashed border-white text-white dark:text-foreground gap-2 text-sm font-bold h-8 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background group w-full sm:w-auto"
    >
      <Icons.fileUp className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
      Export
      <span className="sr-only">Export</span>
    </Button>
  );
};
