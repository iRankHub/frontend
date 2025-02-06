"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { statuses, userRoles } from "@/components/tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Sheet } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import CreateStudentAccount from "./create-student-account";
import CreateSchoolAccount from "./create-school-account";
import CreateVolunteerAccount from "./create-volunteer-account";
import CreateAdminAccount from "./create-admin-account";
import FileUpload from "./file-upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Icons } from "@/components/icons";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchTerm: string;
  isLoading: boolean;
}

interface SearchEvent extends CustomEvent {
  detail: string;
}

export function DataTableToolbar<TData>({
  table,
  searchTerm,
  isLoading,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [selected, setSelected] = useState<
    "school" | "student" | "volunteer" | "admin" | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState<boolean | undefined>(undefined);
  const [sheetOpen, setSheetOpen] = useState<boolean | undefined>(undefined);
  const [inputValue, setInputValue] = useState(searchTerm);

  // Update input value when searchTerm prop changes
  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const event = new CustomEvent('search-change', {
      detail: newValue
    }) as SearchEvent;
    window.dispatchEvent(event);
  };

  const handleClearSearch = () => {
    setInputValue('');
    const event = new CustomEvent('search-change', {
      detail: ''
    }) as SearchEvent;
    window.dispatchEvent(event);
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    const event = new CustomEvent('reset-table');
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-start justify-between bg-brown px-5 py-3 gap-3 flex-col 2xl:flex-row">
      <div className="flex flex-1 flex-col xl:flex-row justify-end md:justify-normal md:items-start md:gap-3">
        <div className="flex items-center gap-2 w-full lg:w-[280px]">
          <Input
            placeholder="Search users..."
            value={inputValue}
            onChange={handleInputChange}
            className={cn("h-8 w-full", isLoading && "opacity-50")}
            disabled={isLoading}
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="h-8 px-2 text-white"
              disabled={isLoading}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-2 md:mt-0">
          {table.getColumn("userrole") && (
            <DataTableFacetedFilter
              column={table.getColumn("userrole")}
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
          {(isFiltered || inputValue) && (
            <Button
              variant="ghost"
              onClick={handleResetAll}
              className="h-8 px-2 lg:px-3 text-white"
              disabled={isLoading}
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-1 2xl:mx-5">
        <Sheet onOpenChange={setSheetOpen} open={sheetOpen} modal>
          <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="border border-dashed border-background text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground dark:hover:text-background group"
              >
                <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground dark:group-hover:text-background" />
                Add New User
                <span className="sr-only">Add New User</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-base leading-4">
                  Choose User Category
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Which user do you want to add?
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div
                  className={cn(
                    "group flex flex-col justify-center items-center border rounded-md hover:border-primary cursor-pointer border-border w-full h-24 gap-2",
                    selected === "student" && "border-primary"
                  )}
                  onClick={() => setSelected("student")}
                >
                  <Image
                    src="/static/images/StudentSVG.png"
                    alt="Student"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-primary group-hover:text-primary text-sm font-medium">
                    Student
                  </h3>
                </div>
                <div
                  className={cn(
                    "group flex flex-col justify-center items-center border rounded-md hover:border-primary cursor-pointer border-border w-full h-24 gap-2",
                    selected === "school" && "border-primary"
                  )}
                  onClick={() => setSelected("school")}
                >
                  <Image
                    src="/static/images/SchoolSVG.png"
                    alt="School"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-primary group-hover:text-primary text-sm font-medium">
                    School
                  </h3>
                </div>
                <div
                  className={cn(
                    "group flex flex-col justify-center items-center border rounded-md hover:border-primary cursor-pointer border-border w-full h-24 gap-2",
                    selected === "volunteer" && "border-primary"
                  )}
                  onClick={() => setSelected("volunteer")}
                >
                  <Image
                    src="/static/images/Education-Student.png"
                    alt="Volunteer"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-primary group-hover:text-primary text-sm font-medium">
                    Volunteer
                  </h3>
                </div>
                <div
                  className={cn(
                    "group flex flex-col justify-center items-center border rounded-md hover:border-primary cursor-pointer border-border w-full h-24 gap-2",
                    selected === "admin" && "border-primary"
                  )}
                  onClick={() => setSelected("admin")}
                >
                  <Image
                    src="/static/images/admin-svg.png"
                    alt="Admin"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-primary group-hover:text-primary text-sm font-medium">
                    Admin
                  </h3>
                </div>
              </div>
              <DialogFooter className="w-full">
                <Button
                  type="submit"
                  size={"sm"}
                  variant={"default"}
                  className="w-full hover:bg-primary"
                  onClick={() => {
                    setDialogOpen(false);
                    setSheetOpen(true);
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <SidePanel>
            <Panelheader>Add new {selected}</Panelheader>
            {selected === "student" && (
              <CreateStudentAccount
                type={selected}
                setSheetOpen={setSheetOpen as Dispatch<SetStateAction<boolean>>}
              />
            )}
            {selected === "school" && (
              <CreateSchoolAccount
                type={selected}
                setSheetOpen={setSheetOpen as Dispatch<SetStateAction<boolean>>}
              />
            )}
            {selected === "volunteer" && (
              <CreateVolunteerAccount
                type={selected}
                setSheetOpen={setSheetOpen as Dispatch<SetStateAction<boolean>>}
              />
            )}
            {selected === "admin" && (
              <CreateAdminAccount
                type={selected}
                setSheetOpen={setSheetOpen as Dispatch<SetStateAction<boolean>>}
              />
            )}
          </SidePanel>
        </Sheet>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="border border-dashed border-background text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground dark:hover:text-background group"
            >
              <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground dark:group-hover:text-background" />
              Import Users
              <span className="sr-only">Import Users</span>
            </Button>
          </DialogTrigger>
          <FileUpload />
        </Dialog>
      </div>
    </div>
  );
}
