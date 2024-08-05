import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";
import TournamentForm from "./tournament-form";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Leagues from "./Leagues";
import LeaguesMobile from "./leagues-mobile";

function CreateTournament() {
  return (
    <div className="mt-7 grid grid-cols-3 gap-5 relative">
      <Leagues />
      <div className="col-span-3 lg:col-span-2 bg-background min-h-full rounded-md border border-gray-200 pb-4">
        <TournamentForm />
      </div>
      <Sheet>
        <SheetTrigger>
          <Button
            type="button"
            size={"icon"}
            className="flex lg:hidden fixed right-5 bottom-5 bg-primary rounded-full cursor-pointer z-50 hover:bg-primary"
          >
            <Icons.add className="text-white w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </SheetTrigger>
        <LeaguesMobile />
      </Sheet>
    </div>
  );
}

export default CreateTournament;
