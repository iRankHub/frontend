import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TournamentCard from "./tournament-card";
import { useEffect, useState } from "react";
import { tournamentsList } from "@/core/tournament/list";
import { useUserStore } from "@/stores/auth/auth.store";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";

function Tournaments({}) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [tournaments, setTournaments] = useState<Tournament.AsObject[]>([]);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
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
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name..."
            className="w-72 h-8"
          />
          <Button
            type="submit"
            className="border border-dashed border-white gap-2 h-8 font-semibold hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            League
          </Button>
          <Button
            type="submit"
            className="border border-dashed border-white gap-2 h-8 font-semibold hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Coordinator
          </Button>
        </form>
      </div>
      <div className="w-full bg-background p-8 grid">
        {pageLoading ? (
          <div className="flex items-center justify-center w-full h-96">
            <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : tournaments.length ? (
          tournaments.map((tournament, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            >
              <TournamentCard
                tournament={tournament}
                setTournaments={setTournaments}
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-96">
            <p className="text-darkBlue text-lg font-semibold">
              No tournaments available
            </p>
          </div>
        )}

        {tournaments.length > 0 && (
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
    </div>
  );
}

export default Tournaments;
