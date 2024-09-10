"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
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

import { DataTablePagination } from "./data-table-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
}

// Global filter function
const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  const searchValue = value.toLowerCase();
  const team1 = row.getValue("team1") as { name: string } | undefined;
  const team2 = row.getValue("team2") as { name: string } | undefined;
  const roomName = row.getValue("roomName") as string | undefined;

  return (
    (team1?.name.toLowerCase().includes(searchValue) ?? false) ||
    (team2?.name.toLowerCase().includes(searchValue) ?? false) ||
    (roomName?.toLowerCase().includes(searchValue) ?? false)
  );
};

export function DataTable<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState(""); // Add this line
  const {
    originalData,
    swapTeams,
    swapsByRound,
    currentRound,
    setOriginalData,
    editingRow,
    setFilteredData,
  } = useTeamSwapStore((state) => ({
    originalData: state.originalData,
    swapTeams: state.swapTeams,
    swapsByRound: state.swapsByRound,
    currentRound: state.currentRound,
    setOriginalData: state.setOriginalData,
    editingRow: state.editingRow,
    setFilteredData: state.setFilteredData, // Add this if it doesn't exist in your store
  }));

  React.useEffect(() => {
    setOriginalData(data as Pairing.AsObject[]);
  }, [data, setOriginalData]);

  // Apply swaps for the current round
  const swappedData = React.useMemo(() => {
    let newData = JSON.parse(
      JSON.stringify(originalData)
    ) as Pairing.AsObject[];
    const swapsForRound = swapsByRound[currentRound] || [];
    swapsForRound.forEach(({ from, to }) => {
      // @ts-ignore
      const temp = newData[from.rowIndex][from.columnId];
      // @ts-ignore
      newData[from.rowIndex][from.columnId] = newData[to.rowIndex][to.columnId];
      // @ts-ignore
      newData[to.rowIndex][to.columnId] = temp;
    });
    return newData;
  }, [originalData, swapsByRound, currentRound]);

  const table = useReactTable({
    data: swappedData as any,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // React.useEffect(() => {
  //   const filteredData = table.getFilteredRowModel().rows.map(row => row.original);
  //   setFilteredData(filteredData as Pairing.AsObject[]);
  // }, [table.getFilteredRowModel().rows, setFilteredData]);

  const getBorderColor = (rowIndex: number, columnId: string) => {
    const swapsForRound = swapsByRound[currentRound] || [];
    const swap = swapsForRound.find(
      (s) =>
        (s.from.rowIndex === rowIndex && s.from.columnId === columnId) ||
        (s.to.rowIndex === rowIndex && s.to.columnId === columnId)
    );
    if (swap) {
      if (swap.from.rowIndex === rowIndex && swap.from.columnId === columnId) {
        return "border-green-500";
      } else {
        return "border-red-500";
      }
    }
    return "border-transparent";
  };

  const handleSelectTeam = (
    selectedTeam: string,
    currentRowIndex: number,
    currentColumnId: string
  ) => {
    // Find the row and column of the selected team
    const targetRowIndex = swappedData.findIndex(
      (rowData) =>
        rowData.team1?.name === selectedTeam ||
        rowData.team2?.name === selectedTeam
    );
    const targetColumnId =
      swappedData[targetRowIndex].team1?.name === selectedTeam
        ? "team1"
        : "team2";

    // Perform the swap
    swapTeams(
      { rowIndex: currentRowIndex, columnId: currentColumnId },
      { rowIndex: targetRowIndex, columnId: targetColumnId }
    );
  };

  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-5">
        <div className="rounded-md border mb-10">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, rowIndex) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const columnId = cell.column.id;
                      const isPropositionOrOpposition =
                        columnId === "team1" || columnId === "team2";

                      const currentTeam = isPropositionOrOpposition
                        ? (swappedData[rowIndex][columnId] as { name: string })
                            ?.name || ""
                        : null;

                      const borderColor = getBorderColor(rowIndex, columnId);

                      return (
                        <TableCell key={cell.id} className={``}>
                          {isPropositionOrOpposition ? (
                            editingRow === rowIndex ? (
                              <Popover modal>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full justify-between",
                                      `border ${borderColor}`
                                    )}
                                  >
                                    {currentTeam}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search information..." />
                                    <CommandList>
                                      <CommandEmpty>
                                        No information found.
                                      </CommandEmpty>
                                      <CommandGroup>
                                        {originalData
                                          .flatMap((rowData) => [
                                            rowData.team1?.name,
                                            rowData.team2?.name,
                                          ])
                                          .filter(Boolean) // Remove null or undefined
                                          .map((teamName) => (
                                            <CommandItem
                                              key={teamName}
                                              onSelect={() =>
                                                handleSelectTeam(
                                                  teamName as string,
                                                  rowIndex,
                                                  columnId
                                                )
                                              }
                                            >
                                              <Check
                                                className={cn(
                                                  "mr-2 h-4 w-4",
                                                  currentTeam === teamName
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                              />
                                              {teamName}
                                            </CommandItem>
                                          ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            ) : (
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-between bg-transparent hover:bg-transparent",
                                  `border ${borderColor}`
                                )}
                              >
                                {currentTeam}
                              </Button>
                            )
                          ) : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
