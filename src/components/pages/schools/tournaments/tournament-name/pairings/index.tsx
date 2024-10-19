import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/students/data-table-pairings";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { getPairings } from "@/core/debates/pairings";
import { GetPairingsProps } from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";
import { DataTableToolbar } from "./data-table-toolbar";
import Image from "next/image";

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
    return (
      <div className="w-full h-full grid place-content-center mx-auto">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      {pairings && pairings.length > 0 ? (
        <>
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
                <DataTable
                  data={pairings}
                  columns={columns}
                  DataTableToolbar={DataTableToolbar}
                />
              </TabsContent>
              <TabsContent value="round 2" className="m-0">
                <DataTable
                  data={pairings}
                  columns={columns}
                  DataTableToolbar={DataTableToolbar}
                />
              </TabsContent>
              <TabsContent value="round 3" className="m-0">
                <DataTable
                  data={pairings}
                  columns={columns}
                  DataTableToolbar={DataTableToolbar}
                />
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4 w-full">
            <h3 className="text-white">Pairings</h3>
          </div>
          <div className="flex flex-col items-center justify-center mt-32">
            <Image
              src="/static/images/debaters.png"
              alt="No data"
              width={300}
              height={300}
            />
            <h3 className="text-lg text-foreground font-medium my-5">
              There are no pairings for this round!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default PairingsTable;
