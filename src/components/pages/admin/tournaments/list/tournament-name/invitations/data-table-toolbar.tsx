"use client";
import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { statuses, userRoles } from "@/components/tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="w-full rounded-t-md overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-brown p-4">
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Search user..."
            value={(table.getColumn("inviteeName")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("inviteeName")?.setFilterValue(event.target.value)
            }
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {table.getColumn("inviteeRole") && (
            <DataTableFacetedFilter
              column={table.getColumn("inviteeRole")}
              title="Category"
              options={userRoles}
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
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
