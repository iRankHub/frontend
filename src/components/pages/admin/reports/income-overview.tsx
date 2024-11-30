import React, { useEffect, useRef, useState } from "react";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { OverviewChart } from "./charts/overview-chart";
import { Select, SelectContent, SelectItem, SelectTriggerNoDropdownIcon } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { TournamentIncome } from "@/lib/grpc/proto/analytics/analytics_pb";
import { LineChart } from "lucide-react";

const archivo = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

type IncomeOverviewProps = {
  tournamentIncomeList: TournamentIncome.AsObject[];
  selectedYear: number;
  years: number[];
};

function EmptyOverviewChart() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center h-64">
      <div className="rounded-full bg-muted p-3 mb-4">
        <LineChart size={24} className="text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-sm">
        No chart data available. Try searching a tournament or changing year
      </p>
    </div>
  );
}

export default function IncomeOverview({
  tournamentIncomeList,
  selectedYear,
  years,
}: IncomeOverviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Create ResizeObserver
    const resizeObserver = new ResizeObserver(updateDimensions);
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      updateDimensions(); // Initial measurement
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const hasData = tournamentIncomeList && tournamentIncomeList.length > 0;

  const totalRevenue = hasData
    ? tournamentIncomeList.reduce((sum, tournament) => {
        return sum + tournament.netRevenue;
      }, 0)
    : 0;

  const earliestDate = hasData
    ? tournamentIncomeList.reduce((earliest, tournament) => {
        const currentDate = new Date(tournament.tournamentDate);
        return earliest && earliest < currentDate ? earliest : currentDate;
      }, new Date(tournamentIncomeList[0].tournamentDate))
    : null;

  const formatCurrency = (amount: number) => {
    return `RWF ${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="w-full h-full flex flex-col" ref={containerRef}>
      <div className="px-3 pt-3">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-2 mb-3">
          <h3 className={cn("text-lg font-bold text-foreground", archivo.className)}>
            Income Overview
          </h3>
        </div>
        <div className="flex flex-col mb-4">
          <h3 className={cn("text-lg font-semibold text-muted-foreground", archivo.className)}>
            Total Revenue
          </h3>
          <h3 className={cn("text-lg font-bold text-foreground", archivo.className)}>
            {hasData ? formatCurrency(totalRevenue) : formatCurrency(0)}
          </h3>
          <small className="text-sm text-muted-foreground">
            {hasData ? `From ${earliestDate?.getFullYear()}` : 'No data available'}
          </small>
        </div>
      </div>
      <div className="flex-1 min-h-0 w-full px-3 pb-3">
        <div className="w-full h-full">
          {hasData ? (
            <div className="w-full h-full" key={containerWidth}>
              <OverviewChart data={tournamentIncomeList} />
            </div>
          ) : (
            <EmptyOverviewChart />
          )}
        </div>
      </div>
    </div>
  );
}