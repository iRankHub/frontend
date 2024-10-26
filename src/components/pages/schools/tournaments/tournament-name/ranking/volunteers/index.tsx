import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { rankings } from "@/components/tables/data/tasks";
import {
  StudentRanking,
  VolunteerTournamentRank,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  getTournamentStudentRanking,
  getTournamentVolunteerRanking,
} from "@/core/debates/rankings";
import { cn } from "@/lib/utils";

type Props = {
  tournamentId: number;
};

function Volunteers({ tournamentId }: Props) {
  const [volunteerRankings, setVolunteerRankings] = useState<
    VolunteerTournamentRank.AsObject[]
  >([]);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;

    const options = {
      token: user.token,
      tournament_id: tournamentId,
      page: 1,
      page_size: 500,
    };

    getTournamentVolunteerRanking(options)
      .then((res) => {
        setVolunteerRankings(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user, tournamentId]);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Speaker Ranking
        </h3>
        {/* <Button
          type="button"
          className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
        >
          Activate
          <span className="sr-only">Activate</span>
        </Button> */}
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {volunteerRankings.slice(0, 3).map((volunteer, index) => (
            <>
              {index < 2 ? (
                <WinnerCard
                  key={index}
                  volunteer={volunteer}
                  count={index + 1}
                />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto sm:mx-0.5">
                  <WinnerCard
                    key={index}
                    volunteer={volunteer}
                    count={index + 1}
                  />
                </div>
              )}
            </>
          ))}
        </div>

        <DataTable data={volunteerRankings.slice(3)} columns={columns} />
      </div>
    </div>
  );
}

interface WinnerCardProps {
  volunteer: VolunteerTournamentRank.AsObject;
  count: number;
}

const WinnerCard = ({ volunteer, count }: WinnerCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col w-full p-0 m-0 justify-between">
        <div className="flex-1 w-full flex gap-3 p-2 h-full">
          <div className="relative w-[66px] h-20 rounded-md overflow-hidden">
            <Image
              src="/static/images/mic-speech.jpg"
              alt="user image"
              fill
              className={cn("w-full h-full object-cover")}
            />
          </div>
          <div className="flex-1">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="flex flex-col">
                <h3 className="text-foreground font-semibold line-clamp-1">
                  {volunteer.volunteerName}
                </h3>
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src={`/static/images/medal-${count}.png`}
                  alt="medal first"
                  fill
                  className={cn(
                    "w-full h-full",
                    count === 1 && "scale-125"
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Prelims
                </span>
                <span className="text-foreground">
                  {volunteer.preliminaryRounds}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Elims
                </span>
                <span className="text-foreground">
                  {volunteer.eliminationRounds}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Points
                </span>
                <span className="text-foreground">
                  {parseInt(String(volunteer.averageRating))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full p-2">
          <Button size="sm" className="w-full hover:bg-primary">
            Bravo!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Volunteers;
