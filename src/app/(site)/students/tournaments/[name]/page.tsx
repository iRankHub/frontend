"use client";
import { ContentLayout } from "@/components/layout/students-panel/content-layout";
import TournamentUpdateForm from "@/components/pages/students/tournaments/tournament-name/tournament-update-form";
import TournamentMenuWrapper from "@/components/pages/students/tournaments/tournament-name/tournament-menu-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { Slash } from "lucide-react";
import React, { useEffect } from "react";
import { getTournament } from "@/core/tournament/list";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.STUDENT]
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
                    href="/admin/dashboard"
                    className="text-muted-foreground text-base"
                  >
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="-rotate-12" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/admin/tournaments"
                    className="text-muted-foreground text-base"
                  >
                    Tournament
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="-rotate-12" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/admin/tournaments/list"
                    className="text-muted-foreground text-base"
                  >
                    List
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
            <TournamentUpdateForm tournament={tournament} />
          </TournamentMenuWrapper>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ContentLayout>
  );
}

export default page;
