"use client";

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Roles } from "@/stores/auth/auth.store";
import { Slash } from "lucide-react";
import { withAuth } from "@/stores/auth/middleware.store";
import React from "react";
import NotificationsMenuWrapper from "@/components/pages/admin/notifications-settings/notifications-menu-wrapper";
import Settings from "@/components/pages/admin/notifications-settings/settings";

const page = withAuth(() => {
  return <Page />;
}, [Roles.ADMIN]);

function Page() {
  return (
    <ContentLayout title="format">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
        <h3 className="text-lg text-primary font-bold">Notification Settings</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground text-base">
                Admin
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                Profile
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <NotificationsMenuWrapper>
        <Settings role="volunteers" />
      </NotificationsMenuWrapper>
    </ContentLayout>
  );
}

export default page;
