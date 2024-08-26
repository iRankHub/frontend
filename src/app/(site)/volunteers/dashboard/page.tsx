"use client";

import { ContentLayout } from "@/components/layout/volunteer-panel/content-layout";
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
import { UserDetails } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserDetails } from "@/core/users/users";
import Overview from "@/components/pages/volunteers/dashboard/overview";
import CurrentRank from "@/components/pages/volunteers/dashboard/current-rank";
import Leaderboard from "@/components/pages/volunteers/dashboard/leaderboard";
import { PerformanceTrendChart } from "@/components/pages/volunteers/dashboard/charts/performance-trend-chart";

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.VOLUNTEER]);

function Dashboard() {
  const { user } = useUserStore((state) => state);
  const [currentUser, setCurrentUser] = useState<
    UserDetails.AsObject | undefined
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

    getUserDetails({
      userID: user.userId,
      token: user.token,
    })
      .then((res) => {
        setCurrentUser(res.user);
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
          <Overview />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <CurrentRank />
        </div>
      </div>
      <div className="flex items-stretch flex-col md:flex-row gap-3 mt-5">
        <div className="flex-1 w-full">
          <PerformanceTrendChart />
        </div>
        <div className="flex-1 max-w-full md:max-w-xs w-full">
          <Leaderboard />
        </div>
      </div>
    </ContentLayout>
  );
}

export default page;
