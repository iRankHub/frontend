import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  Table as TableType,
  VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Card } from "@/components/ui/card";
import {
  Tournament,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import TournamentCard from "./tournament-card";
import FormatCard from "./formats-card";
import { cn } from "@/lib/utils";
import LeagueCard from "./leagues-card";
import FeedbackCard from "./feedback-card";

interface DataCardViewProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
  setTournaments?: React.Dispatch<React.SetStateAction<Tournament.AsObject[]>>;
  cardType: "tournament" | "format" | "league" | "feedback";
}

export function DataCardView<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
  setTournaments,
  cardType,
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
    manualPagination: true,
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
          <FormatCard key={row.id} row={row} getColumnValue={getColumnValue} />
        );
      case "league":
        return (
          <LeagueCard key={row.id} row={row} getColumnValue={getColumnValue} />
        );
      case "feedback":
        return (
          <FeedbackCard
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
    }
  };
  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-8 px-5">
        {table.getRowModel().rows?.length ? (
          <div
            className={cn(
              "grid gap-4 mb-10",
              cardType === "tournament" &&
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              cardType === "format" &&
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5",
              cardType === "league" &&
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5",
              cardType === "feedback" &&
                "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16"
            )}
          >
            {table.getRowModel().rows.map((row) => handleCardDisplay(row))}
          </div>
        ) : (
          <Card className="min-h-96 grid place-content-center">
            <div className="h-24 flex items-center justify-center">
              No results found
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
