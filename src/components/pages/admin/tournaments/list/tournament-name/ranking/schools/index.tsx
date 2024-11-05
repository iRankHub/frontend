import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import {
  SchoolRanking,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentSchoolRanking } from "@/core/debates/rankings";
import { cn } from "@/lib/utils";

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

  const getUniqueKey = (school: SchoolRanking.AsObject, index: number) => {
    // Create a unique key using school name and other properties
    return `${school.schoolName}-${school.totalPoints}-${index}`;
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Schools Ranking
        </h3>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {schoolsRankings.slice(0, 3).map((school, index) => (
            <div
              key={getUniqueKey(school, index)}
              className={cn(
                "w-full",
                index === 2 && "sm:col-span-2 md:col-span-1"
              )}
            >
              <WinnerCard school={school} count={index + 1} />
            </div>
          ))}
        </div>
        <DataTable data={schoolsRankings.slice(3)} columns={columns} />
      </div>
    </div>
  );
}

interface WinnerCardProps {
  school: SchoolRanking.AsObject;
  count: number;
}

const WinnerCard = ({ school, count }: WinnerCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 flex gap-3 p-2">
        <div className="relative w-[73px] h-20 shrink-0 rounded-md overflow-hidden">
          <Image
            src={`/static/images/medal-${count}.png`}
            alt="user image"
            fill
            className={cn(
              "w-full h-full object-cover",
              count === 1 && "scale-125"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground font-semibold line-clamp-1">
            {school.schoolName}
          </h3>
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
      <div className="p-2 mt-auto">
        <Button size="sm" className="w-full hover:bg-primary">
          Bravo!
        </Button>
      </div>
    </Card>
  );
};

export default Schools;
