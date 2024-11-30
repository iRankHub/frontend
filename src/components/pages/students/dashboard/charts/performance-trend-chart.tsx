import React, { useState, useEffect } from "react";
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
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle } from "lucide-react";
import { useUserStore } from "@/stores/auth/auth.store";
import { getStudentPerformance } from "@/core/debates/rankings";
import {
  PerformanceData,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { LoadingState, NoDataDisplay } from "@/components/no-data-display";

type TimeRange = "7d" | "30d" | "90d";

const PerformanceTrendChart: React.FC = () => {
  const [chartData, setChartData] = useState<PerformanceData.AsObject[]>([]);
  const [filterValue, setFilterValue] = useState<TimeRange>("90d");
  const [performance, setPerformance] = useState<PerformanceData.AsObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUserStore();

  const getDateRange = (range: TimeRange) => {
    const endDate = new Date();
    const startDate = new Date();
    
    switch (range) {
      case "7d":
        startDate.setDate(endDate.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(endDate.getDate() - 30);
        break;
      default:
        startDate.setDate(endDate.getDate() - 90);
    }
    
    return {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0]
    };
  };

  const filterData = (data: PerformanceData.AsObject[]): void => {
    const today = new Date();
    let filteredData: PerformanceData.AsObject[];

    switch (filterValue) {
      case "7d": {
        const cutoffDate = new Date(today);
        cutoffDate.setDate(today.getDate() - 7);
        filteredData = data.filter((item) => {
          const itemDate = new Date(item.tournamentDate);
          return itemDate >= cutoffDate;
        });
        break;
      }
      case "30d": {
        const cutoffDate = new Date(today);
        cutoffDate.setDate(today.getDate() - 30);
        filteredData = data.filter((item) => {
          const itemDate = new Date(item.tournamentDate);
          return itemDate >= cutoffDate;
        });
        break;
      }
      default: {
        const cutoffDate = new Date(today);
        cutoffDate.setDate(today.getDate() - 90);
        filteredData = data.filter((item) => {
          const itemDate = new Date(item.tournamentDate);
          return itemDate >= cutoffDate;
        });
      }
    }

    // Sort the data chronologically (oldest to newest)
    const sortedData = [...filteredData].sort((a, b) => 
      new Date(a.tournamentDate).getTime() - new Date(b.tournamentDate).getTime()
    );

    setChartData(sortedData);
  };

  useEffect(() => {
    if (!user) return;

    setIsLoading(true);
    
    const dateRange = getDateRange(filterValue);
    const params = {
      user_id: 26,
      start_date: dateRange.startDate,
      end_date: dateRange.endDate,
      token: user.token,
    };

    getStudentPerformance(params)
      .then((response: PerformanceData.AsObject[]) => {
        setPerformance(response);
        filterData(response);
      })
      .catch((error: Error) => {
        console.error("Failed to fetch tournament registrations:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, filterValue]);  // Added filterValue dependency

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
        {isLoading ? (
          <LoadingState />
        ) : chartData.length > 0 ? (
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
                dataKey="tournamentDate"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value: string) =>
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
        ) : (
          <NoDataDisplay timeRange={filterValue} />
        )}
      </CardContent>
    </Card>
  );
};

export default PerformanceTrendChart;
