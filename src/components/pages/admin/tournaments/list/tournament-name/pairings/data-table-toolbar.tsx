"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updatePairings } from "@/core/debates/pairings";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import React from "react";
import * as XLSX from "xlsx";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().globalFilter !== "";
  const [isUpdating, setIsUpdating] = React.useState(false);
  const {
    isSwapMade,
    originalData,
    filteredData,
    setOriginalData,
    resetSwaps,
  } = useTeamSwapStore((state) => state);
  const { user } = useUserStore((state) => state);

  const handleUpdatePairings = async () => {
    if (!user) return;

    const options = {
      token: user.token,
      pairings: filteredData,
    };

    setIsUpdating(true);
    await updatePairings(options)
      .then(() => {
        setOriginalData(filteredData);
        resetSwaps();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  const handleCancelSwap = () => {
    resetSwaps();
  };

  return (
    <div className="w-full rounded-t-md overflow-hidden bg-brown p-4 mb-14">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="w-full sm:w-auto flex flex-wrap gap-3 items-center">
          <Input
            placeholder="Search team..."
            value={(table.getState().globalFilter as string) ?? ""}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
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

        <div className="flex flex-wrap items-center gap-3">
          {exportToExcel({ table })}
          {isSwapMade && (
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                onClick={handleCancelSwap}
                className="h-8 px-2 lg:px-3"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleUpdatePairings}
                className="h-8 px-2 lg:px-3"
              >
                Update
                {isUpdating && (
                  <Icons.spinner
                    className="ml-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const exportToExcel = ({
  table,
  filename = `Pairings ${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}.xlsx`,
}: {
  table: Table<any>;
  filename?: string;
}) => {
  const handleExport = () => {
    const rows = table.getRowModel().rows;
    const data = rows.map((row) => {
      const team1 = row.getValue("team1") as { name: string };
      const team2 = row.getValue("team2") as { name: string };
      return {
        Affirmative: team1.name,
        Negative: team2.name,
        Room: row.getValue("roomName")
      };
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    const colWidths = [
      { wch: 30 },
      { wch: 15 },
    ];
    ws["!cols"] = colWidths;

    XLSX.utils.book_append_sheet(wb, ws, "Teams");
    XLSX.writeFile(wb, filename);
  };

  return (
    <Button
      onClick={handleExport}
      type="button"
      className="border border-dashed border-white text-white dark:text-foreground gap-2 text-sm font-bold h-8 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background group"
    >
      <Icons.fileUp className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
      Export
      <span className="sr-only">Export</span>
    </Button>
  );
};
