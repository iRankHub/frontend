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

const initialData = [
  { date: "2024-09-21", count: 26 },
  { date: "2024-09-23", count: 38 },
  { date: "2024-09-25", count: 11 },
  { date: "2024-09-26", count: 15 },
  { date: "2024-09-27", count: 21 },
  { date: "2024-09-28", count: 26 },
  { date: "2024-09-29", count: 6 },
  { date: "2024-09-30", count: 16 },
];

const PerformanceTrendChart = () => {
  const [chartData, setChartData] = useState(initialData);
  const [filterValue, setFilterValue] = useState("90d");

  useEffect(() => {
    // Simulate API call and filter data
    const filterData = () => {
      const today = new Date("2024-09-30");
      let filteredData;
      switch (filterValue) {
        case "7d":
          filteredData = initialData.filter((item) => {
            const itemDate = new Date(item.date);
            const diffTime = Math.abs(today.getTime() - itemDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7;
          });
          break;
        case "30d":
          filteredData = initialData.filter((item) => {
            const itemDate = new Date(item.date);
            const diffTime = Math.abs(today.getTime() - itemDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 30;
          });
          break;
        default:
          filteredData = initialData;
      }
      setChartData(filteredData);
    };

    filterData();
  }, [filterValue]);

  return (
    <Card className="w-full h-full border-muted">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Tournament Registrations</CardTitle>
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
              tickFormatter={(value) => value.slice(0, 3)}
            />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} /> */}
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
            {/* <Area
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.4}
              strokeWidth={2}
              stackId="a"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceTrendChart;
