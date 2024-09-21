import React, { FC, useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [pairings, setPairings] = useState<Record<number, Pairing.AsObject[]>>({});
  const [loadingRounds, setLoadingRounds] = useState<Record<number, boolean>>({});
  const { user } = useUserStore((state) => state);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("round 1");

  const { originalData, setCurrentRound, setOriginalData, isSwapMade } =
    useTeamSwapStore((state) => ({
      originalData: state.originalData,
      setCurrentRound: state.setCurrentRound,
      setOriginalData: state.setOriginalData,
      isSwapMade: state.isSwapMade,
    }));

  const fetchPairings = async (round: number) => {
    if (!user) return;
    setLoadingRounds(prev => ({ ...prev, [round]: true }));
    const options: GetPairingsProps = {
      is_elimination,
      round,
      token: user.token,
      tournament_id: tournamentId,
    };
    try {
      const res = await getPairings(options);
      setPairings((prevPairings) => ({
        ...prevPairings,
        [round]: res,
      }));
      if (is_elimination && round === 1) {
        setOriginalData(res);
      } else {
        setOriginalData(res);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        // Toast logic here if needed
      }
    } finally {
      setLoadingRounds(prev => ({ ...prev, [round]: false }));
    }
  };

  const handleTabChange = (value: string) => {
    if (!user) return;
    if (isSwapMade) {
      toast({
        variant: "destructive",
        title: "Swaps made",
        description: "Swaps have been made. Please save the changes.",
        action: (
          <ToastAction
            altText="Close"
            className="bg-white text-primary p-1 rounded-md"
          >
            Close
          </ToastAction>
        ),
      });
      return;
    }

    const round = parseInt(value.split(" ")[1]);
    setCurrentRound(round);
    setActiveTab(value);
    if (pairings[round] === undefined && !loadingRounds[round]) {
      fetchPairings(round);
    }
  };

  useEffect(() => {
    fetchPairings(1);
  }, [tournamentId, user, is_elimination]);

  const handleGeneratePairings = async (round: number) => {
    if (!user) return;
    setIsGenerating(true);
    const options: GetPairingsProps = {
      is_elimination,
      round,
      token: user.token,
      tournament_id: tournamentId,
    };

    try {
      const res = is_elimination
        ? await generatePairingsElimination(options)
        : await generatePairingsPreliminaries(options);
      const roundPairings = res.filter(
        (pairing) => pairing.roundNumber === round
      );
      setPairings((prevPairings) => ({
        ...prevPairings,
        [round]: roundPairings,
      }));
    } catch (err) {
      if (err instanceof Error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message,
          action: (
            <ToastAction
              altText="Close"
              className="bg-white text-primary p-1 rounded-md"
            >
              Close
            </ToastAction>
          ),
        });
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const renderTabContent = (round: number) => {
    if (loadingRounds[round]) {
      return (
        <div className="flex justify-center items-center h-96 mt-40">
          <Icons.spinner className="h-8 w-8 animate-spin" />
        </div>
      );
    }

    if (!pairings[round] || pairings[round].length === 0) {
      return (
        <>
          <div className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-3 bg-brown p-5 py-4">
              <h3 className="text-white">Pairings</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-96 mt-40">
            <Image
              src="/static/images/debaters.png"
              alt="No data"
              width={300}
              height={300}
            />
            <h3 className="text-lg text-foreground font-medium my-5">There are no pairings for this round!</h3>
            <Button
              type="button"
              className="bg-primary text-white"
              onClick={() => handleGeneratePairings(round)}
              disabled={isGenerating}
            >
              Generate Pairings
              {isGenerating && (
                <Icons.spinner
                  className="ml-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">Generate Pairings</span>
            </Button>
          </div>
        </>
      );
    }

    return (
      <DataTable
        data={pairings[round]}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    );
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
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
          {Array.from({ length: totalRounds }, (_, i) => i + 1).map((round) => (
            <TabsContent key={round} value={`round ${round}`} className="m-0">
              {renderTabContent(round)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PairingsTable;