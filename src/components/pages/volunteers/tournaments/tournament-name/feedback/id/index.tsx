import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { GetTournamentRoomsProps } from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { useRoomsStore } from "@/stores/admin/debate/rooms.store";
import { getTournamentRooms } from "@/core/debates/rooms";

type RoomsProps = {
  feedback_id: number;
};

function StudentsFeedbacksTable({ feedback_id }: RoomsProps) {
  const { user } = useUserStore((state) => state);
  const { setRooms, rooms } = useRoomsStore((state) => state);

  React.useEffect(() => {
    if (!user) return;
    const options: GetTournamentRoomsProps = {
      token: user.token,
      tournament_id: feedback_id,
    };
    getTournamentRooms(options)
      .then((res) => {
        setRooms(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [feedback_id, user, setRooms]);
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

export default StudentsFeedbacksTable;
