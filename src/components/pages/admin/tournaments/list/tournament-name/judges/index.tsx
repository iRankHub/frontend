'use client'
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { Judge } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentJudges } from "@/core/debates/pairings";
import { GetTournamentJudgesProps } from "@/types/pairings";

type JudgesTableProps = {
  tournamentId: number;
  totalRounds: number;
  is_elimination: boolean;
};

function Judges({
  tournamentId,
  is_elimination,
}: JudgesTableProps) {
  const [judges, setJudges] = React.useState<Judge.AsObject[]>([]);
  const { user } = useUserStore((state) => state);

  React.useEffect(() => {
    if (!user) return;
    const options: GetTournamentJudgesProps = {
      is_elimination,
      round_number: 1,
      token: user.token,
      tournament_id: tournamentId,
    };
    getTournamentJudges(options)
      .then((res) => {
        setJudges(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [tournamentId, user, is_elimination]);
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
