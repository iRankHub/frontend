"use client";
import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
import Schools from "@/components/pages/schools/tournaments/tournament-name/ranking/schools";
import TournamentMenuWrapper from "@/components/pages/schools/tournaments/tournament-name/tournament-menu-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTournament } from "@/core/tournament/list";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect } from "react";

export const runtime = 'edge';

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.SCHOOL]
);

function Page({ params }: Iparms) {
  const { name: tourn_id } = params;
  // const formattedRouteName = routeName.replace(/%20/g, " ");
  const { user } = useUserStore((state) => state);
  const [tournament, setTournament] = React.useState<
    Tournament.AsObject | undefined
  >(undefined);

  useEffect(() => {
    if (!user) return;
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
      });
  }, [user, tourn_id]);
  return (
    <ContentLayout title="format">
      {tournament ? (
        <>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
            <h3 className="text-lg text-primary font-bold">
              {tournament.name}
            </h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/schools/dashboard"
                    className="text-muted-foreground text-base"
                  >
                    Schools
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="-rotate-12" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/schools/tournaments/list"
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
            <Schools tournamentId={Number(tournament?.tournamentId)} />
          </TournamentMenuWrapper>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ContentLayout>
  );
}

export default page;
