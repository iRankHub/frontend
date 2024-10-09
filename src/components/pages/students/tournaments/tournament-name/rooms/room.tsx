import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { useRoomsStore } from "@/stores/admin/debate/rooms.store";

function Rooms() {
  const { rooms } = useRoomsStore((state) => state);

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
