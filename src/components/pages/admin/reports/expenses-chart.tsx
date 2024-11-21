import React, { useMemo } from "react";
import { ExpensesPerCategory } from "./charts/expenses-per-category";
import { TrendingDown, TrendingUp, LineChart } from "lucide-react";
import { ExpenseCategory } from "@/lib/grpc/proto/analytics/analytics_pb";

type CategoryDisplayInfo = {
  name: string;
  amount: number;
  color: string;
  borderColor: string;
  percentage: number;
  trend: number;
};

type Props = {
  expenseCategoriesList: ExpenseCategory.AsObject[];
};

function EmptyExpensesChart() {
  return (
    <div className="w-full flex items-center justify-center h-64">
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

function ExpensesChart({ expenseCategoriesList }: Props) {
  const expenseCategories = useMemo(() => {
    if (!expenseCategoriesList.length) return [];

    // Calculate totals for each category across all tournaments
    const totals = expenseCategoriesList.reduce(
      (acc, expense) => ({
        food: acc.food + expense.foodExpense,
        transport: acc.transport + expense.transportExpense,
        perDiem: acc.perDiem + expense.perDiemExpense,
        awarding: acc.awarding + expense.awardingExpense,
        stationary: acc.stationary + expense.stationaryExpense,
        other: acc.other + expense.otherExpenses,
        total: acc.total + expense.totalExpense,
      }),
      { food: 0, transport: 0, perDiem: 0, awarding: 0, stationary: 0, other: 0, total: 0 }
    );

    // Create display categories with UI-specific properties
    const categories: CategoryDisplayInfo[] = [
      {
        name: "Food",
        amount: totals.food,
        color: "bg-sky-500",
        borderColor: "border-sky-100",
        percentage: (totals.food / totals.total) * 100,
        trend: 0,
      },
      {
        name: "Transport",
        amount: totals.transport,
        color: "bg-green-500",
        borderColor: "border-green-100",
        percentage: (totals.transport / totals.total) * 100,
        trend: 0,
      },
      {
        name: "Per Diem",
        amount: totals.perDiem,
        color: "bg-purple-500",
        borderColor: "border-purple-100",
        percentage: (totals.perDiem / totals.total) * 100,
        trend: 0,
      },
      {
        name: "Awarding",
        amount: totals.awarding,
        color: "bg-yellow-500",
        borderColor: "border-yellow-100",
        percentage: (totals.awarding / totals.total) * 100,
        trend: 0,
      },
      {
        name: "Stationary",
        amount: totals.stationary,
        color: "bg-red-500",
        borderColor: "border-red-100",
        percentage: (totals.stationary / totals.total) * 100,
        trend: 0,
      },
    ];

    return categories;
  }, [expenseCategoriesList]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const hasData = expenseCategoriesList.length > 0;

  return (
    <div className="mt-10 px-5">
      <div className="mt-5 w-full rounded-md p-10">
        <h3 className="text-lg font-semibold">Expenses per category</h3>
        {hasData ? (
          <div className="flex items-center justify-between gap-10">
            <ExpensesPerCategory data={expenseCategories} />
            <div className="h-full grid grid-cols-2 gap-4 justify-center">
              {expenseCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color} border-2 ${category.borderColor}`}></div>
                    <span className="text-sm">{category.name}</span>
                    <span
                      className={`text-sm ${
                        category.trend >= 0 ? "text-green-500" : "text-red-500"
                      } flex items-center gap-0.5`}
                    >
                      {category.trend >= 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {category.percentage.toFixed(2)}%
                    </span>
                  </div>
                  <span className="text-sm">{formatCurrency(category.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <EmptyExpensesChart />
        )}
      </div>
    </div>
  );
}

export default ExpensesChart;
