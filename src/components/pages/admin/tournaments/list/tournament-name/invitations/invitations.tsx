import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { tasks } from "@/components/tables/data/tasks";
import { DataTableToolbar } from "./data-table-toolbar";

type Props = {};

function Invitations({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <DataTable
        data={tasks}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Invitations;
