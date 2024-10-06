import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import {
  SchoolRanking,
  StudentRanking,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentSchoolRanking } from "@/core/debates/rankings";

type Props = {
  tournamentId: number;
};

function Schools({ tournamentId }: Props) {
  const [schoolsRankings, setSchoolsRankings] = useState<
    SchoolRanking.AsObject[]
  >([]);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    if (!user) return;

    const options = {
      token: user.token,
      tournament_id: tournamentId,
      page: 1,
      page_size: 10,
    };

    getTournamentSchoolRanking(options)
      .then((res) => {
        setSchoolsRankings(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user, tournamentId]);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium">Schools Ranking</h3>
        <Button
          type="button"
          className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
        >
          Activate
          <span className="sr-only">Activate</span>
        </Button>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {schoolsRankings.slice(0, 3).map((school, index) => (
            <WinnerCard key={index} school={school} />
          ))}
        </div>
        <DataTable data={schoolsRankings.slice(3)} columns={columns} />
      </div>
    </div>
  );
}

interface WinnerCardProps {
  school: SchoolRanking.AsObject;
}

const WinnerCard = ({ school }: WinnerCardProps) => {
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmgv5azym/image/upload/v1701766208/samples/smile.jpg"
            alt="user image"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">
                {school.schoolName}
              </h3>
            </div>
            <div className="w-8 h-8 relative">
              <Image
                src="/static/images/medal-1.png"
                alt="medal first"
                fill
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{school.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{school.totalWins}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Rank</span>
              <span className="text-foreground">
                {parseInt(String(school.averageRank))}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 w-full">
        <Button size="sm" className="w-full hover:bg-primary">
          Bravo!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Schools;
