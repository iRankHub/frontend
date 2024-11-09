"use client";

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import Billings from "@/components/pages/admin/logistics/billings";
import MenuWrapper from "@/components/pages/admin/logistics/menu-wrapper";
import Users from "@/components/pages/admin/users";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  getTournamentBillings,
  TournamentBillingsProps,
} from "@/core/debates/billings/billings";
import { getTournament } from "@/core/tournament/list";
import {
  ListRegistrationsResponse,
  Tournament,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import AppLoader from "@/lib/loader";
import { useRegistrationStore } from "@/stores/admin/tournaments/billings.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.ADMIN]
);

function Page({ params }: Iparms) {
  const { name: tourn_id } = params;
  const { user } = useUserStore((state) => state);
  const [tournament, setTournament] = useState<Tournament.AsObject | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const { setRegistrations, setTournament_id } = useRegistrationStore((state) => state);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const data: GetTournamentType = {
      tournament_id: Number(tourn_id) || 0,
      token: user.token,
    };

    const options: TournamentBillingsProps = {
      page_size: 1,
      page_token: 0,
      token: user.token,
      tournament_id: Number(tourn_id) || 0,
    };

    const fetchTournament = getTournament({ ...data });
    const fetchRooms = getTournamentBillings(options);

    Promise.all([fetchTournament, fetchRooms])
      .then(([tournamentRes, fetchRooms]) => {
        setTournament(tournamentRes.tournament);
        setRegistrations(fetchRooms.registrationsList);
        setTournament_id(options.tournament_id)
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, tourn_id, setRegistrations, setTournament_id]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!tournament) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-2xl text-primary font-bold">Billings</h3>
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
              <BreadcrumbPage className="text-primary text-base">
                Billings
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <MenuWrapper>
        <Billings />
      </MenuWrapper>
    </>
  );
}

export default page;
