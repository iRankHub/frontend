'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { useUserStore } from "@/stores/auth/auth.store";
import { getBallots } from "@/core/debates/ballots";
import { GetBallotsProps } from "@/types/pairings/ballots";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useBallotsStore } from "@/stores/admin/debate/ballots";
import { DataTableToolbar } from "./data-table-toolbar";
import AppLoader from "@/lib/loader";

type Props = {
  is_elimination: boolean;
  tournament: Tournament.AsObject;
};

function Preliminaries({ is_elimination, tournament }: Props) {
  const { user } = useUserStore((state) => state);
  const { setBallots, ballots } = useBallotsStore((state) => state);

  const handleTabChange = (roundNumber: number) => {
    if (!user) return;
    const options: GetBallotsProps = {
      token: user.token,
      tournament_id: tournament.tournamentId,
      is_elimination,
      round: roundNumber,
    };
    getBallots(options)
      .then((res) => {
        setBallots(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  useEffect(() => {
    if (!user) return;

    const options: GetBallotsProps = {
      token: user.token,
      tournament_id: tournament.tournamentId,
      is_elimination,
      round: 1,
    };

    getBallots(options)
      .then((data) => {
        console.log(data)
        setBallots(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, tournament.tournamentId, is_elimination, setBallots]);

  if (!ballots) return <AppLoader />;

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="w-full bg-background">
        <Tabs defaultValue="round 1" className="relative">
          <TabsList className="mx-5 mt-3 absolute top-16">
            {Array.from(
              { length: tournament.numberOfPreliminaryRounds },
              (_, i) => i + 1
            ).map((round) => (
              <TabsTrigger
                key={round}
                value={`round ${round}`}
                onClick={() => handleTabChange(round)}
              >
                Round {round}
              </TabsTrigger>
            ))}
          </TabsList>
          {Array.from(
            { length: tournament.numberOfPreliminaryRounds },
            (_, i) => i + 1
          ).map((round) => (
            <TabsContent key={round} value={`round ${round}`} className="m-0">
              <DataTable
                data={ballots}
                columns={columns}
                DataTableToolbar={DataTableToolbar}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Preliminaries;
