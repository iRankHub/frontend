import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
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
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { DailyRegistration } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentRegistration } from "@/core/tournament/list";
import { getStudentPerformance } from "@/core/debates/rankings";
import {
  PerformanceData,
  PerformanceResponse,
} from "@/lib/grpc/proto/debate_management/debate_pb";

const PerformanceTrendChart = () => {
  const [chartData, setChartData] = useState<PerformanceData.AsObject[]>([]);
  const [filterValue, setFilterValue] = useState("90d");
  const [performance, setPerformance] = useState<PerformanceData.AsObject[]>(
    []
  );
  const { user } = useUserStore();

  const filterData = (data: PerformanceData.AsObject[]) => {
    const today = new Date();
    let filteredData;

    switch (filterValue) {
      case "7d":
        filteredData = data.filter((item) => {
          const itemDate = new Date(item.tournamentDate);
          const diffTime = Math.abs(today.getTime() - itemDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 7;
        });
        break;
      case "30d":
        filteredData = data.filter((item) => {
          const itemDate = new Date(item.tournamentDate);
          const diffTime = Math.abs(today.getTime() - itemDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 30;
        });
        break;
      default:
        filteredData = data;
    }

    setChartData(filteredData);
  };

  useEffect(() => {
    if (!user) return;

    const params = {
      user_id: 26,
      start_date: "2024-10-10",
      end_date: "2024-10-30",
      token: user.token,
    };

    getStudentPerformance(params)
      .then((response) => {
        setPerformance(response);
        filterData(response);
      })
      .catch((error) => {
        console.error("Failed to fetch tournament registrations:", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Card className="w-full h-full border-muted">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Performance Trend</CardTitle>
        </div>
        <Select value={filterValue} onValueChange={setFilterValue}>
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
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#EF5F00"
              fill="#EF5F00"
              fillOpacity={0.4}
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceTrendChart;
