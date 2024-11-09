"use client";
import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import PairingsTable from "@/components/pages/admin/tournaments/list/tournament-name/pairings";
import TournamentMenuWrapper from "@/components/pages/admin/tournaments/list/tournament-name/tournament-menu-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/components/ui/use-toast";
import { getTournament } from "@/core/tournament/list";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";
import AppLoader from "@/lib/loader";

const Page = withAuth(
  ({ params }: Iparms) => {
    return <TournamentPreliminaryRoundsPage params={params} />;
  },
  [Roles.ADMIN]
);

function TournamentPreliminaryRoundsPage({ params }: Iparms) {
  const { name: tourn_id } = params;
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [tournament, setTournament] = useState<Tournament.AsObject | undefined>(undefined);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const data: GetTournamentType = {
      tournament_id: Number(tourn_id) || 0,
      token: user.token,
    };

    getTournament({ ...data })
      .then((res) => {
        setTournament(res.tournament);
      })
      .catch((err) => {
        console.error(err.message);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch tournament details. Please try again.",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, tourn_id, toast]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!tournament) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Tournament Not Found</h2>
            <p className="mb-2">We couldn&apos;t fetch the tournament details.</p>
            <p>This could be because the tournament doesn&apos;t exist or due to a system error.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
        <h3 className="text-lg text-primary font-bold">{tournament.name}</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/dashboard" className="text-muted-foreground text-base">
                Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/tournaments/list" className="text-muted-foreground text-base">
                Tournament
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                {tournament.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TournamentMenuWrapper>
        <PairingsTable
          tournamentId={Number(tournament.tournamentId)}
          totalRounds={tournament.numberOfPreliminaryRounds || 0}
          is_elimination={false}
        />
      </TournamentMenuWrapper>
    </>
  );
}

export default Page;
