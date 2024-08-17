import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";

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
