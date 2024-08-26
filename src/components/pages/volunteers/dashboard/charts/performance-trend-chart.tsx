"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

// mobile should be a few pixels less than desktop
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PerformanceTrendChart() {
  return (
    //  className="w-full min-h-40 px-4 py-6 bg-background rounded-lg border-2 border-muted"
    <Card className="w-full h-full border-muted">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Performance Trend</CardTitle>
          {/* <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription> */}
        </div>
        <Select>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto text-primary bg-[#F4F5F9]"
            aria-label="Select a value"
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
        <ChartContainer config={chartConfig} className="w-full max-h-96 mt-5">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="linear"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="items-center justify-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none items-center">
          <Dot color="bg-success-green" /> Average Performance
        </div>
        <div className="leading-none text-muted-foreground flex gap-2 items-center">
          <Dot color="bg-primary" /> Your performance
        </div>
      </CardFooter>
    </Card>
  );
}

const Dot = ({ color }: { color: string }) => (
  <span className={cn("w-2 h-2 rounded-full bg-white", color)} />
);
