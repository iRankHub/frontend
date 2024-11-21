import { LineChart, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
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
import { SchoolPerformanceData } from "@/lib/grpc/proto/analytics/analytics_pb";

type Props = {
  data: SchoolPerformanceData.AsObject[];
};

const chartConfig = {
  totalAmount: {
    label: "Total Amount",
    color: "hsl(var(--chart-1))",
  },
  schoolCount: {
    label: "School Count",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function EmptyChart() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-muted p-3 mb-4">
          <LineChart size={24} className="text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-sm">
          No chart data available. Try searching a tournament or changing year
        </p>
      </div>
    </div>
  );
}

export function ProvincialChart({ data }: Props) {
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

  // Calculate total amounts for percentage change
  const totalAmount = data.reduce((sum, item) => sum + item.totalAmount, 0);
  const averageSchoolCount = Math.round(data.reduce((sum, item) => sum + item.schoolCount, 0) / data.length);

  return (
    <Card className="border-0 w-full flex flex-col justify-between h-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 w-full pb-2">
        <CardTitle className="text-lg">Provincial Performance</CardTitle>
        <CardDescription>Schools by Province</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-72 w-full"
        >
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 25, bottom: 20 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="groupName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value) => formatCurrency(value)}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={60}
            />
            <Tooltip
              cursor={false}
              formatter={(value: number, name: string) => [
                name === "totalAmount" ? formatCurrency(value) : value,
                name === "totalAmount" ? "Total Amount" : "School Count"
              ]}
              labelFormatter={(label) => `Province: ${label}`}
            />
            <Bar 
              name="totalAmount" 
              dataKey="totalAmount" 
              fill="hsl(var(--chart-1))" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              name="schoolCount" 
              dataKey="schoolCount" 
              fill="hsl(var(--chart-2))" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm pt-2">
        <div className="flex gap-2 font-medium leading-none">
          Total Revenue: {formatCurrency(totalAmount)}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Average of {averageSchoolCount} schools per province
        </div>
      </CardFooter>
    </Card>
  );
}
