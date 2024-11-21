import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TournamentIncome } from "@/lib/grpc/proto/analytics/analytics_pb";

type ChartDataPoint = {
  month: string;
  revenue: number;
};

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--success-green))",
  },
} satisfies ChartConfig;

export function OverviewChart({ data }: { data: TournamentIncome.AsObject[] }) {
  // Process tournament data into monthly revenue
  const processChartData = (): ChartDataPoint[] => {
    const monthlyData = data.reduce(
      (acc: { [key: string]: number }, tournament) => {
        const date = new Date(tournament.tournamentDate);
        const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
        acc[monthKey] = (acc[monthKey] || 0) + tournament.netRevenue;
        return acc;
      },
      {}
    );

    return Object.entries(monthlyData)
      .map(([dateKey, revenue]) => {
        const [year, month] = dateKey.split("-");
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return {
          month: date.toLocaleString("default", { month: "short" }),
          revenue: revenue,
        };
      })
      .sort(
        (a, b) => new Date(a.month).getTime() - new Date(b.month).getTime()
      );
  };

  const chartData = processChartData();

  return (
    <Card className="border-none w-full h-full mt-8">
      <CardContent className="w-full border-none">
        <ChartContainer
          config={chartConfig}
          className="border-none w-full h-52"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
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
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="revenue"
                type="linear"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
