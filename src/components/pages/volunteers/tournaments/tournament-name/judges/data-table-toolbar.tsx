"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
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
    <div className="w-full rounded-t-md overflow-hidden bg-brown">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
          <Input
            placeholder="Search judge..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="h-8 w-full sm:w-[150px] lg:w-[280px]"
          />
          <div className="flex flex-wrap gap-2 items-center">
            {table.getColumn("isHeadJudge") && (
              <DataTableFacetedFilter
                column={table.getColumn("isHeadJudge")}
                title="Head Judge"
                options={[
                  // @ts-ignore
                  { value: true, label: "Yes" },
                  // @ts-ignore
                  { value: false, label: "No" },
                ]}
              />
            )}
            {isFiltered && (
              <Button
                variant="ghost"
                onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 lg:px-3 whitespace-nowrap"
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
