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

  const leagueOptions = useMemo(() => {
    const column = table.getColumn("leagueName");
    if (!column) return [];

    const uniqueLeagueName = Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("leagueName"))
      )
    );

    // filter out null values
    return uniqueLeagueName
      .map((value) => ({
        label: value as string,
        value: value as string,
      }));
  }, [table]);

  const coordinatorOptions = useMemo(() => {
    const column = table.getColumn("coordinatorName");
    if (!column) return [];

    const uniqueCoordinatorName = Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("coordinatorName"))
      )
    );

    // filter out null values
    return uniqueCoordinatorName
      .map((value) => ({
        label: value as string,
        value: value as string,
      }));
  }, [table]);
  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
        <Input
          placeholder="Search name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("leagueName") && (
          <DataTableFacetedFilter
            column={table.getColumn("leagueName")}
            title="League"
            options={leagueOptions}
          />
        )}
        {table.getColumn("coordinatorName") && (
          <DataTableFacetedFilter
            column={table.getColumn("coordinatorName")}
            title="Coordinator"
            options={coordinatorOptions}
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
