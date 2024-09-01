"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

interface OverviewProps {
  totalUsers: number;
  newSignups: number;
  totalTournaments: number;
}

function Overview({ newSignups, totalTournaments, totalUsers }: OverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x gap-4 px-4 py-6 bg-background rounded-lg border-2 border-muted mt-5">
      <Link href={"/admin/users"}>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="w-full flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Number of users
            </h3>
            <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
              <Icons.chevronUp size={14} className="text-success-foreground" />
              <small className="text-xs text-success-foreground">10.0%</small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {totalUsers}
          </p>
          <p className="capitalize text-sm text-muted-text">Approved Users</p>
        </div>
      </Link>
      <Link
        href={"/admin/users"}
        className="border-transparent md:border-l border-dashed md:border-border md:pl-3 "
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              New user registrations
            </h3>
            <div className="flex items-center bg-destructive/10 rounded-full px-0.5">
              <Icons.chevronDown size={14} className="text-destructive" />
              <small className="text-xs text-destructive">3.0%</small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {newSignups}
          </p>
          <p className="capitalize text-sm text-muted-text">Last 30 Days</p>
        </div>
      </Link>
      <Link
        href={"/admin/tournaments/list"}
        className="border-transparent md:border-l border-dashed md:border-border lg:pl-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Number of Tournaments
            </h3>
            <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
              <Icons.chevronUp size={14} className="text-success-foreground" />
              <small className="text-xs text-success-foreground">3.2%</small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {totalTournaments}
          </p>
          <p className="text-sm text-muted-text">Past and Upcoming</p>
        </div>
      </Link>
      <Link
        href={"/admin/tournaments/list"}
        className="border-transparent md:border-l border-dashed md:border-border md:pl-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Upcoming Tournaments
            </h3>
            <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
              <Icons.chevronUp size={14} className="text-success-foreground" />
              <small className="text-xs text-success-foreground">8.3%</small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">15</p>
          <p className="capitalize text-sm text-muted-text">Next 30 days</p>
        </div>
      </Link>
    </div>
  );
}

export default Overview;
