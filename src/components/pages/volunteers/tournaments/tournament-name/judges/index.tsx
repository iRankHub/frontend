'use client'
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { Judge } from "@/lib/grpc/proto/debate_management/debate_pb";

type JudgesTableProps = {
  judges: Judge.AsObject[];
};

function Judges({ judges }: JudgesTableProps) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <DataTable
        data={judges}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Judges;
