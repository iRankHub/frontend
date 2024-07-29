import SidebarStudent from "@/components/layout/admin/sidebar";
import TopBar from "@/components/layout/admin/topbar";
import React from "react";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#FAF9F9]">
      <SidebarStudent />
      <TopBar />
      <main className="min-h-screen h-full">
        {children}
      </main>
    </div>
  );
}

export default page;
