import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import TournamentForm from "./tournament-form";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Leagues from "./Leagues";
import LeaguesMobile from "./leagues-mobile";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentLeagues } from "@/core/tournament/leagues";
import { League } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { getVolunteersAndAdmins } from "@/core/users/users";
import {
  GetVolunteersAndAdminsResponse,
  UserSummary,
} from "@/lib/grpc/proto/user_management/users_pb";

function CreateTournament() {
  const [leagues, setLeagues] = React.useState<League.AsObject[]>([]);
  const [coordinators, setCoordinators] = React.useState<
    UserSummary.AsObject[]
  >([]);
  const [selectedLeague, setSelectedLeague] =
    React.useState<League.AsObject | null>(null);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 100,
      page_token: 0,
      token: user.token,
    };
    tournamentLeagues({ ...data })
      .then((res) => {
        setLeagues(res.leaguesList);
      })
      .catch((err) => {
        console.error(err.message);
      });

    const options = {
      pageSize: 100,
      page: 1,
      token: user.token,
    };

    getVolunteersAndAdmins({ ...options }).then((res) => {
      setCoordinators(res.usersList);
    });
  }, [user]);

  if (!leagues || !coordinators) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-7 flex gap-5 relative">
      <Leagues
        leagues={leagues}
        setLeagues={setLeagues}
        setSelectedLeague={setSelectedLeague}
        selectedLeague={selectedLeague}
      />
      <div className="bg-background w-full min-h-full rounded-md border border-gray-200 pb-4">
        <TournamentForm selectedLeague={selectedLeague} coordinators={coordinators} />
      </div>
      <Sheet>
        <SheetTrigger>
          <Button
            type="button"
            size={"icon"}
            className="flex xl:hidden fixed right-5 bottom-5 bg-primary rounded-full cursor-pointer z-50 hover:bg-primary"
          >
            <Icons.add className="text-white w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </SheetTrigger>
        <LeaguesMobile
          leagues={leagues}
          setSelectedLeague={setSelectedLeague}
          selectedLeague={selectedLeague}
        />
      </Sheet>
    </div>
  );
}

export default CreateTournament;
