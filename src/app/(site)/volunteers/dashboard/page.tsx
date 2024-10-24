"use client";

import React, { useEffect, useState } from "react";
import { ContentLayout } from "@/components/layout/volunteer-panel/content-layout";
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
import Overview from "@/components/pages/volunteers/dashboard/overview";
import CurrentRank from "@/components/pages/volunteers/dashboard/current-rank";
import Leaderboard from "@/components/pages/volunteers/dashboard/leaderboard";
import { PerformanceTrendChart } from "@/components/pages/volunteers/dashboard/charts/performance-trend-chart";
import {
  GetUserProfileResponse,
  UserProfile,
} from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";

import {
  GetVolunteerRankingResponse,
  OverallRankingResponse,
  VolunteerTournamentStatsResponse,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import AppLoader from "@/lib/loader";
import {
  getOverallVolunteerRanking,
  getVolunteerTournamentStats,
} from "@/core/debates/rankings";

const Page = withAuth(() => {
  return <Dashboard />;
}, [Roles.VOLUNTEER]);

function Dashboard() {
  const { user } = useUserStore((state) => state);
  const [totalTournaments, setTotalTournaments] = useState(0);
  const [totalRoundsJudged, setTotalRoundsJudged] = useState(0);
  const [upcomingTournaments, setUpcomingTournaments] = useState(0);
  const [
    totalTournamentsPercentageChange,
    setTotalTournamentsPercentageChange,
  ] = useState("+∞%");
  const [
    upcomingTournamentsPercentageChange,
    setUpcomingTournamentsPercentageChange,
  ] = useState("+∞%");
  const [overallVolunteerRanking, setOverallVolunteerRanking] =
    useState<GetVolunteerRankingResponse.AsObject>();
  const [currentUser, setCurrentUser] = useState<
    UserProfile.AsObject | undefined
  >(undefined);
  const [volunteerTournamentStats, setVolunteerTournamentStats] = useState<
    VolunteerTournamentStatsResponse.AsObject | undefined
  >();
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

    const fetchUserProfile = getUserProfile({
      userID: user.userId,
      token: user.token,
    });

    // const fetchVolunteerRanking = getOverallVolunteerRanking({
    //   token: user.token,
    //   user_id: user.userId,
    // });

    const fetchVolunteerTournamentStats = getVolunteerTournamentStats({
      volunteer_id: user.userId,
      token: user.token,
    });

    Promise.all([
      fetchUserProfile,
      // fetchVolunteerRanking,
      fetchVolunteerTournamentStats,
    ])
      .then(
        ([userProfileRes, volunteerTournamentStatsRes]: [
          userProfileRes: GetUserProfileResponse.AsObject,
          // volunteerRankingRes: GetVolunteerRankingResponse.AsObject,
          volunteerTournamentStatsRes: VolunteerTournamentStatsResponse.AsObject
        ]) => {
          console.log(
            userProfileRes,
            // volunteerRankingRes,
            volunteerTournamentStatsRes
          );
          // setCurrentUser(userProfileRes.profile);
          // setOverallVolunteerRanking(volunteerRankingRes);
          // setTotalTournaments(volunteerTournamentStatsRes.tournamentsAttended);
          // setTotalRoundsJudged(volunteerTournamentStatsRes.totalRoundsJudged);
          // setUpcomingTournaments(
          //   volunteerTournamentStatsRes.upcomingTournaments
          // );
          // setTotalTournamentsPercentageChange(
          //   volunteerTournamentStatsRes.tournamentsAttendedChange
          // );
          // setUpcomingTournamentsPercentageChange(
          //   volunteerTournamentStatsRes.upcomingTournamentsChange
          // );
          // setVolunteerTournamentStats(volunteerTournamentStatsRes);
        }
      )
      .catch((err) => {
        console.error(err.message);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (hasError || !overallVolunteerRanking) {
    return (
      <ContentLayout title="dashboard">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              No Information Available
            </h2>
            <p className="mb-2">
              We couldn{`'`}t find any ranking information for you.
            </p>
            <p>
              This could be because your account is new or you haven{`'`}t
              participated in any tournaments yet.
            </p>
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
                <BreadcrumbPage>Volunteer</BreadcrumbPage>
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
            totalTournamentsAttended={totalTournaments}
            totalTournamentsJudged={totalRoundsJudged}
            upcomingTournaments={upcomingTournaments}
            totalTournamentsPercentageChange={totalTournamentsPercentageChange}
            upcomingTournamentsPercentageChange={
              upcomingTournamentsPercentageChange
            }
          />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <CurrentRank
            currentRank={overallVolunteerRanking.volunteerRank || 0}
            totalVolunteers={overallVolunteerRanking.totalVolunteers || 0}
          />
        </div>
      </div>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <PerformanceTrendChart />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <Leaderboard
            volunteerRank={overallVolunteerRanking.volunteerRank || 0}
            rankChange={overallVolunteerRanking.rankChange || 0}
            volunteerInfo={overallVolunteerRanking.volunteerInfo || ({} as any)}
            topVolunteers={overallVolunteerRanking.topVolunteersList || []}
          />
        </div>
      </div>
    </ContentLayout>
  );
}

export default Page;
