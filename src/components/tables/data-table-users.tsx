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
import { Loader2 } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
}

type ActionType = "approve" | "reject" | "delete";

export function DataTable<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [loadingActions, setLoadingActions] = React.useState<Record<ActionType, boolean>>({
    approve: false,
    reject: false,
    delete: false,
  });
  const [contextMenuOpen, setContextMenuOpen] = React.useState(false);

  const { pagination, setPagination } = useUsersStore((state) => state);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination: {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      },
    },
    pageCount: Math.ceil(pagination.totalCount / pagination.pageSize),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({
          pageIndex: pagination.pageIndex,
          pageSize: pagination.pageSize,
        });
        setPagination(newState);
      } else {
        setPagination(updater);
      }
    },
    manualPagination: true,
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

  const handleContextMenuAction = async (action: "approve" | "reject" | "delete") => {
    if (!user) return;
    setLoadingActions((prev) => ({ ...prev, [action]: true }));
    const selectedRows = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original) as UserSummary.AsObject[];

    const userIds = selectedRows.map((row) => row.userid);
    const options = {
      token: user.token,
      userIDs: userIds,
      action,
    };

    try {
      if (action === "delete") {
        const res = await bulkDeleteUsers(options);
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
      } else {
        const res = await bulkApproveOrRejectUsers(options);
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
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingActions((prev) => ({ ...prev, [action]: false }));
    }
  };

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
  }, [table, rowSelection]);

  const ActionMenuItem: React.FC<{
    action: ActionType;
    icon: React.ReactNode;
    label: string;
  }> = ({ action, icon, label }) => (
    <ContextMenuItem
      onClick={(e) => {
        e.preventDefault();
        handleContextMenuAction(action);
      }}
      className="flex items-center gap-2"
      disabled={loadingActions[action]}
    >
      {loadingActions[action] ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        icon
      )}
      {label}
    </ContextMenuItem>
  );

  return (
    <div>
      {DataTableToolbar && <DataTableToolbar table={table} />}
      <div className="w-full bg-background p-5">
        <div className="rounded-md border mb-10">
          <ContextMenu onOpenChange={setContextMenuOpen}>
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
              <ContextMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
                <ContextMenuItem
                  disabled
                  className="font-semibold text-foreground disabled:opacity-100"
                >
                  Actions (selected)
                </ContextMenuItem>
                <ActionMenuItem
                  action="approve"
                  icon={<Icons.addCircle className="w-4 h-4" />}
                  label="Approve"
                />
                <ActionMenuItem
                  action="reject"
                  icon={<Icons.circleX className="w-4 h-4" />}
                  label="Reject"
                />
                <ActionMenuItem
                  action="delete"
                  icon={<Icons.trash2 className="w-4 h-4" />}
                  label="Delete"
                />
              </ContextMenuContent>
            )}
          </ContextMenu>
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
