import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table-pairings";
import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import {
  generatePairingsElimination,
  generatePairingsPreliminaries,
  getPairings,
} from "@/core/debates/pairings";
import { GetPairingsProps } from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { useTeamSwapStore } from "@/stores/admin/debate/pairings/pairings.store";
import { DataTableToolbar } from "./data-table-toolbar";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

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
  const [isGenerating, setIsGenerating] = React.useState(false);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState<string>("round 1");

  const { originalData, setCurrentRound, setOriginalData, isSwapMade } =
    useTeamSwapStore((state) => ({
      originalData: state.originalData,
      setCurrentRound: state.setCurrentRound,
      setOriginalData: state.setOriginalData,
      isSwapMade: state.isSwapMade,
    }));

  const handleTabChange = (value: string) => {
    if (!user) return;
    if (isSwapMade) {
      toast({
        variant: "destructive",
        title: "Swaps made",
        description: "Swaps have been made. Please save the changes.",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

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
        setActiveTab(value);
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

    if (is_elimination) {
      generatePairingsElimination(options)
        .then((res) => {
          const round1_pairings = res.filter(
            (pairing) => pairing.roundNumber === 1
          );
          setPairings(round1_pairings);
        })
        .catch((err) => {
          toast({
            variant: "destructive",
            title: "Error",
            description: err.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        });
    } else {
      generatePairingsPreliminaries(options)
        .then((res) => {
          const round1_pairings = res.filter(
            (pairing) => pairing.roundNumber === 1
          );
          setPairings(round1_pairings);
        })
        .catch((err) => {
          console.log(err);
          console.error(err.message);
        });
    }
  };

  if (!pairings) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      {pairings && pairings.length > 0 ? (
        <>
          <div className="w-full bg-background">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="relative"
            >
              <TabsList className="mx-5 mt-3 absolute top-16">
                {Array.from({ length: totalRounds }, (_, i) => i + 1).map(
                  (round) => (
                    <TabsTrigger key={round} value={`round ${round}`}>
                      Round {round}
                    </TabsTrigger>
                  )
                )}
              </TabsList>
              {Array.from({ length: totalRounds }, (_, i) => i + 1).map(
                (round) => (
                  <TabsContent
                    key={round}
                    value={`round ${round}`}
                    className="m-0"
                  >
                    <DataTable
                      data={pairings}
                      columns={columns}
                      DataTableToolbar={DataTableToolbar}
                    />
                  </TabsContent>
                )
              )}
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
