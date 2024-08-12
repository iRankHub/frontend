"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Check, ChevronsUpDown, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Judges } from "@/components/tables/data/schema";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { rooms } from "@/components/tables/data/data";

export const columns: ColumnDef<Judges>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="iDebate ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("id")}
          </span>
        </div>
      );
    },
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
    accessorKey: "preliminary",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-sm">{row.getValue("preliminary")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "elimination",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-sm">{row.getValue("elimination")}</span>
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
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center justify-center space-x-1">
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
              <Panelheader>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-bold capitalize">
                    {row.getValue("names")}
                  </h3>
                  <Button
                    type="button"
                    className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                    size={"icon"}
                  >
                    <Icons.pencilLine className="w-4 h-4" />
                  </Button>
                </div>
              </Panelheader>
              <div className="w-full h-[calc(100%_-_70px)] p-5 flex flex-col">
                <div className="w-full flex-1">
                  <div className="w-full mb-3">
                    <span className="text-sm text-foreground font-medium">
                      Name
                    </span>
                    <Input
                      placeholder="room name"
                      value={"Room 1"}
                      className="text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold">
                    preliminary
                  </h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-medium text-foreground">
                        Round 1
                      </span>
                      <RoundRooms />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <span className="text-sm font-medium text-foreground">
                        Round 2
                      </span>
                      <RoundRooms />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-medium text-foreground">
                        Round 3
                      </span>
                      <RoundRooms />
                    </div>
                  </div>
                  <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold mt-5">
                    Elimination
                  </h3>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        Quater Finals
                      </span>
                      <RoundRooms />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        Semi Finals
                      </span>
                      <RoundRooms />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end ga-3">
                  <Button
                    variant={"default"}
                    size={"sm"}
                    className="hover:bg-primary"
                  >
                    Save Changes
                    <span className="sr-only">Save Changes</span>
                  </Button>
                </div>
              </div>
            </SidePanel>
          </Sheet>
        </div>
      );
    },
    enableHiding: false,
  },
];

const RoundRooms = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {value
            ? rooms.find((framework) => framework.value === value)?.label
            : "room..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {rooms.map((room) => (
                <CommandItem
                  key={room.value}
                  value={room.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === room.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {room.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
