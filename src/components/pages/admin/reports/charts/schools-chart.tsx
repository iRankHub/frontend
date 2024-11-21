import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SchoolPerformanceData } from "@/lib/grpc/proto/analytics/analytics_pb";
import {BarChart as BarChartLucide} from "lucide-react"

type Props = {
  data: SchoolPerformanceData.AsObject[];
};

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-income-2))",
  },
} satisfies ChartConfig;

function EmptyChart() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-muted p-3 mb-4">
          <BarChartLucide size={24} className="text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-sm">
          No chart data available. Try searching a tournament or changing year
        </p>
      </div>
    </div>
  );
}

export function SchoolsIncomeChart({ data }: Props) {
  if (!data?.length) {
    return (
      <Card className="border-0 w-full flex flex-col justify-between h-full">
        <EmptyChart />
      </Card>
    );
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="border-0 w-full flex flex-col justify-between h-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row w-full">
        <div className="flex items-center justify-start gap-3 px-6 w-full">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue" />
            <small>Total Amount</small>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-success-light" />
            <small>School Count</small>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 mt-auto">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-52 w-full"
        >
          <BarChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="groupName"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              tickFormatter={(value) => formatCurrency(value)}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `Group: ${label}`}
            />
            <Bar 
              dataKey="totalAmount" 
              fill="hsl(var(--chart-income-2))" 
              name="Total Amount"
            />
            <Bar 
              dataKey="schoolCount" 
              fill="hsl(var(--chart-success))" 
              name="School Count"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
