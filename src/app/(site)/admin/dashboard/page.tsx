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
import dynamic from "next/dynamic";
import SystemMonitor from "@/components/pages/admin/dashboard/system-monitor";
import { withAuth } from "@/stores/auth/middleware.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { UserDetails } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserDetails } from "@/core/users/users";

// ProgressView contains the recharts chart. There is a bug in the library so we have to use dynamic to avoid hydration errors
// This will be reviewed later on
const TournamentInsights = dynamic(
  () => import("@/components/pages/admin/dashboard/tournament-insights"),
  { ssr: false }
);

const page = withAuth(() => {
  return <Dashboard />;
}, [Roles.ADMIN]);

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
  }

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
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:gap-3">
        <UserCategoryOverview />
        <TournamentInsights />
      </div>
      <SystemMonitor />
    </ContentLayout>
  );
}

export default page;
