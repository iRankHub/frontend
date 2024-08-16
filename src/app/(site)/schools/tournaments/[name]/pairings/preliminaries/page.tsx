'use client'
import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
import Preliminaries from "@/components/pages/schools/tournaments/tournament-name/pairings/prelims";
import TournamentMenuWrapper from "@/components/pages/schools/tournaments/tournament-name/tournament-menu-wrapper";
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
  [Roles.SCHOOL]
);

function Page({ params }: Iparms) {
  const { name: routeName } = params;
  return (
    <ContentLayout title="format">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
        <h3 className="text-lg text-primary font-bold">Tournament Name</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/schools/dashboard"
                className="text-muted-foreground text-base"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/schools/tournaments"
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
                href="/schools/tournaments/list"
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
                {routeName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TournamentMenuWrapper>
        <Preliminaries />
      </TournamentMenuWrapper>
    </ContentLayout>
  );
}

export default page;
