'use client'

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import Users from "@/components/pages/admin/users";
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
  return <Page />
}, [Roles.ADMIN]);

function Page({}) {
  return (
    <ContentLayout title="format">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-2xl text-primary font-bold">Users</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/admin/dashboard"
                className="text-muted-foreground text-base"
              >
                Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                Users
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-4">
        <Users />
      </div>
    </ContentLayout>
  );
}

export default page;
