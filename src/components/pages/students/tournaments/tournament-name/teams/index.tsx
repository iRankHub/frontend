import { Icons } from "@/components/icons";
import { DataTable } from "@/components/tables/data-table";
import { teams } from "@/components/tables/data/tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { columns } from "./columns";

type Props = {};

function Teams({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Input
              type="search"
              placeholder="Search school..."
              className="w-72 h-8"
            />
            <Button
              type="button"
              className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
            >
              <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
              No. Of Teams
              <span className="sr-only">No. Of Teams</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-background p-5">
        <DataTable data={teams} columns={columns} />
      </div>
    </div>
  );
}

export default Teams;
