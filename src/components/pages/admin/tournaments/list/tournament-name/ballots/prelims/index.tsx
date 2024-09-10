import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { Ballot } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getBallots } from "@/core/debates/ballots";
import { GetBallotsProps } from "@/types/pairings/ballots";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useBallotsStore } from "@/stores/admin/debate/ballots";

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
        setBallots(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, tournament.tournamentId, is_elimination, setBallots]);

  if (!ballots) return <div>loading...</div>;

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search school..."
            className="w-72 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Room
            <span className="sr-only">Room</span>
          </Button>
        </form>
      </div>
      <div className="w-full bg-background">
        <Tabs defaultValue="round 1">
          <TabsList className="mx-5 mt-3">
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
          <TabsContent value="round 1">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
          <TabsContent value="round 2">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
          <TabsContent value="round 3">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Preliminaries;
