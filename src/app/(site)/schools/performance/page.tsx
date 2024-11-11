"use client";

import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
import Performance from "@/components/pages/schools/performance/Performance";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Slash } from "lucide-react";
import React from "react";

const page = withAuth(() => {
  return <Page />;
}, [Roles.SCHOOL]);

function Page() {
  return (
    <ContentLayout title="dashboard">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-lg text-primary font-bold">Team Excellence</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/schools/admin"
                className="text-muted-foreground text-base"
              >
                School
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                Performance
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-4">
        <Performance />
      </div>
    </ContentLayout>
  );
}

export default page;
