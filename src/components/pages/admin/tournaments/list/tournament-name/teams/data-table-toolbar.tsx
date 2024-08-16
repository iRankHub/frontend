"use client";

import { Icons } from "@/components/icons";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { priorities, statuses, teams } from "@/components/tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

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
          placeholder="Search schools..."
          value={(table.getColumn("school")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("school")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("no_of_teams") && (
          <DataTableFacetedFilter
            column={table.getColumn("no_of_teams")}
            title="No.of Teams"
            options={teams}
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
      <div className="mx-5">
        <Button
          type="button"
          className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
        >
          <Icons.fileUp className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
          Export
          <span className="sr-only">Export</span>
        </Button>
      </div>
    </div>
  );
}
