"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { roomStatus } from "@/components/tables/data/data";
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
    <div className="w-full rounded-t-md overflow-hidden bg-brown">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4">
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Search names..."
            value={(table.getColumn("roomName")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("roomName")?.setFilterValue(event.target.value)
            }
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {table.getColumn("preliminary") && (
            <DataTableFacetedFilter
              column={table.getColumn("preliminary")}
              title="Preliminary"
              options={roomStatus}
            />
          )}
          {table.getColumn("elimination") && (
            <DataTableFacetedFilter
              column={table.getColumn("elimination")}
              title="Elimination"
              options={roomStatus}
            />
          )}
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
      </div>
    </div>
  );
}
