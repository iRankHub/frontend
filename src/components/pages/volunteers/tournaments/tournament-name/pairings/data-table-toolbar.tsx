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
    <div className="w-full rounded-t-md overflow-hidden bg-brown mb-14">
      <div className="flex flex-col sm:flex-row gap-4 p-4 pr-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
          <Input
            placeholder="Search team..."
            value={(table.getState().globalFilter as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.setGlobalFilter(event.target.value)
            }
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
          <div className="flex flex-wrap gap-2 items-center">
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
                className="h-8 px-2 lg:px-3 whitespace-nowrap"
              >
                Reset
                <Cross2Icon className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
