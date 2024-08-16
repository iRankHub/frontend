"use client";

import { ContentLayout } from "@/components/layout/students-panel/content-layout";
import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import React from "react";

const page = withAuth(() => {
  return (
    <ContentLayout title="dashboard">
      <div>This is the Students page.</div>
    </ContentLayout>
  );
}, [Roles.STUDENT]);

export default page;
