"use client";

import { ContentLayout } from "@/components/layout/students-panel/content-layout";
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
import Overview from "@/components/pages/students/dashboard/overview";
import CurrentRank from "@/components/pages/students/dashboard/current-rank";
import Leaderboard from "@/components/pages/students/dashboard/leaderboard";
import { PerformanceTrendChart } from "@/components/pages/students/dashboard/charts/performance-trend-chart";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";
import { getTournamentStats } from "@/core/tournament/list";
import { getOverallStudentRanking } from "@/core/debates/rankings";
import { OverallRankingResponse } from "@/lib/grpc/proto/debate_management/debate_pb";

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.STUDENT]);

function Dashboard() {
  const { user } = useUserStore((state) => state);
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
  const [overallStudentRanking, setOverallStudentRanking] =
    React.useState<OverallRankingResponse.AsObject>();
  const [currentUser, setCurrentUser] = useState<
    UserProfile.AsObject | undefined
  >(undefined);

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

    getOverallStudentRanking({
      token: user.token,
      user_id: user.userId,
    })
      .then((res) => {
        console.log(res);
        setOverallStudentRanking(res);
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
                <BreadcrumbPage>Student</BreadcrumbPage>
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
            currentRank={overallStudentRanking?.studentRank || 0}
            totalStudents={overallStudentRanking?.totalStudents || 0}
          />
        </div>
      </div>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <PerformanceTrendChart />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <Leaderboard
            studentRank={overallStudentRanking?.studentRank || 0}
            rankChange={overallStudentRanking?.rankChange || 0}
            studentInfo={overallStudentRanking?.studentInfo || ({} as any)}
            topStudents={overallStudentRanking?.topStudentsList || []}
          />
        </div>
      </div>
    </ContentLayout>
  );
}

export default page;
