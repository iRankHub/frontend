"use client";

import React, { useEffect, useState } from "react";
import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { withAuth } from "@/stores/auth/middleware.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import Overview from "@/components/pages/schools/dashboard/overview";
import CurrentRank from "@/components/pages/schools/dashboard/current-rank";
import Leaderboard from "@/components/pages/schools/dashboard/leaderboard";
import PerformanceTrendChart from "@/components/pages/schools/dashboard/charts/performance-trend-chart";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";
import { getOverallSchoolRanking } from "@/core/debates/rankings";
import { OverallSchoolRankingResponse } from "@/lib/grpc/proto/debate_management/debate_pb";

const Page = withAuth(() => {
  return <Dashboard />;
}, [Roles.SCHOOL]);

function Dashboard() {
  const { user } = useUserStore((state) => state);
  const [currentUser, setCurrentUser] = useState<UserProfile.AsObject | undefined>(undefined);
  const [overallSchoolRanking, setOverallSchoolRanking] = useState<OverallSchoolRankingResponse.AsObject>();
  const [totalTournaments, setTotalTournaments] = useState(0);
  const [upcomingTournaments, setUpcomingTournaments] = useState(0);
  const [totalTournamentsPercentageChange, setTotalTournamentsPercentageChange] = useState("+∞%");
  const [upcomingTournamentsPercentageChange, setUpcomingTournamentsPercentageChange] = useState("+∞%");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

    setIsLoading(true);
    setHasError(false);

    Promise.all([
      getUserProfile({
        userID: user.userId,
        token: user.token,
      }),
      getOverallSchoolRanking({
        token: user.token,
        user_id: user.userId,
      })
    ])
      .then(([userProfileRes, schoolRankingRes]) => {
        setCurrentUser(userProfileRes.profile);
        setOverallSchoolRanking(schoolRankingRes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
        setHasError(true);
      });
  }, [user]);

  if (isLoading) {
    return (
      <ContentLayout title="dashboard">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
            <p>Please wait while we fetch your school{`'`}s information.</p>
          </div>
        </div>
      </ContentLayout>
    );
  }

  if (hasError || !overallSchoolRanking) {
    return (
      <ContentLayout title="dashboard">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">No Information Available</h2>
            <p className="mb-2">We couldn{`'`}t find any ranking information for your school.</p>
            <p>This could be because your account is new or hasn{`'`}t participated in any events yet.</p>
          </div>
        </div>
      </ContentLayout>
    );
  }

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
            totalTournamentsPercentageChange={totalTournamentsPercentageChange}
            upcomingTournamentsPercentageChange={upcomingTournamentsPercentageChange}
          />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <CurrentRank
            currentRank={overallSchoolRanking.schoolRank || 0}
            totalStudents={overallSchoolRanking.totalSchools || 0}
          />
        </div>
      </div>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <PerformanceTrendChart />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <Leaderboard
            studentRank={overallSchoolRanking.schoolRank || 0}
            rankChange={overallSchoolRanking.rankChange || 0}
            studentInfo={overallSchoolRanking.schoolInfo || ({} as any)}
            topStudents={overallSchoolRanking.topSchoolsList || []}
          />
        </div>
      </div>
    </ContentLayout>
  );
}

export default Page;