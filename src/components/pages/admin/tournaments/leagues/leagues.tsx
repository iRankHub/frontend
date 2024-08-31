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

function Leagues({}) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const { user } = useUserStore((state) => state);
  const { setLeagues, leagues } = useLeaguesStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentLeagues({ ...data })
      .then((res) => {
        setLeagues(res.leaguesList);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, [user, setLeagues]);
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted">
      {pageLoading ? (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : leagues.length ? (
        <DataCardView
          data={leagues}
          columns={columns}
          DataTableToolbar={DataTableToolbar}
          setLeagues={setLeagues}
          cardType="league"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          <p className="text-darkBlue text-lg font-semibold">
            No formats available
          </p>
        </div>
      )}
      {leagues.length > 0 && (
        <Button
          type="button"
          size={"sm"}
          variant={"link"}
          className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default Leagues;
