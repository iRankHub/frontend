"use client"
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

const PAGE_SIZE_COUNT = 20;

function Leagues() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore((state) => state);
  const { setLeagues, leagues } = useLeaguesStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Helper function to filter out duplicates
  const removeDuplicates = (existingData: any[], newData: any[]) => {
    const existingIds = new Set(existingData.map(l => l.leagueId));
    return newData.filter(league => !existingIds.has(league.leagueId));
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchLeagues = tournamentLeagues({
      page_size: PAGE_SIZE_COUNT,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchLeagues])
      .then(([leaguesRes]) => {
        const uniqueLeagues = Array.from(
          new Map(leaguesRes.leaguesList.map(item => [item.leagueId, item])).values()
        );
        setLeagues(uniqueLeagues);

        if (uniqueLeagues.length < PAGE_SIZE_COUNT) {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setLeagues]);

  const loadMore = async () => {
    if (!user) return;
    setLoadMoreLoading(true);

    const data = {
      page_size: PAGE_SIZE_COUNT,
      page_token: defaultPageToken + 1,
      token: user.token,
    };

    await tournamentLeagues({ ...data })
      .then((res) => {
        if (res.leaguesList.length > 0) {
          const newUniqueData = removeDuplicates(leagues, res.leaguesList);

          if (newUniqueData.length > 0) {
            setLeagues([...leagues, ...newUniqueData]);
            setDefaultPageToken(prev => prev + 1);
          }

          if (res.leaguesList.length < PAGE_SIZE_COUNT || newUniqueData.length === 0) {
            setHasMoreData(false);
          }
        } else {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error("Error loading more leagues:", err.message);
      })
      .finally(() => {
        setLoadMoreLoading(false);
      });
  };

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <DataCardView
        data={leagues}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
        cardType="league"
      />
      
      {loadMoreLoading && (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}
      
      <div className="p-5">
        {leagues.length >= PAGE_SIZE_COUNT && hasMoreData && (
          <Button
            type="button"
            size="sm"
            variant="link"
            className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
            onClick={loadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Leagues;