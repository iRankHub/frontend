"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  PanelBody,
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { School } from "@/lib/grpc/proto/user_management/users_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { deactivateUser } from "@/core/users/users";
import { DeactivateUser } from "@/types/user_management/users";
import { ToastAction } from "@/components/ui/toast";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { billingsStatuses } from "@/components/tables/data/data";
import { Billings } from "@/components/tables/data/schema";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});

export const columns: ColumnDef<Billings>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IDebate ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "names",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("names")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "teams",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Teams" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className={cn("max-w-[200px] truncate", inter)}>
            {row.getValue("teams")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = billingsStatuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      let variant;
      switch (status.label) {
        case "Paid":
          variant = "green-200 text-success";
          break;
        case "Sponsored":
          variant = "red-200 text-destructive";
          break;
        case "Pending":
          variant = "slate-400 text-background";
          break;
        default:
          variant = "secondary";
      }
      return (
        <div className="flex w-[100px] items-center">
          <Badge
            variant="default"
            className={`bg-${variant} hover:bg-${variant}`}
          >
            {status.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      return <Options billId={row.getValue("id")} />;
    },
    enableHiding: false,
  },
];

const Options = ({ billId }: { billId: number }) => {
  const { user } = useUserStore((state) => state);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMarkAsPaid = async () => {
    if (!user) return;
  };

  return (
    <div className="flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <Sheet>
          <SheetTrigger>
            <Button
              type="button"
              variant={"secondary"}
              size={"icon"}
              className="bg-transparent w-6 h-6 p-1 m-0"
            >
              <Icons.pencilLine className="w-4 h-4 text-primary" />
            </Button>
          </SheetTrigger>
          <SidePanel>
            <Panelheader className="font-semibold">Detail Summary</Panelheader>
            <PanelBody className="flex flex-col p-5">
              <div className="flex-1 w-full flex flex-col gap-5">
                <div>
                  <h3 className="text-primary text-sm mb-3">Student Profile</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                    <p className="text-foreground text-sm mb-2">
                      Speaker 2: Iman Koulibally
                    </p>
                    <p className="text-foreground text-sm mb-2">
                      Speaker 3: Joselyto
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-primary text-sm mb-3">Academics</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-primary text-sm mb-3">Identification</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                  </Card>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between gap-3">
                <Button
                  type="button"
                  size={"lg"}
                  variant={"default"}
                  className="w-full hover:bg-primary"
                  onClick={() => setOpen(!open)}
                >
                  Mark As Paid
                  <span className="sr-only">Mark As Paid</span>
                </Button>
              </div>
            </PanelBody>
          </SidePanel>
        </Sheet>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">Ready to finalize?</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Confirm payment now to complete the process.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="button"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
            >
              Cancel
              <span className="sr-only">Cancel</span>
            </Button>
            <Button
              type="button"
              size={"sm"}
              variant={"default"}
              className="max-w-32"
            >
              Confirm
              {confirmLoading && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">Confirm</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
