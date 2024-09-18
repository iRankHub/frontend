import AdminPanelLayout from "@/components/layout/admin-panel/admin-panel-layout";
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
        <div className="min-h-screen">{children}</div>
      </AdminPanelLayout>
    </NotificationProvider>
  );
}

export default page;
