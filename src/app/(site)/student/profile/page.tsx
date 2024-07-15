"use client";
import Badges from "@/components/profile/students/badges";
import Certificates from "@/components/profile/students/certificates";
import Profile from "@/components/profile/students/Profile";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Slash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="p-10">
      <h3 className="font-bold text-2xl pb-4 text-primary">My Profile</h3>
      <Separator className="bg-black/20" />
      <div className="flex items-center gap-10 py-4">
        <h3
          className={cn(
            "text-sm cursor-pointer",
            activeTab === 1 && "font-bold pb-1 border-b-2 border-primary"
          )}
          onClick={() => setActiveTab(1)}
        >
          My Profile
        </h3>
        <h3
          className={cn(
            "text-sm cursor-pointer",
            activeTab === 2 && "font-bold pb-1 border-b-2 border-primary"
          )}
          onClick={() => setActiveTab(2)}
        >
          Certificate and letters
        </h3>
        <h3
          className={cn(
            "text-sm cursor-pointer",
            activeTab === 3 && "font-bold pb-1 border-b-2 border-primary"
          )}
          onClick={() => setActiveTab(3)}
        >
          Badges
        </h3>
      </div>
      <Separator className="bg-black/20" />

      <Breadcrumb className="my-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/student" className="text-primary text-sm">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/student/profile"
              className="text-primary text-sm"
            >
              My Profile
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {activeTab === 1 && (
        <Profile />
      )}
      {activeTab === 2 && (
        <Certificates />
      )}
      {activeTab === 3 && (
        <Badges />
      )}
    </div>
  );
}

export default Page;
