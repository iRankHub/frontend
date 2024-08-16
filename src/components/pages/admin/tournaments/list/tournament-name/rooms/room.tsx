import React from "react";
import { rooms } from "@/components/tables/data/tasks";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";

type Props = {};

function Rooms({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        data={rooms}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Rooms;
