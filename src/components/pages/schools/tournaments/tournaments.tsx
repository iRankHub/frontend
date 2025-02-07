"use client"

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { tournamentsList } from "@/core/tournament/list";
import { useUserStore } from "@/stores/auth/auth.store";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { DataTableToolbar } from "./data-table-toolbar";
import { columns } from "./columns";
import AppLoader from "@/lib/loader";

const PAGE_SIZE_COUNT = 20;

function Tournaments() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [tournaments, setTournaments] = useState<Tournament.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function to filter out duplicates
  const removeDuplicates = (existingData: Tournament.AsObject[], newData: Tournament.AsObject[]) => {
    const existingIds = new Set(existingData.map(t => t.tournamentId));
    return newData.filter(tournament => !existingIds.has(tournament.tournamentId));
  };

  const fetchTournamentsData = useCallback(async (pageToken: number, search?: string) => {
    if (!user) return 0;

    const options = {
      page_size: PAGE_SIZE_COUNT,
      page_token: pageToken,
      token: user.token,
      search: search?.trim()
    };

    try {
      const tournamentsRes = await tournamentsList(options);
      const uniqueTournaments = Array.from(
        new Map(tournamentsRes.tournamentsList.map(item => [item.tournamentId, item])).values()
      );

      if (pageToken === 0) {
        setTournaments(uniqueTournaments);
      } else {
        const newUniqueData = removeDuplicates(tournaments, uniqueTournaments);
        if (newUniqueData.length > 0) {
          setTournaments(prev => [...prev, ...newUniqueData]);
        }
      }

      return uniqueTournaments.length;
    } catch (err) {
      console.error(err);
      return 0;
    }
  }, [user, tournaments]);

  // Initial data fetch
  useEffect(() => {
    const fetchInitialData = async () => {
      if (initialLoading) {
        const count = await fetchTournamentsData(0, searchTerm);
        setHasMoreData(count >= PAGE_SIZE_COUNT);
        setInitialLoading(false);
      }
    };

    fetchInitialData();
  }, [fetchTournamentsData, searchTerm, initialLoading]);

  // Handle search events
  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const handleSearch = (e: CustomEvent<string>) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }

      searchTimeout = setTimeout(async () => {
        setSearchLoading(true);
        setSearchTerm(e.detail);
        setDefaultPageToken(0);
        const count = await fetchTournamentsData(0, e.detail);
        setHasMoreData(count >= PAGE_SIZE_COUNT);
        setSearchLoading(false);
      }, 500);
    };

    const handleReset = async () => {
      setSearchLoading(true);
      setSearchTerm("");
      setDefaultPageToken(0);
      const count = await fetchTournamentsData(0, "");
      setHasMoreData(count >= PAGE_SIZE_COUNT);
      setSearchLoading(false);
    };

    window.addEventListener('search-change', handleSearch as EventListener);
    window.addEventListener('reset-table', handleReset as EventListener);

    return () => {
      window.removeEventListener('search-change', handleSearch as EventListener);
      window.removeEventListener('reset-table', handleReset as EventListener);
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [fetchTournamentsData]);

  const loadMore = async () => {
    if (!user || loadMoreLoading) return;

    setLoadMoreLoading(true);
    const nextPage = defaultPageToken + 1;

    const count = await fetchTournamentsData(nextPage, searchTerm);

    setDefaultPageToken(nextPage);
    setHasMoreData(count >= PAGE_SIZE_COUNT);
    setLoadMoreLoading(false);
  };

  if (initialLoading) {
    return <AppLoader />;
  }

  if (!tournaments.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No Tournaments Available</h2>
          <p className="mb-2">We couldn&apos;t fetch any tournaments.</p>
          <p>This could be because there are no tournaments created yet or due to a system error.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <DataCardView
        data={tournaments}
        columns={columns}
        DataTableToolbar={(props) => (
          <DataTableToolbar
            {...props}
            searchTerm={searchTerm}
            isLoading={searchLoading || loadMoreLoading}
          />
        )}
        setTournaments={setTournaments}
        cardType="tournament"
      />

      {loadMoreLoading && (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}

      <div className="p-5 grid place-content-center">
        {tournaments.length >= PAGE_SIZE_COUNT && hasMoreData && (
          <Button
            type="button"
            size="sm"
            variant="link"
            className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
            onClick={loadMore}
            disabled={loadMoreLoading}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Tournaments;
