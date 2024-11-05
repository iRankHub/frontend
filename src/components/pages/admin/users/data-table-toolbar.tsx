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
import { useState } from "react";
import { Icons } from "@/components/icons";
import CreateAdminAccount from "./create-admin-account";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [selected, setSelected] = useState<
    "school" | "student" | "volunteer" | "admin" | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>();
  const [sheetOpen, setSheetOpen] = useState<boolean>();

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between flex-wrap pb-2 bg-brown">
      <div className="flex flex-1 items-center space-x-3 p-5 py-4">
        <Input
          placeholder="Search names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
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
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 text-white"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-1 mx-5">
        <Sheet onOpenChange={setSheetOpen} open={sheetOpen} modal>
          <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
            <DialogTrigger>
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
                    alt="Student"
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
                    alt="Student"
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
                setSheetOpen={setSheetOpen}
              />
            )}
            {selected === "school" && (
              <CreateSchoolAccount
                type={selected}
                setSheetOpen={setSheetOpen}
              />
            )}
            {selected === "volunteer" && (
              <CreateVolunteerAccount
                type={selected}
                setSheetOpen={setSheetOpen}
              />
            )}
            {selected === "admin" && (
              <CreateAdminAccount type={selected} setSheetOpen={setSheetOpen} />
            )}
          </SidePanel>
        </Sheet>
        <Dialog>
          <DialogTrigger>
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
