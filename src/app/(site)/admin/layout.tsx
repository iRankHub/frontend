import AdminPanelLayout from "@/components/layout/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import { NotificationProvider } from "@/context/notification-context";
import React from "react";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationProvider>
      <AdminPanelLayout>
        <div className="min-h-screen">
          <ContentLayout title="dashboard">{children}</ContentLayout>
        </div>
      </AdminPanelLayout>
    </NotificationProvider>
  );
}

export default page;
