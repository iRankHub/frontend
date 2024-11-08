"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

export const description = "A linear line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 321 },
  { month: "Augu", desktop: 150 },
  { month: "September", desktop: 170 },

];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--success-green))",
  },
} satisfies ChartConfig;

export function OverviewChart() {
  return (
    <Card className="border-none w-full h-full mt-8">
      <CardContent className="w-full border-none">
        <ChartContainer config={chartConfig} className="border-none w-full h-52">
          <LineChart
            accessibilityLayer
            data={chartData}
            className="border-none w-full"
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} className="border-none" />
            <XAxis
              dataKey="month"
              tickLine={false}
              className="border-none"
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
