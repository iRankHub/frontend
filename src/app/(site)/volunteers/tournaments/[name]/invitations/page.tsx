'use client'
import { ContentLayout } from "@/components/layout/volunteer-panel/content-layout";
import Invitations from "@/components/pages/volunteers/tournaments/tournament-name/invitations/invitations";
import TournamentMenuWrapper from "@/components/pages/volunteers/tournaments/tournament-name/tournament-menu-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { Slash } from "lucide-react";
import React from "react";

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.VOLUNTEER]
);

function Page({ params }: Iparms) {
  const { name: tournamentName } = params;
  return (
    <ContentLayout title="format">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-2xl text-primary font-bold">{tournamentName}</h3>
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
                {tournamentName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TournamentMenuWrapper>
        <Invitations />
      </TournamentMenuWrapper>
    </ContentLayout>
  );
}

export default page;
