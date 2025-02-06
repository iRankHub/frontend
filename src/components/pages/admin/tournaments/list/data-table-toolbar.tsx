"use client";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchTerm: string;
  isLoading: boolean;
}

export function DataTableToolbar<TData>({
  table,
  searchTerm,
  isLoading,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [inputValue, setInputValue] = useState(searchTerm);

  // Update input value when searchTerm prop changes
  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const event = new CustomEvent('search-change', {
      detail: newValue
    });
    window.dispatchEvent(event);
  };

  const handleClearSearch = () => {
    setInputValue('');
    const event = new CustomEvent('search-change', {
      detail: ''
    });
    window.dispatchEvent(event);
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    const event = new CustomEvent('reset-table');
    window.dispatchEvent(event);
  };

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
    return uniqueCoordinatorName
      .map((value) => ({
        label: value as string,
        value: value as string,
      }));
  }, [table]);

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search tournaments..."
            value={inputValue}
            onChange={handleInputChange}
            className={cn("h-8 w-[150px] lg:w-[280px]", isLoading && "opacity-50")}
            disabled={isLoading}
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="h-8 px-2 text-white"
              disabled={isLoading}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>

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
        {(isFiltered || inputValue) && (
          <Button
            variant="ghost"
            onClick={handleResetAll}
            className="h-8 px-2 lg:px-3 text-white"
            disabled={isLoading}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
