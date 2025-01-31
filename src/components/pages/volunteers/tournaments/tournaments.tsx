import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { tournamentsList } from "@/core/tournament/list";
import { useUserStore } from "@/stores/auth/auth.store";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";

function Tournaments({ }) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [tournaments, setTournaments] = useState<Tournament.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState<number>(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 20,
      page_token: 0,
      token: user.token,
    };
    tournamentsList({ ...data })
      .then((res) => {
        setTournaments(res.tournamentsList);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, [user]);

  const loadMore = async () => {
    if (!user) return
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
        {tournaments.length > 20 && (
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
    </div >
  );
}

export default Tournaments;
