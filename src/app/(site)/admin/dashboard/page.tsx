"use client";

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";
import Overview from "@/components/pages/admin/dashboard/overview";
import UserCategoryOverview from "@/components/pages/admin/dashboard/user-category-overview";
import SystemMonitor from "@/components/pages/admin/dashboard/system-monitor";
import { withAuth } from "@/stores/auth/middleware.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import {
  UserProfile,
  UserSummary,
} from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile, getUserStatistics } from "@/core/users/users";
import { getTournamentStats } from "@/core/tournament/list";
import UserRegistrationsChart from "@/components/pages/admin/dashboard/charts/user-registration-chart";
import AppLoader from "@/lib/loader";

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.ADMIN]);

function Dashboard() {
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [newSignups, setNewSignups] = React.useState(0);
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
  const [
    newRegistrationsPercentageChange,
    setNewRegistrationsPercentageChange,
  ] = React.useState("+∞%");
  const [approvedUsersPercentageChange, setApprovedUsersPercentageChange] =
    React.useState("+∞%");
  const [isLoading, setIsLoading] = React.useState(true);

  const [admin_count, setAdminCount] = React.useState(0);
  const [student_count, setStudentCount] = React.useState(0);
  const [school_count, setSchoolCount] = React.useState(0);
  const [volunteer_count, setVolunteerCount] = React.useState(0);

  const { user } = useUserStore((state) => state);
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
    setIsLoading(true);

    const fetchUserProfile = getUserProfile({
      userID: user.userId,
      token: user.token,
    }).then((res) => {
      setCurrentUser(res.profile);
    });

    const fetchUserStatistics = getUserStatistics({ token: user.token }).then(
      (res) => {
        setTotalUsers(res.approvedCount);
        setNewSignups(res.newRegistrationsCount);
        setAdminCount(res.adminCount);
        setStudentCount(res.studentCount);
        setSchoolCount(res.schoolCount);
        setVolunteerCount(res.volunteerCount);
        setNewRegistrationsPercentageChange(
          res.newRegistrationsPercentageChange
        );
        setApprovedUsersPercentageChange(res.approvedUsersPercentageChange);
      }
    );

    const fetchTournamentStats = getTournamentStats({ token: user.token }).then(
      (res) => {
        setTotalTournaments(res.totalTournaments);
        setUpcomingTournaments(res.upcomingTournaments);
        setTotalTournamentsPercentageChange(res.totalPercentageChange);
        setUpcomingTournamentsPercentageChange(res.upcomingPercentageChange);
      }
    );

    Promise.all([fetchUserProfile, fetchUserStatistics, fetchTournamentStats])
      .catch((err) => {
        console.error("Error fetching data:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <>
      <header>
        <div className="w-full flex items-center justify-between gap-5">
          <h3 className="text-lg text-primary font-semibold">Dashboard</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/admin/dashboard"
                  className="text-muted-foreground"
                >
                  Admin
                </BreadcrumbLink>
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
      <Overview
        newSignups={newSignups}
        totalTournaments={totalTournaments}
        totalUsers={totalUsers}
        upcomingTournaments={upcomingTournaments}
        totalTournamentsPercentageChange={total_tournamamentsPercentageChange}
        upcomingTournamentsPercentageChange={
          upcoming_tournamentsPercentageChange
        }
        newRegistrationsPercentageChange={newRegistrationsPercentageChange}
        approvedUsersPercentageChange={approvedUsersPercentageChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:gap-3">
        <UserCategoryOverview
          admin_count={admin_count}
          student_count={student_count}
          school_count={school_count}
          volunteer_count={volunteer_count}
        />
        <div className="col-span-2">
          <UserRegistrationsChart />
        </div>
      </div>
      <SystemMonitor />
    </>
  );
}

export default page;
