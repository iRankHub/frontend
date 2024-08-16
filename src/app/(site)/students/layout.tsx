import StudentsPanelLayout from "@/components/layout/students-panel/panel-layout";
import React from "react";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StudentsPanelLayout>
      <div className="min-h-screen">{children}</div>
    </StudentsPanelLayout>
  );
}

export default page;
