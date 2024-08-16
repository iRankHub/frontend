import { Icons } from "@/components/icons";
import { DataTable } from "@/components/tables/data-table";
import { teams } from "@/components/tables/data/tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";

type Props = {};

function Teams({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <DataTable
        data={teams}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Teams;
