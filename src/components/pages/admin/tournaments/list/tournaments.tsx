import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { tournamentsList } from "@/core/tournament/list";
import { useUserStore } from "@/stores/auth/auth.store";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { DataTableToolbar } from "./data-table-toolbar";
import { columns } from "./columns";
import AppLoader from "@/lib/loader";

const PAGE_SIZE_COUNT = 20;

function Tournaments() {
  const [isLoading, setIsLoading] = useState(true);
  const [tournaments, setTournaments] = useState<Tournament.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Helper function to filter out duplicates
  const removeDuplicates = (existingData: Tournament.AsObject[], newData: Tournament.AsObject[]) => {
    const existingIds = new Set(existingData.map(t => t.tournamentId));
    return newData.filter(tournament => !existingIds.has(tournament.tournamentId));
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchTournaments = tournamentsList({
      page_size: PAGE_SIZE_COUNT,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchTournaments])
      .then(([tournamentsRes]) => {
        const uniqueTournaments = Array.from(
          new Map(tournamentsRes.tournamentsList.map(item => [item.tournamentId, item])).values()
        );
        setTournaments(uniqueTournaments);

        if (uniqueTournaments.length < PAGE_SIZE_COUNT) {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  const loadMore = async () => {
    if (!user) return;
    setLoadMoreLoading(true);

    const data = {
      page_size: PAGE_SIZE_COUNT,
      page_token: defaultPageToken + 1,
      token: user.token,
    };

    await tournamentsList({ ...data })
      .then((res) => {
        if (res.tournamentsList.length > 0) {
          const newUniqueData = removeDuplicates(tournaments, res.tournamentsList);

          if (newUniqueData.length > 0) {
            setTournaments(prev => [...prev, ...newUniqueData]);
            setDefaultPageToken(prev => prev + 1);
          }

          // Check if we should load more
          if (res.tournamentsList.length < PAGE_SIZE_COUNT || newUniqueData.length === 0) {
            setHasMoreData(false);
          }
        } else {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error("Error loading more tournaments:", err.message);
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
        data={tournaments}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
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
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Tournaments;
