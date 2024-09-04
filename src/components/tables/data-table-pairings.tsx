"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
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
import { useTeamSwapStore } from "@/stores/admin/tournaments/pairings/pairings.store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function DataTable<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
}: DataTableProps<TData, TValue>) {
  const [open, setOpen] = React.useState(false);
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

  const { tableData, swapTeams, changedField, affectedField, setTableData } =
    useTeamSwapStore((state) => ({
      tableData: state.tableData,
      swapTeams: state.swapTeams,
      changedField: state.changedField,
      affectedField: state.affectedField,
      setTableData: state.setTableData,
    }));

  React.useEffect(() => {
    setTableData(data as Pairing.AsObject[]);
  }, [data, setTableData]);

  // Gather all teams from the entire table
  const allTeams = React.useMemo(() => {
    return table.getRowModel().rows.reduce((acc, row) => {
      const rowData = row.original as Pairing.AsObject;
      const team1 = rowData.team1 as { name: string };
      const team2 = rowData.team2 as { name: string };

      if (team1?.name) acc.push(team1.name);
      if (team2?.name) acc.push(team2.name);

      return acc;
    }, [] as string[]);
  }, [table]);

  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-8 px-5">
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

                      const original = row.original as Pairing.AsObject;
                      const currentTeam =
                        columnId === "team1"
                          ? (original.team1 as { name: string }).name
                          : (original.team2 as { name: string }).name;

                      const handleSelectTeam = (selectedTeam: string) => {
                        // Find the row and column of the selected team
                        const targetRowIndex = tableData.findIndex(
                          (rowData) =>
                            rowData.team1?.name === selectedTeam ||
                            rowData.team2?.name === selectedTeam
                        );
                        const targetColumnId =
                          tableData[targetRowIndex].team1?.name === selectedTeam
                            ? "team1"
                            : "team2";

                        // Perform the swap
                        swapTeams(
                          { rowIndex, columnId },
                          { rowIndex: targetRowIndex, columnId: targetColumnId }
                        );

                        
                      };

                      const borderColor =
                        changedField?.rowIndex === rowIndex &&
                        changedField?.columnId === columnId
                          ? "border-green-500"
                          : affectedField?.rowIndex === rowIndex &&
                            affectedField?.columnId === columnId
                          ? "border-red-500"
                          : "border-transparent";

                      return (
                        <TableCell
                          key={cell.id}
                          className={`border ${borderColor}`}
                        >
                          {isPropositionOrOpposition ? (
                            <Popover modal>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="w-full justify-between"
                                >
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
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
                                      {tableData.map((rowData, index) => {
                                        const team1Name = rowData.team1?.name;
                                        const team2Name = rowData.team2?.name;

                                        return (
                                          <>
                                            {team1Name && (
                                              <CommandItem
                                                key={`team1-${index}`}
                                                onSelect={() =>
                                                  handleSelectTeam(team1Name)
                                                }
                                              >
                                                <Check
                                                  className={cn(
                                                    "mr-2 h-4 w-4",
                                                    currentTeam === team1Name
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  )}
                                                />
                                                {team1Name}
                                              </CommandItem>
                                            )}
                                            {team2Name && (
                                              <CommandItem
                                                key={`team2-${index}`}
                                                onSelect={() =>
                                                  handleSelectTeam(team2Name)
                                                }
                                              >
                                                <Check
                                                  className={cn(
                                                    "mr-2 h-4 w-4",
                                                    currentTeam === team2Name
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  )}
                                                />
                                                {team2Name}
                                              </CommandItem>
                                            )}
                                          </>
                                        );
                                      })}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
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
