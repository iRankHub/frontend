"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import * as XLSX from "xlsx";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

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
        {exportToExcel({ table })}
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
    // Get the rows from the table
    const rows = table.getRowModel().rows;

    // Convert the rows to a format suitable for XLSX
    const data = rows.map((row) => {
      return {
        "Team Name": row.getValue("name"),
        "No. of Speakers": (row.getValue("speakersList") as any[]).length,
      };
    });

    // Create a new workbook and add the data
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    // Adjust column widths
    const colWidths = [
      { wch: 30 }, // Team Name
      { wch: 15 }, // No. of Speakers
    ];
    ws["!cols"] = colWidths;

    XLSX.utils.book_append_sheet(wb, ws, "Teams");

    // Save the file
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
