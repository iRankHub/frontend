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
import { useUserStore } from "@/stores/auth/auth.store";
import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import {
  bulkResendInvitations,
  bulkUpdateInvitation,
} from "@/core/tournament/list";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import { InvitationInfo } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { CheckCheck, Loader2, RefreshCw, XIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DataTableToolbar?: React.ComponentType<{
    table: TableType<TData>;
  }>;
}

type ActionType = "accepted" | "rejected" | "resend";

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
  const [loadingActions, setLoadingActions] = React.useState<
    Record<ActionType, boolean>
  >({
    accepted: false,
    rejected: false,
    resend: false,
  });
  const [contextMenuOpen, setContextMenuOpen] = React.useState(false);

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

  const { bulkUpdateInvitationStatus, tournament } = useInvitationsStore((state) => state);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  const handleContextMenuAction = async (
    action: "accepted" | "rejected" | "resend"
  ) => {
    // ... (rest of the function remains unchanged)
  };

  const allSelectedRowsArePending = React.useMemo(() => {
    const selectedRows = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original) as UserSummary.AsObject[];
    return (
      selectedRows.length > 0 &&
      selectedRows.every((row) => row.status === "pending")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, rowSelection]);

  const isTournamentEnded = React.useMemo(() => {
    if (!tournament || !tournament.endDate) return false;
    const tournamentEndDate = new Date(tournament.endDate);
    return new Date() > tournamentEndDate;
  }, [tournament]);

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
            {allSelectedRowsArePending && !isTournamentEnded && (
              <ContextMenuContent>
                <ContextMenuItem
                  disabled
                  className="font-semibold text-foreground disabled:opacity-100"
                >
                  Actions (selected)
                </ContextMenuItem>
                <ActionMenuItem
                  action="accepted"
                  icon={<CheckCheck className="w-4 h-4" />}
                  label="Accept"
                />
                <ActionMenuItem
                  action="rejected"
                  icon={<XIcon className="w-4 h-4" />}
                  label="Reject"
                />
                <ActionMenuItem
                  action="resend"
                  icon={<RefreshCw className="w-4 h-4" />}
                  label="Resend"
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