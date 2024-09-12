import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/students/data-table-pairings";
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

  const { originalData } = useTeamSwapStore((state) => ({
    originalData: state.originalData,
  }));

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


  if (!pairings) {
    return <div className="w-full h-full grid place-content-center mx-auto">Loading...</div>;
  }

  const handleUpdate = () => {};
  return (
    <div className="w-full rounded-md overflow-hidden">
      {pairings && pairings.length > 0 ? (
        <>
          {/* <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown"> */}
            {/* <form action="#" className="flex items-center gap-3">
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
            </form> */}
            {/* <h3 className="text-xl text-white">Pairings</h3> */}
          {/* </div> */}
          <div className="w-full bg-background">
            <Tabs defaultValue="round 1" className="relative">
              <TabsList className="mx-5 mt-3 absolute top-16">
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
              <TabsContent value="round 1" className="m-0">
                <DataTable data={pairings} columns={columns} DataTableToolbar={DataTableToolbar} />
              </TabsContent>
              <TabsContent value="round 2" className="m-0">
                <DataTable data={pairings} columns={columns} DataTableToolbar={DataTableToolbar} />
              </TabsContent>
              <TabsContent value="round 3" className="m-0">
                <DataTable data={pairings} columns={columns} DataTableToolbar={DataTableToolbar} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          Pairings for this round have not been released yet.
        </div>
      )}
    </div>
  );
};

export default PairingsTable;
