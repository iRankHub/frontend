import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Card } from "@/components/ui/card";
import {
  League,
  Tournament,
  TournamentFormat,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import TournamentCard from "./tournament-card";
import FormatCard from "./formats-card";
import { cn } from "@/lib/utils";
import LeagueCard from "./leagues-card";

interface DataCardViewProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
  setTournaments?: React.Dispatch<React.SetStateAction<Tournament.AsObject[]>>;
  setFormats?: (formats: TournamentFormat.AsObject[]) => void;
  setLeagues?: (leagues: League.AsObject[]) => void;
  cardType: "tournament" | "format" | "league";
}

export function DataCardView<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
  setTournaments,
  cardType,
  setFormats,
  setLeagues,
}: DataCardViewProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const getColumnValue = (row: any, columnId: string) => {
    return row.getValue(columnId) as string;
  };

  const handleCardDisplay = (row: Row<TData>) => {
    switch (cardType) {
      case "tournament":
        return (
          <TournamentCard
            key={row.id}
            row={row}
            getColumnValue={getColumnValue}
            setTournaments={
              setTournaments as React.Dispatch<
                React.SetStateAction<Tournament.AsObject[]>
              >
            }
          />
        );
      case "format":
        return (
          <FormatCard
            key={row.id}
            row={row}
            getColumnValue={getColumnValue}
          />
        );
      case "league":
        return (
          <LeagueCard
            key={row.id}
            row={row}
            getColumnValue={getColumnValue}
          />
        );
    }
  };
  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-8 px-5">
        <div
          className={cn(
            "grid gap-4 mb-10",
            cardType === "tournament" &&
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ",
            cardType === "format" &&
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5",
            cardType === "league" &&
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
          )}
        >
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => handleCardDisplay(row))
          ) : (
            <Card>
              <div className="h-24 flex items-center justify-center">
                No results.
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
