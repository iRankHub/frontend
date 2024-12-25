import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { StudentRanking } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentStudentRanking } from "@/core/debates/rankings";
import { cn } from "@/lib/utils";

type Props = {
  tournamentId: number;
};

function Speakers({ tournamentId }: Props) {
  const [studentRankings, setStudentRankings] = useState<StudentRanking.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 5;
  const { user } = useUserStore((state) => state);

  const fetchRankings = async (page: number) => {
    if (!user || isLoading || (!hasMore && page > 1)) return;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentStudentRanking(options);

      if (!res || (Array.isArray(res) && res.length === 0)) {
        setHasMore(false);
        return;
      }

      setStudentRankings(prev => {
        if (page === 1) {
          // For first page, include top 3 and rest of the data
          return res;
        } else {
          // For subsequent pages, keep top 3 and append new data
          const topSpeakers = prev.slice(0, 3);
          const newData = res.filter(speaker =>
            !prev.some(p => p.studentId === speaker.studentId)
          );
          return [...topSpeakers, ...prev.slice(3), ...newData];
        }
      });

      // If we received fewer items than pageSize, we've reached the end
      if (Array.isArray(res) && res.length < pageSize) {
        setHasMore(false);
      }

    } catch (err) {
      console.error(err);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setHasMore(true);
    setStudentRankings([]);
    fetchRankings(1);
  }, [user, tournamentId]);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchRankings(nextPage);
    }
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Speaker Ranking
        </h3>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {studentRankings.slice(0, 3).map((speaker, index) => (
            <React.Fragment key={speaker.studentId || index}>
              {index < 2 ? (
                <WinnerCard speaker={speaker} count={index + 1} />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto">
                  <WinnerCard speaker={speaker} count={index + 1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <DataTable
          columns={columns}
          data={studentRankings.slice(3)}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
}

interface WinnerCardProps {
  speaker: StudentRanking.AsObject;
  count: number;
}

const WinnerCard = ({ speaker, count }: WinnerCardProps) => {
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
          <Image
            src="/static/images/mic-speech.jpg"
            alt="user image"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">
                {speaker.studentName}
              </h3>
              <small className="text-xs text-muted-foreground">
                {speaker.schoolName}
              </small>
            </div>
            <div className="w-8 h-8 relative">
              <Image
                src={`/static/images/medal-${count}.png`}
                alt="medal first"
                fill
                className={cn("w-full h-full", count === 1 && "scale-125")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{speaker.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{speaker.totalWins}</span>
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

export default Speakers;
