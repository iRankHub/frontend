import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import {
  VolunteerTournamentRank,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  getTournamentVolunteerRanking,
} from "@/core/debates/rankings";
import { cn } from "@/lib/utils";

type Props = {
  tournamentId: number;
};

function Volunteers({ tournamentId }: Props) {
  const [volunteerRankings, setVolunteerRankings] = useState<VolunteerTournamentRank.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;
  const { user } = useUserStore((state) => state);

  const fetchVolunteers = async (page: number) => {
    if (!user || isLoading) return;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentVolunteerRanking(options);

      if (!res || !res.rankingsList) {
        return;
      }

      setTotalCount(res.totalCount || 0);

      setVolunteerRankings(prev => {
        if (page === 1) {
          return res.rankingsList;
        } else {
          // Keep top 3 from first page and append new data
          const topVolunteers = prev.slice(0, 3);
          const newVolunteers = res.rankingsList.filter(volunteer =>
            !prev.some(p => p.volunteerId === volunteer.volunteerId)
          );
          return [...topVolunteers, ...prev.slice(3), ...newVolunteers];
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
    setVolunteerRankings([]);
    fetchVolunteers(1);
  }, [user, tournamentId]);

  const handleLoadMore = () => {
    if (!isLoading && volunteerRankings.length < totalCount) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchVolunteers(nextPage);
    }
  };

  // If no volunteers data yet, show loading or empty state
  if (volunteerRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Volunteer Ranking
          </h3>
        </div>
        <div className="w-full bg-background p-8 px-5 text-center">
          {isLoading ? "Loading..." : "No volunteers data available."}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Volunteer Ranking
        </h3>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {volunteerRankings.slice(0, 3).map((volunteer, index) => (
            <React.Fragment key={volunteer.volunteerId || index}>
              {index < 2 ? (
                <WinnerCard
                  volunteer={volunteer}
                  count={index + 1}
                />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto sm:mx-0.5">
                  <WinnerCard
                    volunteer={volunteer}
                    count={index + 1}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <DataTable
          data={volunteerRankings.slice(3)}
          columns={columns}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={volunteerRankings.length < totalCount}
          onLoadMore={handleLoadMore}
        />
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
