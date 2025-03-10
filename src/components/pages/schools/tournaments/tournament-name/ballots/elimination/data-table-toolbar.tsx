"use client";

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
    <div className="w-full rounded-t-md overflow-hidden bg-brown mb-14">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4">
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Search room name..."
            value={(table.getColumn("roomName")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("roomName")?.setFilterValue(event.target.value)
            }
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
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
