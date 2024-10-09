"use client";
import { ContentLayout } from "@/components/layout/volunteer-panel/content-layout";
import Judges from "@/components/pages/volunteers/tournaments/tournament-name/judges";
import TournamentMenuWrapper from "@/components/pages/volunteers/tournaments/tournament-name/tournament-menu-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTournamentJudges } from "@/core/debates/judges";
import { getTournament } from "@/core/tournament/list";
import { Judge } from "@/lib/grpc/proto/debate_management/debate_pb";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import AppLoader from "@/lib/loader";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { GetTournamentJudgesProps } from "@/types/pairings";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect } from "react";

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.VOLUNTEER]
);

function Page({ params }: Iparms) {
  const { name: tourn_id } = params;
  const { user } = useUserStore((state) => state);
  const [tournament, setTournament] = React.useState<
    Tournament.AsObject | undefined
  >(undefined);
  const [judges, setJudges] = React.useState<Judge.AsObject[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const data: GetTournamentType = {
      tournament_id: Number(tourn_id) || 0,
      token: user.token,
    };

    const options: GetTournamentJudgesProps = {
      token: user.token,
      tournament_id: Number(tourn_id) || 0,
    };

    const fetchTournament = getTournament({ ...data });
    const fetchJudges = getTournamentJudges(options);

    Promise.all([fetchTournament, fetchJudges])
      .then(([tournamentRes, judgesRes]) => {
        setTournament(tournamentRes.tournament);
        setJudges(judgesRes);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, tourn_id]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!tournament) {
    return (
      <ContentLayout title="format">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Tournament Not Found
            </h2>
            <p className="mb-2">
              We couldn&apos;t fetch the tournament details.
            </p>
            <p>
              This could be because the tournament doesn&apos;t exist or due to
              a system error.
            </p>
          </div>
        </div>
      </ContentLayout>
    );
  }
  return (
    <ContentLayout title="format">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-lg text-primary font-bold">{tournament?.name}</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/volunteers/dashboard"
                className="text-muted-foreground text-base"
              >
                Volunteer
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/volunteers/tournaments"
                className="text-muted-foreground text-base"
              >
                Tournament
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                {tournament?.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TournamentMenuWrapper>
        <Judges judges={judges} />
      </TournamentMenuWrapper>
    </ContentLayout>
  );
}

export default page;
