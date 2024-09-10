import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table-pairings";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { generatePairings, getPairings } from "@/core/debates/pairings";
import { GetPairingsProps } from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";
import { DataTableToolbar } from "./data-table-toolbar";

type PairingsTableProps = {
  tournamentId: number;
  totalRounds: number;
  is_elimination: boolean;
};

const PairingsTable: FC<PairingsTableProps> = ({
  tournamentId,
  totalRounds,
  is_elimination,
}) => {
  const [pairings, setPairings] = React.useState<
    Pairing.AsObject[] | undefined
  >(undefined);
  const { user } = useUserStore((state) => state);
  const { setOriginalData, setCurrentRound } = useTeamSwapStore();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const handleTabChange = (value: string) => {
    if (!user) return;
    const round = parseInt(value.split(" ")[1]);
    setCurrentRound(round);
    const options: GetPairingsProps = {
      is_elimination,
      round,
      token: user.token,
      tournament_id: tournamentId,
    };
    getPairings(options)
      .then((res) => {
        setOriginalData(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  useEffect(() => {
    if (!user) return;
    const options: GetPairingsProps = {
      is_elimination,
      round: 1,
      token: user.token,
      tournament_id: tournamentId,
    };

    setIsGenerating(true);
    getPairings(options)
      .then((res) => {
        setPairings(res);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsGenerating(false);
      });
  }, [tournamentId, user, is_elimination]);

  const handleGeneratePairings = () => {
    if (!user) return;
    const options: GetPairingsProps = {
      is_elimination,
      round: 1,
      token: user.token,
      tournament_id: tournamentId,
    };
    generatePairings(options)
      .then((res) => {
        setPairings(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  if (!pairings) {
    return <div>Loading</div>;
  }
  return (
    <div className="w-full rounded-md overflow-hidden">
      {pairings && pairings.length > 0 ? (
        <>
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
                {Array.from({ length: totalRounds }, (_, i) => i + 1).map(
                  (round) => (
                    <TabsTrigger
                      key={round}
                      value={`round ${round}`}
                      onClick={() => handleTabChange(`round ${round}`)}
                    >
                      Round {round}
                    </TabsTrigger>
                  )
                )}
              </TabsList>
              <TabsContent value="round 1">
                <DataTable data={pairings} columns={columns} />
              </TabsContent>
              <TabsContent value="round 2">
                <DataTable data={pairings} columns={columns} />
              </TabsContent>
              <TabsContent value="round 3">
                <DataTable data={pairings} columns={columns} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          There are no pairings for this tournament yet.
          <Button
            type="button"
            className="mt-5 bg-primary text-white"
            onClick={handleGeneratePairings}
          >
            Generate Pairings
            {isGenerating && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">Generate Pairings</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default PairingsTable;
