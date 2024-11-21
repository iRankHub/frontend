"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type ExpenseCategory = {
  name: string;
  amount: number;
  color: string;
  borderColor: string;
  percentage: number;
  trend: number;
};

type Props = {
  data: ExpenseCategory[];
};

type ChartConfigItem = {
  label: string;
  color?: string;
};

type ChartConfig = {
  [key: string]: ChartConfigItem;
};

const getChartConfig = (categories: ExpenseCategory[]): ChartConfig => {
  const config: ChartConfig = {
    amount: {
      label: "Amount",
    },
  };

  categories.forEach((category) => {
    const key = category.name.toLowerCase();
    config[key] = {
      label: category.name,
      color: category.color
        .replace("bg-", "hsl(var(--")
        .replace("-500", "))")
        .replace("-", "-"),
    };
  });

  return config;
};

export function ExpensesPerCategory({ data }: Props) {
  const chartData = data.map((category) => ({
    category: category.name.toLowerCase(),
    amount: category.amount,
    fill: `var(--color-${category.name.toLowerCase()})`,
  }));

  const chartConfig = getChartConfig(data);

  // Calculate total trend
  const averageTrend =
    data.reduce((sum, category) => sum + category.trend, 0) / data.length;

  // Calculate total expenses
  const totalExpenses = data.reduce(
    (sum, category) => sum + category.amount,
    0
  );

  return (
    <Card className="m-0 items-start justify-start border-0 shadow-none">
      <CardContent className="flex-1 pb-0 border-0 shadow-none">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  nameKey="category"
                  formatter={(value: any) => {
                    if (typeof value === "number") {
                      return `RWF ${value.toLocaleString()}`;
                    }
                    return value;
                  }}
                />
              }
            />
            <RadialBar dataKey="amount" background>
              <LabelList
                position="insideStart"
                dataKey="category"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {averageTrend >= 0 ? (
            <>
              Trending up by {averageTrend.toFixed(1)}% this month{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Trending down by {Math.abs(averageTrend).toFixed(1)}% this month{" "}
              <TrendingDown className="h-4 w-4 text-red-500" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Total expenses: RWF {totalExpenses.toLocaleString()}
        </div>
      </CardFooter>
    </Card>
  );
}
