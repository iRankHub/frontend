"use client";

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import Expenses from "@/components/pages/admin/logistics/billings/expenses";
import MenuWrapper from "@/components/pages/admin/logistics/menu-wrapper";
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
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect, useState } from 'react'
import AppLoader from "@/lib/loader";
import { getTournament } from "@/core/tournament/list";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.ADMIN]
);

function ExpensesPage({ params }: Iparms) {
  const { name: tourn_id } = params;
  const { user } = useUserStore((state) => state);
  const [tournament, setTournament] = useState<Tournament.AsObject | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const {toast} = useToast();

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
    <ContentLayout title="users">
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
                Expenses
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <MenuWrapper>
        <Expenses tournament_id={tourn_id} />
      </MenuWrapper>
    </ContentLayout>
  );
}

export default ExpensesPage;
