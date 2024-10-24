"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { userRoles } from "@/components/tables/data/data";
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

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
        <Input
          placeholder="Search opponent name..."
          value={(table.getColumn("studentAlias")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("studentAlias")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("isRead") && (
          <DataTableFacetedFilter
            column={table.getColumn("isRead")}
            title="Status"
            options={[
              // @ts-ignore
              { value: true, label: "Read" },
              // @ts-ignore
              { value: false, label: "Not Read" },
            ]}
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