import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { columns } from "./columns";
import { judgesTasks } from "@/components/tables/data/tasks";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";

type Props = {};

function Judges({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <DataTable
        data={judgesTasks}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Judges;
