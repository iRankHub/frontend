"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentLeagues } from "@/core/tournament/leagues";
import { useLeaguesStore } from "@/stores/admin/tournaments/leagues.store";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import AppLoader from "@/lib/loader";

function Leagues() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore((state) => state);
  const { setLeagues, leagues } = useLeaguesStore((state) => state);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchLeagues = tournamentLeagues({
      page_size: 10,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchLeagues])
      .then(([leaguesRes]) => {
        setLeagues(leaguesRes.leaguesList);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setLeagues]);

  const loadMoreLeagues = () => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: leagues.length,
      token: user.token,
    };
    setLoadMoreLoading(true);
    tournamentLeagues({ ...data })
      .then((res) => {
        setLeagues([...leagues, ...res.leaguesList]);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoadMoreLoading(false);
      });
  };

  if (isLoading) {
    return <AppLoader />;
  }

  if (!leagues.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No Leagues Available</h2>
          <p className="mb-2">We couldn&apos;t fetch any tournament leagues.</p>
          <p>This could be because there are no leagues created yet or due to a system error.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <DataCardView
        data={leagues}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
        setLeagues={setLeagues}
        cardType="league"
      />
      {loadMoreLoading && (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}
      {leagues.length >= 10 && (
        <div className="p-5">
          <Button
            type="button"
            size={"sm"}
            variant={"link"}
            className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
            onClick={loadMoreLeagues}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Leagues;