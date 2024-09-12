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

type Props = {
  is_elimination: boolean;
  tournament: Tournament.AsObject;
};

function Elimination({ is_elimination, tournament }: Props) {
  const [ballots, setBallots] = useState<Ballot.AsObject[] | undefined>(
    undefined
  );
  const { user } = useUserStore((state) => state);

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
  }, [user, tournament.tournamentId, is_elimination]);

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
        <Tabs defaultValue="round 1" className="relative">
        <TabsList className="mx-5 mt-3 absolute top-16">
            <TabsTrigger value="round 1" className="px-5" onClick={() => handleTabChange(1)}>
              Quater-Finals
            </TabsTrigger>
            <TabsTrigger value="round 2" className="px-5" onClick={() => handleTabChange(2)}>
              Semi-Finals
            </TabsTrigger>
            <TabsTrigger value="round 3" className="px-5" onClick={() => handleTabChange(3)}>
              Finals
            </TabsTrigger>
          </TabsList>
          <TabsContent value="round 1" className="m-0">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
          <TabsContent value="round 2" className="m-0">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
          <TabsContent value="round 3" className="m-0">
            <DataTable data={ballots} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Elimination;
