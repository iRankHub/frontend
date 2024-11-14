"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icons } from "@/components/icons";
import Image from "next/image";

export type Volunteer = {
  id: string;
  profile: string;
  fullname: string;
  averagePoint: number;
  debates: number;
  preliminary: number;
  elimination: number;
  cumulativePoints: number;
  pointsChange: number;
};

const data: Volunteer[] = [
  {
    id: "VOL001",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766214/samples/woman-on-a-football-field.jpg",
    fullname: "Emma Thompson",
    averagePoint: 85.5,
    debates: 24,
    preliminary: 16,
    elimination: 8,
    cumulativePoints: 12345,
    pointsChange: 4.92,
  },
  {
    id: "VOL002",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766215/cld-sample.jpg",
    fullname: "David Martinez",
    averagePoint: 82.3,
    debates: 20,
    preliminary: 14,
    elimination: 6,
    cumulativePoints: 10234,
    pointsChange: -2.15,
  },
  {
    id: "VOL001",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766214/samples/woman-on-a-football-field.jpg",
    fullname: "Emma Thompson",
    averagePoint: 85.5,
    debates: 24,
    preliminary: 16,
    elimination: 8,
    cumulativePoints: 12345,
    pointsChange: 4.92,
  },
  {
    id: "VOL002",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766215/cld-sample.jpg",
    fullname: "David Martinez",
    averagePoint: 82.3,
    debates: 20,
    preliminary: 14,
    elimination: 6,
    cumulativePoints: 10234,
    pointsChange: -2.15,
  },
  {
    id: "VOL001",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766214/samples/woman-on-a-football-field.jpg",
    fullname: "Emma Thompson",
    averagePoint: 85.5,
    debates: 24,
    preliminary: 16,
    elimination: 8,
    cumulativePoints: 12345,
    pointsChange: 4.92,
  },
  {
    id: "VOL002",
    profile:
      "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766215/cld-sample.jpg",
    fullname: "David Martinez",
    averagePoint: 82.3,
    debates: 20,
    preliminary: 14,
    elimination: 6,
    cumulativePoints: 10234,
    pointsChange: -2.15,
  },
];

export const columns: ColumnDef<Volunteer>[] = [
  {
    accessorKey: "profile",
    header: () => <div className="text-center">Profile</div>,
    cell: ({ row }) => (
      <div className="flex justify-center items-center">
        <div className="w-10 h-10 rounded-full relative">
          <Image
            src={row.getValue("profile")}
            alt={`${row.getValue("fullname")}'s profile`}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Volunteer ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "fullname",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Full Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("fullname")}</div>
    ),
  },
  {
    accessorKey: "averagePoint",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Average Point
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue<number>("averagePoint").toFixed(1)}
      </div>
    ),
  },
  {
    accessorKey: "debates",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Debates
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("debates")}</div>
    ),
  },
  {
    accessorKey: "preliminary",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Preliminary
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("preliminary")}</div>
    ),
  },
  {
    accessorKey: "elimination",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Elimination
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("elimination")}</div>
    ),
  },
  {
    accessorKey: "cumulativePoints",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center justify-center"
          >
            Cumulative Points
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const points = row.getValue<number>("cumulativePoints");
      const change = row.getValue<number>("pointsChange");
      const formatted = new Intl.NumberFormat("en-US").format(points);
      const changeColor = change >= 0 ? "text-green-600" : "text-red-600";
      const changeSymbol = change >= 0 ? "+" : "";

      console.log(formatted, changeColor, changeSymbol);

      return (
        <div className="flex flex-col items-end pr-10 justify-end space-y-1">
          <h3>{points}</h3>
          <h3 className="text-green-600">76.12 (+4.92%)</h3>

          {/* <div className="font-medium">{formatted}</div>
          <div className={`text-sm ${changeColor}`}>
            {`${changeSymbol}${change.toFixed(2)}%`}
          </div> */}
        </div>
      );
    },
  },
];

export function VolunteerPerformanceTable({
  type,
}: {
  type: "Volunteer" | "Student" | "School";
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <h3 className="capitalize text-lg text-foreground font-semibold mb-4">
          {type} Performance
        </h3>
        <div className="flex items-center gap-3 mb-5">
          <Input
            placeholder="Search volunteer..."
            className="border-primary w-64"
          />
          <Button type="button" size={"sm"}>
            <Icons.addCircle size={18} className="text-white" />
            2024
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
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
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>
  );
}
