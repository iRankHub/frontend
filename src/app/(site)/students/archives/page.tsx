"use client";

import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Slash } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { ContentLayout } from "@/components/layout/students-panel/content-layout";

const page = withAuth(() => {
  return <Page />;
}, [Roles.STUDENT]);

function Page() {
  return (
    <ContentLayout title="studednts">
      <div className="w-full flex items-center justify-between gap-5">
        <h3 className="text-lg text-primary font-semibold">Archives</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/students/dashboard"
                className="text-muted-foreground"
              >
                Student
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">
                Archives
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-[300px] md:w-[400px] h-[300px]">
            <Image
              src="/static/images/archives.png"
              alt="Archives Placeholder Image"
              fill
              className="w-full h-full"
            />
          </div>
          <h3 className="font-semibold text-primary text-xl mt-5">No archives Available</h3>
        </div>
      </div>
    </ContentLayout>
  );
}

export default page;
