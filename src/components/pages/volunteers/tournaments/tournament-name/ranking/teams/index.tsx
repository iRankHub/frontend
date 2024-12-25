import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { TeamRanking } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentTeamsRanking } from "@/core/debates/rankings";
import { cn } from "@/lib/utils";

type Props = {
  tournamentId: number;
};

function TeamsRanking({ tournamentId }: Props) {
  const [teamsRankings, setTeamsRankings] = useState<TeamRanking.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;
  const { user } = useUserStore((state) => state);

  const fetchTeams = async (page: number) => {
    if (!user || isLoading) return;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentTeamsRanking(options);

      if (!res || !res.rankingsList) {
        return;
      }

      setTotalCount(res.totalCount || 0);

      setTeamsRankings(prev => {
        if (page === 1) {
          return res.rankingsList;
        } else {
          // Keep top 3 from first page and append new data
          const topTeams = prev.slice(0, 3);
          const newTeams = res.rankingsList.filter(team =>
            !prev.some(p => p.teamId === team.teamId)
          );
          return [...topTeams, ...prev.slice(3), ...newTeams];
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
    setTeamsRankings([]);
    fetchTeams(1);
  }, [user, tournamentId]);

  const handleLoadMore = () => {
    if (!isLoading && teamsRankings.length < totalCount) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchTeams(nextPage);
    }
  };

  // If no teams data yet, show loading or empty state
  if (teamsRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Team Ranking
          </h3>
        </div>
        <div className="w-full bg-background p-8 px-5 text-center">
          {isLoading ? "Loading..." : "No teams data available."}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Team Ranking
        </h3>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {teamsRankings.slice(0, 3).map((team, index) => (
            <React.Fragment key={team.teamId || index}>
              {index < 2 ? (
                <WinnerCard speaker={team} count={index + 1} />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto">
                  <WinnerCard speaker={team} count={index + 1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <DataTable
          data={teamsRankings.slice(3)}
          columns={columns}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={teamsRankings.length < totalCount}
          onLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
}

interface WinnerCardProps {
  speaker: TeamRanking.AsObject;
  count: number;
}

// Utility function to extract school name
const extractSchoolName = (schoolNamesList: string[] | undefined): string => {
  if (Array.isArray(schoolNamesList) && schoolNamesList.length > 0) {
    const firstSchool = schoolNamesList[0];
    if (typeof firstSchool === "string") {
      // Remove surrounding curly braces, quotes, and any trailing quote
      return firstSchool.replace(/^{"|"}$|"$/g, "").replace(/\\"/g, "");
    }
  }
  return "School name unavailable";
};

const WinnerCard = ({ speaker, count }: WinnerCardProps) => {
  const schoolName = extractSchoolName(speaker.schoolNamesList);
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
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
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">
                {speaker.teamName}
              </h3>
              <small className="text-xs text-muted-foreground">
                {schoolName}
              </small>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{speaker.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{speaker.wins}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Rank</span>
              <span className="text-foreground">
                {parseInt(String(speaker.averageRank))}
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

export default TeamsRanking;
