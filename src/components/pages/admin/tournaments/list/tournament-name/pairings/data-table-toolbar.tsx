"use client";

import { Icons } from "@/components/icons";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { priorities, statuses } from "@/components/tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updatePairings } from "@/core/debates/pairings";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import React from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().globalFilter !== "";
  const [isUpdating, setIsUpdating] = React.useState(false);
  const {
    isSwapMade,
    originalData,
    filteredData,
    setOriginalData,
    resetSwaps,
  } = useTeamSwapStore((state) => state);
  const { user } = useUserStore((state) => state);

  const handleUpdatePairings = async () => {
    if (!user) return;

    const options = {
      token: user.token,
      pairings: filteredData,
    };

    setIsUpdating(true);
    await updatePairings(options)
      .then(() => {
        setOriginalData(filteredData);
        resetSwaps();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  const handleCancelSwap = () => {
    resetSwaps();
  }

  return (
    <div className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between mb-14">
      <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
        <Input
          placeholder="Search team..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[280px]"
        />
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
      {isSwapMade && (
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={handleCancelSwap}
            className="h-8 px-2 lg:px-3"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={handleUpdatePairings}
            className="h-8 px-2 lg:px-3"
          >
            Update
            {isUpdating && (
              <Icons.spinner
                className="ml-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
