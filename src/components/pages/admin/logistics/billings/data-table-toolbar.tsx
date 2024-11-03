"use client";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useMemo } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  // Function to create a padded string with right-aligned number
  const createPaddedTeamLabel = (num: number) => {
    const totalWidth = 30; // Total width of the string
    const baseText = "teams";
    const numStr = num.toString();
    const spacesNeeded = totalWidth - baseText.length - numStr.length;
    return `${baseText}${' '.repeat(spacesNeeded)}${numStr}`;
  };

  // Generate unique team count options with proper spacing
  const teamCountOptions = useMemo(() => {
    const column = table.getColumn("plannedTeamsCount");
    if (!column) return [];
    const uniqueTeamCounts = Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("plannedTeamsCount"))
      )
    );
    return uniqueTeamCounts
      .filter((value): value is number => value !== null)
      .sort((a, b) => a - b)
      .map((value) => ({
        label: createPaddedTeamLabel(value),
        value: value.toString(),
      }));
  }, [table]);

  // Define payment status options
  const paymentStatusOptions = useMemo(() => [
    { label: "Paid", value: "paid" },
    { label: "Pending", value: "pending" },
    { label: "Discount", value: "discount" },
  ], []);

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between bg-brown">
      <div className="flex flex-1 items-center space-x-3 p-5 py-4">
        <Input
          placeholder="Search names..."
          value={(table.getColumn("schoolName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("schoolName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("plannedTeamsCount") && (
          <DataTableFacetedFilter
            column={table.getColumn("plannedTeamsCount")}
            title="Teams"
            options={teamCountOptions}
          />
        )}
        {table.getColumn("paymentStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("paymentStatus")}
            title="Payment Status"
            options={paymentStatusOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 text-white"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}