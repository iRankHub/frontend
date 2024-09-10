"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { priorities, statuses } from "@/components/tables/data/data";
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
  const isFiltered = table.getState().globalFilter !== "";

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
        <Input
          placeholder="Search team..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={priorities}
          />
        )}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
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
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={() => null}
          className="h-8 px-2 lg:px-3"
        >
          Cancel
        </Button>
        <Button
          variant="default"
          onClick={() => null}
          className="h-8 px-2 lg:px-3"
        >
          Update
        </Button>
      </div>
    </div>
  );
}
