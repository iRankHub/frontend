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

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    window.dispatchEvent(new CustomEvent('search-change', { detail: newValue }));
  };

  const handleClearSearch = () => {
    setInputValue('');
    window.dispatchEvent(new CustomEvent('search-change', { detail: '' }));
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    window.dispatchEvent(new CustomEvent('reset-table'));
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
    return uniqueLeagueName.map((value) => ({
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
    return uniqueCoordinatorName.map((value) => ({
      label: value as string,
      value: value as string,
    }));
  }, [table]);

  return (
    <div className="w-full rounded-t-md overflow-hidden bg-brown">
      <div className="p-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:gap-4">
          {/* Search Input */}
          <div className="relative flex-1 md:max-w-[280px]">
            <Input
              placeholder="Search tournaments..."
              value={inputValue}
              onChange={handleInputChange}
              className={cn(
                "h-9 pr-8 w-full",
                isLoading && "opacity-50"
              )}
              disabled={isLoading}
            />
            {inputValue && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 hover:bg-transparent"
                disabled={isLoading}
              >
                <Cross2Icon className="h-4 w-4 text-white" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>

          {/* Filters Group */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-fit">
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
            </div>
            {(isFiltered || inputValue) && (
              <Button
                variant="ghost"
                onClick={handleResetAll}
                className="h-9 px-3 text-white hover:bg-white/10 whitespace-nowrap"
                disabled={isLoading}
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
