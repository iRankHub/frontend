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
  const [schoolsRankings, setSchoolsRankings] = useState<SchoolRanking.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;
  const { user } = useUserStore((state) => state);

  const fetchSchools = async (page: number) => {
    if (!user || isLoading) return;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentSchoolRanking(options);

      if (!res || !res.rankingsList) {
        return;
      }

      setTotalCount(res.totalCount || 0);

      setSchoolsRankings(prev => {
        if (page === 1) {
          return res.rankingsList;
        } else {
          // Keep top 3 from first page and append new data
          const topSchools = prev.slice(0, 3);
          const newSchools = res.rankingsList.filter(school =>
            !prev.some(p => p.schoolName === school.schoolName)
          );
          return [...topSchools, ...prev.slice(3), ...newSchools];
        }
      });

    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setSchoolsRankings([]);
    fetchSchools(1);
  }, [user, tournamentId]);

  const handleLoadMore = () => {
    if (!isLoading && schoolsRankings.length < totalCount) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchSchools(nextPage);
    }
  };

  const getUniqueKey = (school: SchoolRanking.AsObject, index: number) => {
    return `${school.schoolName}-${school.totalPoints}-${index}`;
  };

  // If no schools data yet, show loading or empty state
  if (schoolsRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Schools Ranking
          </h3>
        </div>
        <div className="w-full bg-background p-8 px-5 text-center">
          {isLoading ? "Loading..." : "No schools data available."}
        </div>
      </div>
    );
  }

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
        <DataTable
          data={schoolsRankings.slice(3)}
          columns={columns}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={schoolsRankings.length < totalCount}
          onLoadMore={handleLoadMore}
        />
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
