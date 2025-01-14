"use client";

import { cn } from "@/lib/utils";
import { NoDataDisplay } from "@/components/no-data-display";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TimeRange = "7d" | "30d" | "90d";

export function PerformanceTrendChart() {
  const [filterValue, setFilterValue] = useState<TimeRange>("90d");
  return (
    <Card className="w-full h-full border-muted">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="flex items-center gap-2">
            Performance Trend
          </CardTitle>
        </div>
        <Select value={filterValue} onValueChange={(value: TimeRange) => setFilterValue(value)}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto text-primary bg-[#F4F5F9]"
            aria-label="Select a time range"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <NoDataDisplay timeRange={filterValue} type="volunteer" />
      </CardContent>
    </Card>

  );
}

const Dot = ({ color }: { color: string }) => (
  <span className={cn("w-2 h-2 rounded-full bg-white", color)} />
);
