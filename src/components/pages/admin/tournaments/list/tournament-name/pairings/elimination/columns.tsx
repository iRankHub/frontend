"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Task } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { rooms } from "@/components/tables/data/data";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "proposition",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Proposition" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">{row.getValue("proposition")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "oposition",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Oposition" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("oposition")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
    cell: ({ row }) => {
      const debateRoom = rooms.find((room) => room.value === row.getValue("room"));

      if (!debateRoom) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          <Badge variant="default" className={`bg-primary text-white rounded-md`}>
            {debateRoom.label}
          </Badge>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" className="justify-center" buttonClassName="ml-0" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-full h-6 items-center justify-end">
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className=" w-full bg-transparent m-0"
          >
            <Icons.pencilLine className="w-4 h-4 text-primary" />
          </Button>
        </div>
      );
    },
    enableHiding: false,
    maxSize: 20
  },
];
