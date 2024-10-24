import { Icons } from "@/components/icons";
import React from "react";

interface OverviewProps {
  totalTournamentsAttended: number;
  totalTournamentsJudged: number;
  upcomingTournaments: number;
  totalTournamentsPercentageChange: string;
  upcomingTournamentsPercentageChange: string;
}

function Overview({
  upcomingTournaments,
  totalTournamentsPercentageChange,
  upcomingTournamentsPercentageChange,
  totalTournamentsAttended,
  totalTournamentsJudged,
}: OverviewProps) {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x gap-4 px-4 py-6 bg-background rounded-lg border-2 border-muted">
      <div className="flex flex-col gap-2 cursor-pointer">
        <div className="w-full flex items-center justify-between gap-3">
          <h3 className="font-semibold text-sm capitalize text-foreground">
            Total Tournaments
          </h3>
          <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
            <Icons.chevronUp size={14} className="text-success-foreground" />
            <small className="text-xs text-success-foreground">
              {totalTournamentsPercentageChange}
            </small>
          </div>
        </div>
        <p className="text-xl font-bold text-primary tracking-widest">
          {totalTournamentsJudged}
        </p>
        <p className="capitalize text-sm text-muted-text">Lifetime</p>
      </div>
      <div className="border-transparent md:border-l border-dashed md:border-border md:pl-3 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Tournaments Attended
            </h3>
            <div className="flex items-center bg-destructive/10 rounded-full px-0.5">
              <Icons.chevronDown size={14} className="text-destructive" />
              <small className="text-xs text-destructive">
                {totalTournamentsPercentageChange}
              </small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {totalTournamentsAttended}
          </p>
          <p className="capitalize text-sm text-muted-text">Last 365 Days</p>
        </div>
      </div>
      <div className="border-transparent lg:border-l border-dashed lg:border-border lg:pl-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-sm capitalize text-foreground">
              Upcoming Tournaments
            </h3>
            <div className="flex items-center bg-destructive-foreground px-0.5 rounded-full">
              <Icons.chevronUp size={14} className="text-success-foreground" />
              <small className="text-xs text-success-foreground">
                {upcomingTournamentsPercentageChange}
              </small>
            </div>
          </div>
          <p className="text-xl font-bold text-primary tracking-widest">
            {upcomingTournaments}
          </p>
          <p className="capitalize text-sm text-muted-text">Next 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
