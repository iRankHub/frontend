"use client";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
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

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
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
    <Card className="border-0 w-full p-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <CardHeader className="text-center lg:text-left">
            <CardTitle>Pie Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="lg:h-[400px] w-full px-0 lg:px-6">
            <ChartContainer config={chartConfig} className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </div>

        <div className="lg:w-[500px] p-4 lg:p-6 border-t lg:border-t-0 lg:border-l">
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:max-w-none">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-1 pb-2 border-b last:border-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium capitalize">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">
                    ${item.value}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  {item.percentage > 40 ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span>{item.percentage.toFixed(2)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
