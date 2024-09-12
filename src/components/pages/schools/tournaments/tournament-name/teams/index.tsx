"use client";

import { Icons } from "@/components/icons";
import { DataTable } from "@/components/tables/data-table";
import React from "react";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";

function Teams() {
  const { teams } = useTeamsStore((state) => state);
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
