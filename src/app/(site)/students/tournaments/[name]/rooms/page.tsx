"use client";
import { ContentLayout } from "@/components/layout/students-panel/content-layout";
import Rooms from "@/components/pages/students/tournaments/tournament-name/rooms/room";
import TournamentMenuWrapper from "@/components/pages/students/tournaments/tournament-name/tournament-menu-wrapper";
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

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.STUDENT]
);

function Page({ params }: Iparms) {
  const { name: tourn_id } = params;
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

  if (!tournament) return <div>loading...</div>;
  return (
    <ContentLayout title="format">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-lg text-primary font-bold">{tournament?.name}</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/students/dashboard"
                className="text-muted-foreground text-base"
              >
                Student
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/students/tournaments/list"
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
        <Rooms tournament_id={tournament.tournamentId} />
      </TournamentMenuWrapper>
    </ContentLayout>
  );
}

export default page;
