"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
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
import { useUserStore } from "@/stores/auth/auth.store";
import { getSchools } from "@/core/users/schools";
import { GetSchoolsType } from "@/types/user_management/schools";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { DataTable } from "@/components/tables/data-table";

function Users() {
  const [selected, setSelected] = React.useState<
    "school" | "student" | "volunteer" | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>();
  const [sheetOpen, setSheetOpen] = useState<boolean>();
  const { user } = useUserStore((state) => state);
  const { users, setUsers } = useUsersStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const options: GetSchoolsType = {
      pageSize: 10,
      page: 1,
      token: user.token,
    };
    getSchools({ ...options })
      .then((res) => {
        setUsers(res.schoolsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);
  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <div className="flex items-center justify-between flex-wrap gap-3 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name or ID..."
            className="w-64 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Category
            <span className="sr-only">Category</span>
          </Button>
          <Button
            type="button"
            variant={"default"}
            className="border border-dashed border-white gap-2 h-8 font-medium hover:bg-white hover:text-foreground group text-sm items-center"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Status
            <span className="sr-only">Status</span>
          </Button>
        </form>
        <div className="flex items-center gap-1">
          <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
            <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
              <DialogTrigger>
                <Button
                  type="button"
                  className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
                >
                  <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
            </SidePanel>
          </Sheet>
          <Dialog>
            <DialogTrigger>
              <Button
                type="button"
                className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
              >
                <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
                Import Users
                <span className="sr-only">Import Users</span>
              </Button>
            </DialogTrigger>
            <FileUpload />
          </Dialog>
        </div>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <DataTable data={users} columns={columns} />
      </div>
    </div>
  );
}

export default Users;
