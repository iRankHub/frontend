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

type TimeRange = "7d" | "30d" | "90d";

interface NoDataDisplayProps {
  timeRange: TimeRange;
}

const getTimeRangeMessage = (timeRange: TimeRange): string => {
  switch (timeRange) {
    case "7d":
      return "No debate performances recorded in the last 7 days.";
    case "30d":
      return "No debate performances recorded in the last 30 days.";
    case "90d":
      return "No debate performances recorded in the last 3 months.";
  }
};

const NoDataDisplay: React.FC<NoDataDisplayProps> = ({ timeRange }) => (
  <div className="flex flex-col items-center justify-center h-[300px] text-center p-6 space-y-4">
    <div className="rounded-full bg-orange-100 p-3">
      <AlertCircle className="w-6 h-6 text-orange-500" />
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-lg text-gray-900">No Performance Data Available</h3>
      <p className="text-gray-500 text-sm max-w-[400px]">
        {getTimeRangeMessage(timeRange)}
        <br />
        Participate in debates to start tracking your progress!
      </p>
    </div>
  </div>
);

const LoadingState: React.FC = () => (
  <div className="flex items-center justify-center h-[300px]">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="w-12 h-12 bg-orange-100 rounded-full" />
      <div className="h-4 w-48 bg-orange-100 rounded" />
    </div>
  </div>
);

const PerformanceTrendChart: React.FC = () => {
  const [chartData, setChartData] = useState<PerformanceData.AsObject[]>([]);
  const [filterValue, setFilterValue] = useState<TimeRange>("90d");
  const [performance, setPerformance] = useState<PerformanceData.AsObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUserStore();

  const filterData = (data: PerformanceData.AsObject[]): void => {
    const today = new Date();
    let filteredData: PerformanceData.AsObject[];

    const getDayDifference = (itemDate: string): number => {
      const date = new Date(itemDate);
      const diffTime = Math.abs(today.getTime() - date.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    switch (filterValue) {
      case "7d":
        filteredData = data.filter((item) => getDayDifference(item.tournamentDate) <= 7);
        break;
      case "30d":
        filteredData = data.filter((item) => getDayDifference(item.tournamentDate) <= 30);
        break;
      default:
        filteredData = data;
    }

    setChartData(filteredData);
  };

  useEffect(() => {
    if (!user) return;

    setIsLoading(true);
    
    const params = {
      user_id: 26,
      start_date: "2024-10-10",
      end_date: "2024-10-30",
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
  }, [user]);

  useEffect(() => {
    filterData(performance);
  }, [filterValue, performance]);

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
