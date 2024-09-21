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
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { bulkApproveOrRejectUsers, bulkDeleteUsers } from "@/core/users/users";
import { Icons } from "../icons";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
}

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

  const { users, setUsers, updateUserStatus } = useUsersStore((state) => state);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  const handleContextMenuAction = async (
    action: "approve" | "reject" | "delete"
  ) => {
    if (!user) return;
    const selectedRows = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original) as UserSummary.AsObject[];

    const userIds = selectedRows.map((row) => row.userid);
    const options = {
      token: user.token,
      userIDs: userIds,
      action,
    };

    if (action === "delete") {
      // setUsers(users.filter((user) => !userIds.includes(user.userid)));
      bulkDeleteUsers(options)
        .then((res) => {
          if (res.success) {
            setUsers(users.filter((user) => !userIds.includes(user.userid)));
            table.resetRowSelection();
            toast({
              variant: "success",
              title: "Success",
              description: `Users ${action} successfully`,
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
          } else {
            toast({
              variant: "destructive",
              title: "Error",
              description: res.message,
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      bulkApproveOrRejectUsers(options)
        .then((res) => {
          if (res.success) {
            const formattedStatus = action === "approve" ? "approved" : "rejected";
            selectedRows.forEach((row) => {
              updateUserStatus(row.userid, formattedStatus);
            });
            table.resetRowSelection();
            toast({
              variant: "success",
              title: "Success",
              description: `Users ${action} successfully`,
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
          } else {
            toast({
              variant: "destructive",
              title: "Error",
              description: res.message,
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  // const hasPendingSelectedRows = React.useMemo(() => {
  //   const selectedRows = table.getFilteredSelectedRowModel().rows.map(
  //     (row) => row.original
  //   ) as UserSummary.AsObject[];
  //   return selectedRows.some(row => row.status === 'pending');
  // }, [table, rowSelection]);

  const allSelectedRowsArePending = React.useMemo(() => {
    const selectedRows = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original) as UserSummary.AsObject[];
    return (
      selectedRows.length > 0 &&
      selectedRows.every(
        (row) => row.status === "pending" || row.status === "approved"
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, rowSelection]);

  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-5">
        <div className="rounded-md border mb-10">
          <ContextMenu>
            <ContextMenuTrigger className="w-full">
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
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
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
            </ContextMenuTrigger>
            {allSelectedRowsArePending && (
              <ContextMenuContent>
                <ContextMenuItem
                  disabled
                  className="font-semibold text-foreground disabled:opacity-100"
                >
                  Actions (selected)
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => handleContextMenuAction("approve")}
                  className="flex items-center gap-2"
                >
                  <Icons.addCircle className="w-4 h-4" />
                  Approve
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => handleContextMenuAction("reject")}
                  className="flex items-center gap-2"
                >
                  <Icons.circleX className="w-4 h-4" />
                  Reject
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => handleContextMenuAction("delete")}
                  className="flex items-center gap-2"
                >
                  <Icons.trash2 className="w-4 h-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            )}
          </ContextMenu>
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
