"use client";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AttendanceReportResponse } from "@/lib/grpc/proto/analytics/analytics_pb";
import { Skeleton } from "@/components/ui/skeleton";

interface AttendanceProps {
  data: AttendanceReportResponse.AsObject | null;
  isLoading: boolean;
}

interface ChartItem {
  label: string;
  color?: string;
}

type CategoryKey =
  | "school_count"
  | "Private"
  | "Public"
  | "Government"
  | "International"
  | "Other";

const chartConfig: Record<CategoryKey, ChartItem> = {
  school_count: { label: "Schools" },
  Private: { label: "Private", color: "rgb(14 165 233)" }, // sky-500
  Public: { label: "Public", color: "rgb(34 197 94)" }, // green-500
  Government: { label: "Government", color: "rgb(239 68 68)" }, // red-500
  International: { label: "International", color: "rgb(234 179 8)" }, // yellow-500
  Other: { label: "Other", color: "rgb(161 161 170)" }, // zinc-400
} as const;

const categoryColors: Record<Exclude<CategoryKey, "school_count">, string> = {
  Private: "sky",
  Public: "green",
  Government: "red",
  International: "yellow",
  Other: "zinc",
} as const;

const AttendanceItemSkeleton = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-16" />
    </div>
    <Skeleton className="h-4 w-12" />
  </div>
);

const EmptyAttendance = () => (
  <div className="col-span-2 flex flex-col items-center justify-center py-8 text-center">
    <div className="text-gray-400 mb-2">No data available</div>
    <p className="text-sm text-gray-500">
      There are no statistics available for the selected categories
    </p>
  </div>
);

export function Attendance({ data, isLoading }: AttendanceProps) {
  const categoryData =
    data?.categoryAttendanceList?.map((item) => ({
      category: item.category,
      school_count: item.schoolCount,
      fill:
        chartConfig[item.category as CategoryKey]?.color ||
        chartConfig.Other.color,
    })) || [];

  if (isLoading) {
    return (
      <Card className="w-full rounded-lg overflow-hidden">
        <div className="flex flex-col xl:flex-row w-full relative">
          <div className="w-full xl:w-[60%] p-4">
            <CardHeader className="text-center xl:text-left p-0 mb-4">
              <CardTitle>Attendance by category</CardTitle>
              <CardDescription>Loading...</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] w-full p-0">
              <div className="h-full w-full bg-muted rounded-lg" />
            </CardContent>
          </div>
          <div className="hidden xl:block absolute right-[40%] top-0 bottom-0 w-px bg-muted dark:bg-muted-foreground" />
          <div className="w-full xl:w-[40%] p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <AttendanceItemSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (!data?.categoryAttendanceList?.length) {
    return (
      <Card className="w-full rounded-lg overflow-hidden">
        <EmptyAttendance />
      </Card>
    );
  }

  return (
    <Card className="w-full rounded-lg overflow-hidden">
      <div className="flex flex-col xl:flex-row w-full relative">
        <div className="w-full xl:w-[60%] p-4">
          <CardHeader className="text-center xl:text-left p-0 mb-4">
            <CardTitle>Attendance by category</CardTitle>
            <CardDescription>{`Total Schools: ${
              data?.totalSchools || 0
            }`}</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] w-full p-0">
            <ChartContainer config={chartConfig} className="h-full">
              <div className="max-w-[400px] sm:max-w-none ml-0 sm:mx-auto">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={categoryData}
                      dataKey="school_count"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={160}
                      paddingAngle={0}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </CardContent>
        </div>

        <div className="hidden xl:block absolute right-[40%] top-0 bottom-0 w-px bg-muted dark:bg-muted-foreground" />

        <div className="w-full xl:w-[40%] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            {data?.categoryAttendanceList?.map((item) => {
              const category = item.category as keyof typeof categoryColors;
              const colorClass = categoryColors[category] || categoryColors.Other;

              return (
                <div
                  key={item.category}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-${colorClass}-500 border-2 border-${colorClass}-100`}
                    />
                    <span className="text-sm font-medium">{item.category}</span>
                    {item.percentageChange >= 0 ? (
                      <span className="text-sm text-green-500 flex items-center gap-0.5">
                        <TrendingUp className="h-3 w-3" />
                        {item.percentageChange.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="text-sm text-red-500 flex items-center gap-0.5">
                        <TrendingDown className="h-3 w-3" />
                        {item.percentageChange.toFixed(2)}%
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{item.schoolCount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}