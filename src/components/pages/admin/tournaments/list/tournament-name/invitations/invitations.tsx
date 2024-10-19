"use client"
import React from "react";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import { DataTable } from "@/components/tables/data-table-invitations";

function Invitations() {
  const { invitations } = useInvitationsStore((state) => state);
  return (
    <div className="w-full rounded-md overflow-hidden">
      <DataTable
        data={invitations}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Invitations;
