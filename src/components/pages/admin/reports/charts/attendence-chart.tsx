"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface ExpenseData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: ExpenseData[] = [
  { name: "Food", value: 250, percentage: 43.29, color: "#3b82f6" },
  { name: "transport", value: 350, percentage: 36.16, color: "#10b981" },
  { name: "perdiem", value: 350, percentage: 36.16, color: "#22c55e" },
  { name: "awarding", value: 350, percentage: 36.16, color: "#16a34a" },
  { name: "stationary", value: 250, percentage: 40.22, color: "#ef4444" },
];

export function Attendance() {
  return (
    <Card className="flex flex-col border-0 w-full">
      <CardHeader className="items-center">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-80"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="mt-4 space-y-2 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
              <div className="flex items-center">
                {item.percentage > 40 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span>{item.percentage.toFixed(2)}%</span>
              </div>
              <span className="ml-2 text-gray-500">{item.value}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
