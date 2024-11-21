import React from "react";
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
  onYearChange: (year: number) => void;
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
  onYearChange,
  years,
}: IncomeOverviewProps) {
  const hasData = tournamentIncomeList && tournamentIncomeList.length > 0;

  // Calculate total revenue for all tournaments
  const totalRevenue = hasData
    ? tournamentIncomeList.reduce((sum, tournament) => {
        return sum + tournament.netRevenue;
      }, 0)
    : 0;

  // Get the earliest tournament date to show "From" date
  const earliestDate = hasData
    ? tournamentIncomeList.reduce((earliest, tournament) => {
        const currentDate = new Date(tournament.tournamentDate);
        return earliest && earliest < currentDate ? earliest : currentDate;
      }, new Date(tournamentIncomeList[0].tournamentDate))
    : null;

  // Format currency
  const formatCurrency = (amount: number) => {
    return `RWF ${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="w-full h-full p-3">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <h3 className={cn("text-lg font-bold text-foreground", archivo.className)}>
          Income Overview
        </h3>
        <div className="flex items-center gap-3">
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => onYearChange(parseInt(value))}
          >
            <SelectTriggerNoDropdownIcon className="m-0 p-0 border-0 bg-transparent w-auto h-auto [&>span]:hidden">
              <Button type="button" size="sm">
                <Icons.addCircle size={18} className="text-white mr-1" />
                {selectedYear}
              </Button>
            </SelectTriggerNoDropdownIcon>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className={cn("text-lg font-semibold text-muted-foreground", archivo.className)}>
          Total Revenue
        </h3>
        {hasData ? (
          <>
            <h3 className={cn("text-lg font-bold text-foreground", archivo.className)}>
              {formatCurrency(totalRevenue)}
            </h3>
            <small className="text-sm text-muted-foreground">
              From {earliestDate?.getFullYear()}
            </small>
            <OverviewChart data={tournamentIncomeList} />
          </>
        ) : (
          <>
            <h3 className={cn("text-lg font-bold text-muted-foreground", archivo.className)}>
              {formatCurrency(0)}
            </h3>
            <small className="text-sm text-muted-foreground">
              No data available
            </small>
            <EmptyOverviewChart />
          </>
        )}
      </div>
    </div>
  );
}