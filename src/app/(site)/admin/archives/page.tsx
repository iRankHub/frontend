"use client";

import { ContentLayout } from "@/components/layout/admin-panel/content-layout";
import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import React from "react";

const page = withAuth(() => {
  return <Page />;
}, [Roles.ADMIN]);

function Page() {
  return (
    <ContentLayout title="format">
      <div className="min-h-[calc(100vh_-_150px)] flex items-center justify-center">
        <h3 className="text-2xl h-full text-primary font-bold">Coming soon!</h3>
      </div>
    </ContentLayout>
  );
}

export default page;
