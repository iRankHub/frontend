"use client";

import { ColumnDef } from "@tanstack/react-table";

import { priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
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

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});

export const columns: ColumnDef<Task>[] = [
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
    accessorKey: "emails",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Emails" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className={cn("max-w-[200px] truncate", inter)}>
            {row.getValue("emails")}
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
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      let variant;
      switch (status.label) {
        case "Accepted":
          variant = "green-200 text-success";
          break;
        case "Rejected":
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
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = priorities.find(
        (category) => category.value === row.getValue("category")
      );

      if (!category) {
        return null;
      }

      return (
        <div className="flex items-center">
          <Badge variant="default" className="hover:bg-${variant">
            {category.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      return <Options />;
    },
    enableHiding: false,
  },
];

const Options = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center space-x-1">
      <Dialog onOpenChange={setOpen} open={open}>
        <Sheet>
          <SheetTrigger>
            <Button
              type="button"
              variant={"secondary"}
              size={"icon"}
              className="bg-transparent w-6 h-6 p-1 m-0"
            >
              <Icons.view className="w-4 h-4 text-info" />
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
                  size={"sm"}
                  variant={"destructive"}
                  onClick={() => setOpen(!open)}
                >
                  Reject
                </Button>
                <Button type="button" size={"sm"} variant={"default"}>
                  Accept
                </Button>
              </div>
            </PanelBody>
          </SidePanel>
        </Sheet>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              This action cannot be undone. This will permanently delete this
              tournament format and remove all related data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="submit"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"sm"}
              variant={"destructive"}
              className="max-w-32"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button
        type="button"
        variant={"secondary"}
        size={"icon"}
        className="bg-transparent w-6 h-6 p-1 m-0"
      >
        <Icons.circleCheck className="w-4 h-4 text-success-light" />
      </Button>
      <Dialog>
        <DialogTrigger>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.trash2 className="w-4 h-4 text-destructive" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              This action cannot be undone. This will permanently delete this
              tournament format and remove all related data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end">
            <Button
              type="submit"
              size={"sm"}
              variant={"outline"}
              className="max-w-32"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"sm"}
              variant={"destructive"}
              className="max-w-32"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
