import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface OverviewProps {
  totalTournamentsAttended: number;
  totalTournamentsUnattended: number;
  upcomingTournaments: number;
  totalTournamentsPercentageChange: string;
  upcomingTournamentsPercentageChange: string;
}

function Overview({
  upcomingTournaments,
  totalTournamentsPercentageChange,
  upcomingTournamentsPercentageChange,
  totalTournamentsAttended,
  totalTournamentsUnattended,
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
        color: "text-success-foreground",
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
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x gap-4 px-4 py-6 bg-background rounded-lg border-2 border-muted">
      <Link href="/tournaments/list">
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="w-full flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Total Tournaments
            </h3>
            <div 
              className={cn(
                "flex items-center bg-destructive-foreground px-0.5 rounded-full",
                changeColorBasedOnPercentage(totalTournamentsPercentageChange).background
              )}
            >
              {renderChevron(totalTournamentsPercentageChange)}
              <small className={cn(
                "text-xs",
                changeColorBasedOnPercentage(totalTournamentsPercentageChange).color
              )}>
                {changeColorBasedOnPercentage(totalTournamentsPercentageChange).textWithNoSign}
              </small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {totalTournamentsAttended + totalTournamentsUnattended}
          </p>
          <p className="capitalize text-sm text-muted-text">
            Attended and Unattended
          </p>
        </div>
      </Link>
      <Link
        href="/tournaments/list"
        className="border-transparent md:border-l border-dashed md:border-border md:pl-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Tournaments Attended
            </h3>
            <div 
              className={cn(
                "flex items-center bg-destructive-foreground px-0.5 rounded-full",
                changeColorBasedOnPercentage(totalTournamentsPercentageChange).background
              )}
            >
              {renderChevron(totalTournamentsPercentageChange)}
              <small className={cn(
                "text-xs",
                changeColorBasedOnPercentage(totalTournamentsPercentageChange).color
              )}>
                {changeColorBasedOnPercentage(totalTournamentsPercentageChange).textWithNoSign}
              </small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {totalTournamentsAttended}
          </p>
          <p className="capitalize text-sm text-muted-text">Last 365 Days</p>
        </div>
      </Link>
      <Link
        href="/tournaments/list"
        className="border-transparent lg:border-l border-dashed lg:border-border lg:pl-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Upcoming Tournaments
            </h3>
            <div 
              className={cn(
                "flex items-center bg-destructive-foreground px-0.5 rounded-full",
                changeColorBasedOnPercentage(upcomingTournamentsPercentageChange).background
              )}
            >
              {renderChevron(upcomingTournamentsPercentageChange)}
              <small className={cn(
                "text-xs",
                changeColorBasedOnPercentage(upcomingTournamentsPercentageChange).color
              )}>
                {changeColorBasedOnPercentage(upcomingTournamentsPercentageChange).textWithNoSign}
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
