"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface OverviewProps {
  totalUsers: number;
  newSignups: number;
  totalTournaments: number;
  upcomingTournaments: number;
  totalTournamentsPercentageChange: string;
  upcomingTournamentsPercentageChange: string;
  newRegistrationsPercentageChange: string;
  approvedUsersPercentageChange: string;
}

function Overview({
  newSignups,
  totalTournaments,
  totalUsers,
  upcomingTournaments,
  totalTournamentsPercentageChange,
  upcomingTournamentsPercentageChange,
  newRegistrationsPercentageChange,
  approvedUsersPercentageChange,
}: OverviewProps) {
  const changeColorBasedOnPercentage = (percentage: string) => {
    // Remove the % sign if it exists in the input
    const cleanPercentage = percentage.replace('%', '');
    
    // Handle infinity cases
    if (cleanPercentage.includes("∞")) {
      return {
        color: "text-muted-text",
        textWithNoSign: "0.00%",
        background: "bg-accent dark:bg-white",
        isZero: true,
      };
    }

    if (cleanPercentage.includes("+")) {
      const value = cleanPercentage.replace("+", "");
      const isZero = parseFloat(value) === 0;
      return {
        color: isZero ? "text-muted-text" : "text-muted-text",
        textWithNoSign: `${value}%`,
        background: "bg-accent dark:bg-white",
        isZero,
      };
    } else if (cleanPercentage.includes("-")) {
      const value = cleanPercentage.replace("-", "");
      const isZero = parseFloat(value) === 0;
      return {
        color: "text-destructive",
        textWithNoSign: `${value}%`,
        background: "bg-destructive",
        isZero,
      };
    } else {
      const isZero = parseFloat(cleanPercentage) === 0;
      return {
        color: "text-muted-text",
        textWithNoSign: `${cleanPercentage}%`,
        background: "bg-accent dark:bg-white",
        isZero,
      };
    }
  };
  
  const renderChevron = (percentage: string) => {
    const { isZero, color } = changeColorBasedOnPercentage(percentage);
    if (isZero) {
      return <Icons.chevronDown size={14} className={cn(color)} />;
    }
    return percentage.includes("-") ? 
      <Icons.chevronDown size={14} className={cn(color)} /> :
      <Icons.chevronUp size={14} className={cn(color)} />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x gap-4 px-4 py-6 bg-background rounded-lg border-2 border-muted mt-5">
      <Link href={"/admin/users"}>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="w-full flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Number of users
            </h3>
            <div
              className={cn(
                "flex items-center bg-destructive-foreground px-0.5 rounded-full",
                changeColorBasedOnPercentage(approvedUsersPercentageChange)
                  .background
              )
            }
            >
              {renderChevron(approvedUsersPercentageChange)}
              <small
                className={cn(
                  "text-xs",
                  changeColorBasedOnPercentage(approvedUsersPercentageChange)
                    .color
                )}
              >
                {
                  changeColorBasedOnPercentage(approvedUsersPercentageChange)
                    .textWithNoSign
                }
              </small>
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
            <div
              className={cn(
                "flex items-center bg-destructive-foreground px-0.5 rounded-full",
                changeColorBasedOnPercentage(newRegistrationsPercentageChange)
                  .background
              )}
            >
              {renderChevron(newRegistrationsPercentageChange)}
              <small
                className={cn(
                  "text-xs",
                  changeColorBasedOnPercentage(newRegistrationsPercentageChange)
                    .color
                )}
              >
                {
                  changeColorBasedOnPercentage(newRegistrationsPercentageChange)
                    .textWithNoSign
                }
              </small>
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
        className="border-transparent lg:border-l border-dashed lg:border-border lg:pl-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Number of Tournaments
            </h3>
            <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
              {renderChevron(totalTournamentsPercentageChange)}
              <small
                className={cn(
                  `text-xs`,
                  changeColorBasedOnPercentage(totalTournamentsPercentageChange)
                    .color
                )}
              >
                {
                  changeColorBasedOnPercentage(totalTournamentsPercentageChange)
                    .textWithNoSign
                }
              </small>
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
              {renderChevron(upcomingTournamentsPercentageChange)}
              <small
                className={cn(
                  "text-xs",
                  changeColorBasedOnPercentage(
                    upcomingTournamentsPercentageChange
                  ).color
                )}
              >
                {
                  changeColorBasedOnPercentage(
                    upcomingTournamentsPercentageChange
                  ).textWithNoSign
                }
              </small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {upcomingTournaments}
          </p>
          <p className="capitalize text-sm text-muted-text">Next 30 days</p>
        </div>
      </Link>
    </div>
  );
}

export default Overview;
