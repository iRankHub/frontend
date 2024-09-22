"use client";

import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { withAuth } from "@/stores/auth/middleware.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import Overview from "@/components/pages/schools/dashboard/overview";
import CurrentRank from "@/components/pages/schools/dashboard/current-rank";
import Leaderboard from "@/components/pages/schools/dashboard/leaderboard";
import { PerformanceTrendChart } from "@/components/pages/schools/dashboard/charts/performance-trend-chart";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";
import { getOverallSchoolRanking } from "@/core/debates/rankings";
import { OverallSchoolRankingResponse } from "@/lib/grpc/proto/debate_management/debate_pb";
import { getTournamentStats } from "@/core/tournament/list";

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.SCHOOL]);

function Dashboard() {
  const { user } = useUserStore((state) => state);
  const [currentUser, setCurrentUser] = useState<
    UserProfile.AsObject | undefined
  >(undefined);
  const [overallSchoolRanking, setOverallSchoolRanking] =
    React.useState<OverallSchoolRankingResponse.AsObject>();
  const [totalTournaments, setTotalTournaments] = React.useState(0);
  const [upcomingTournaments, setUpcomingTournaments] = React.useState(0);
  const [
    total_tournamamentsPercentageChange,
    setTotalTournamentsPercentageChange,
  ] = React.useState("+∞%");
  const [
    upcoming_tournamentsPercentageChange,
    setUpcomingTournamentsPercentageChange,
  ] = React.useState("+∞%");

  const handleGreetMessage = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 0 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  useEffect(() => {
    if (!user) return;

    getUserProfile({
      userID: user.userId,
      token: user.token,
    })
      .then((res) => {
        setCurrentUser(res.profile);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    // getTournamentStats({ token: user.token })
    //   .then((res) => {
    //     setTotalTournaments(res.totalTournaments);
    //     setUpcomingTournaments(res.upcomingTournaments);
    //     setTotalTournamentsPercentageChange(res.totalPercentageChange);
    //     setUpcomingTournamentsPercentageChange(res.upcomingPercentageChange);
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });

    getOverallSchoolRanking({
      token: user.token,
      user_id: user.userId,
    })
      .then((res) => {
        console.log(res);
        setOverallSchoolRanking(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);
  return (
    <ContentLayout title="dashboard">
      <header>
        <div className="w-full flex items-center justify-between gap-5">
          <h3 className="text-lg text-primary font-semibold">Dashboard</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>School</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="-rotate-12" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full mt-2">
          <h1 className="text-xl text-foreground font-semibold capitalize">
            {handleGreetMessage()}, {currentUser?.name}!
          </h1>
          <span className="text-sm text-muted-foreground">
            Hope you have a good day
          </span>
        </div>
      </header>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <Overview
            totalTournamentsAttended={2000}
            totalTournamentsUnattended={500}
            upcomingTournaments={upcomingTournaments}
            totalTournamentsPercentageChange={
              total_tournamamentsPercentageChange
            }
            upcomingTournamentsPercentageChange={
              upcoming_tournamentsPercentageChange
            }
          />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <CurrentRank
            currentRank={overallSchoolRanking?.schoolRank || 0}
            totalStudents={overallSchoolRanking?.totalSchools || 0}
          />
        </div>
      </div>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <PerformanceTrendChart />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <Leaderboard
            studentRank={overallSchoolRanking?.schoolRank || 0}
            rankChange={overallSchoolRanking?.rankChange || 0}
            studentInfo={overallSchoolRanking?.schoolInfo || ({} as any)}
            topStudents={overallSchoolRanking?.topSchoolsList || []}
          />
        </div>
      </div>
    </ContentLayout>
  );
}

export default page;
