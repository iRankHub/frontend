import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";
import { DataTable } from "@/app/(site)/admin/tournaments/list/[name]/invitations/_components/data-table";
import { tasks } from "@/app/(site)/admin/tournaments/list/[name]/invitations/data/tasks";
import { columns } from "@/app/(site)/admin/tournaments/list/[name]/invitations/_components/columns";

type Props = {};

function Invitations({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name or ID..."
            className="w-72 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Category
            <span className="sr-only">Category</span>
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button
                type="button"
                variant={"default"}
                className="border border-dashed border-white gap-2 h-8 font-medium hover:bg-white hover:text-foreground group text-sm items-center"
              >
                <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
                Status
                <span className="sr-only">Status</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-base">Create League</DialogTitle>
              </DialogHeader>
              <div className="grid gap-3"></div>
              <DialogFooter className="w-full">
                <Button type="submit" size={"sm"} className="w-full">
                  Create League
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}

export default Invitations;
