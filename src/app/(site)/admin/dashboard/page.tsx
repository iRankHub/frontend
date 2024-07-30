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
import React from "react";
import Overview from "./_components/overview";
import UserCategoryOverview from "./_components/user-category-overview";
import dynamic from "next/dynamic";
import SystemMonitor from "./_components/system-monitor";

// ProgressView contains the recharts chart. There is a bug in the library so we have to use dynamic to avoid hydration errors
// This will be reviewed later on
const TournamentInsights = dynamic(
  () => import('./_components/tournament-insights'),
  { ssr: false }
)

function page() {
  return (
    <ContentLayout title="dashboard">
      <header>
        <div className="w-full flex items-center justify-between gap-5">
          <h3 className="text-lg text-primary font-semibold">Dashboard</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard" className="text-muted-foreground">Admin</BreadcrumbLink>
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
          <h1 className="text-xl text-foreground font-semibold capitalize">Good Morning, Anima!</h1>
          <span className="text-sm text-muted-foreground">Hope you have a good day</span>
        </div>
      </header>
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        <UserCategoryOverview />
        <TournamentInsights />
      </div>
      <SystemMonitor />
    </ContentLayout>
  );
}

export default page;
