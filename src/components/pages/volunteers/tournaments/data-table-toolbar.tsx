"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { priorities, statuses, userRoles } from "@/components/tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tournamentLeagues } from "@/core/tournament/leagues";
import { useUserStore } from "@/stores/auth/auth.store";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { user } = useUserStore((state) => state);

  const [leagueNames, setLeagueNames] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentLeagues({ ...data })
      .then((res) => {
        setLeagueNames(
          res.leaguesList.map((league) => ({
            value: league.leagueId.toString(),
            label: league.name,
          }))
        );
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);
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
            title="Leagues"
            options={leagueNames}
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
