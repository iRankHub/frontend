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
import {
  getAllUsers,
  getUserProfile,
  getUserStatistics,
} from "@/core/users/users";
import { GetSchoolsType } from "@/types/user_management/schools";
import { tournamentsList } from "@/core/tournament/list";
import { PerformanceTrendChart } from "@/components/pages/admin/dashboard/charts/performance-trend-chart";

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.ADMIN]);

function Dashboard() {
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [newSignups, setNewSignups] = React.useState(0);
  const [totalTournaments, setTotalTournaments] = React.useState(0);
  const [usersList, setUsersList] = React.useState<UserSummary.AsObject[]>([]);

  const [admin_count, setAdminCount] = React.useState(0);
  const [student_count, setStudentCount] = React.useState(0);
  const [school_count, setSchoolCount] = React.useState(0);
  const [volunteer_count, setVolunteerCount] = React.useState(0);
  const [
    newRegistrationsPercentageChange,
    setNewRegistrationsPercentageChange,
  ] = React.useState<string>("0.0%");
  const [adminPercentageChange, setAdminPercentageChange] =
    React.useState<string>("0.0%");

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

  const calculatePercentageChange = (
    newValue: string,
    oldValue: string
  ): string => {
    const newVal = parseFloat(newValue);
    const oldVal = parseFloat(oldValue);

    if (oldVal === 0) {
      return "+∞%"; // Handle division by zero case
    }

    const percentageChange = ((newVal - oldVal) / oldVal) * 100;
    return `${percentageChange.toFixed(2)}%`; // Round to two decimal places
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

  React.useEffect(() => {
    if (!user) return;
    const options: GetSchoolsType = {
      pageSize: 200,
      page: 1,
      token: user.token,
    };
    getAllUsers({ ...options })
      .then((res) => {
        setTotalUsers(res.totalcount);
        setNewSignups(0);
        setUsersList(res.usersList);
      })
      .catch((err) => {
        console.error(err.message);
      });

    const optionsUsers: {
      token: string;
    } = {
      token: user.token,
    };
    getUserStatistics({ ...optionsUsers })
      .then((res) => {
        setNewSignups(res.newRegistrationsCount);
        setAdminCount(res.adminCount);
        setStudentCount(res.studentCount);
        setSchoolCount(res.schoolCount);
        setVolunteerCount(res.volunteerCount);
      })
      .catch((err) => {
        console.error(err.message);
      });

    tournamentsList({ token: user.token, page_size: 10, page_token: 0 })
      .then((res) => {
        setTotalTournaments(res.tournamentsList.length);
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
      />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:gap-3">
        <UserCategoryOverview
          usersList={usersList}
          admin_count={admin_count}
          student_count={student_count}
          school_count={school_count}
          volunteer_count={volunteer_count}
        />
        <div className="col-span-2">
          <PerformanceTrendChart />
        </div>
      </div>
      <SystemMonitor />
    </ContentLayout>
  );
}

export default page;
