import AdminPanelLayout from "@/components/layout/admin-panel/admin-panel-layout";
import React from "react";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminPanelLayout>
      <div className="min-h-screen">{children}</div>
    </AdminPanelLayout>
  );
}

export default page;
