'use client'
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import TournamentForm from "./tournament-form";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Leagues from "./Leagues";
import LeaguesMobile from "./leagues-mobile";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentLeagues } from "@/core/tournament/leagues";
import { League } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { getVolunteersAndAdmins } from "@/core/users/users";
import {
  UserSummary,
} from "@/lib/grpc/proto/user_management/users_pb";
import AppLoader from "@/lib/loader";

function CreateTournament() {
  const [leagues, setLeagues] = useState<League.AsObject[]>([]);
  const [coordinators, setCoordinators] = useState<UserSummary.AsObject[]>([]);
  const [selectedLeague, setSelectedLeague] = useState<League.AsObject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchLeagues = tournamentLeagues({
      page_size: 100,
      page_token: 0,
      token: user.token,
    });

    const fetchCoordinators = getVolunteersAndAdmins({
      pageSize: 100,
      page: 1,
      token: user.token,
    });

    Promise.all([fetchLeagues, fetchCoordinators])
      .then(([leaguesRes, coordinatorsRes]) => {
        setLeagues(leaguesRes.leaguesList);
        setCoordinators(coordinatorsRes.usersList);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!leagues.length || !coordinators.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No Information Available</h2>
          <p className="mb-2">We couldn&apos;t fetch the necessary information to create a tournament.</p>
          <p>This could be because of a system error. Please try again later.</p>
        </div>
      </div>
    );
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