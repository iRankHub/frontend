import PanelLayout from "@/components/layout/schools-panel/panel-layout";
import React from "react";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PanelLayout>
      <div className="min-h-screen">{children}</div>
    </PanelLayout>
  );
}

export default page;
