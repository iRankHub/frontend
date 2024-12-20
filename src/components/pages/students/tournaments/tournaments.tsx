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

function Tournaments() {
  const [isLoading, setIsLoading] = useState(true);
  const [tournaments, setTournaments] = useState<Tournament.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchTournaments = tournamentsList({
      page_size: 20,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchTournaments])
      .then(([tournamentsRes]) => {
        setTournaments(tournamentsRes.tournamentsList);
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
      page_size: 20,
      page_token: defaultPageToken + 1,
      token: user.token,
    };
    await tournamentsList({ ...data })
      .then((res) => {
        setTournaments((prev) => [...prev, ...res.tournamentsList]);
        setDefaultPageToken((prev) => prev + 1);
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
        {tournaments.length >= 20 && (
          <Button
            type="button"
            size={"sm"}
            variant={"link"}
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