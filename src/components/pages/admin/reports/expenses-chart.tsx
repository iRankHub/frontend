import React from "react";
import { ExpensesPerCategory } from "./charts/expenses-per-category";
import { TrendingDown } from "lucide-react";
import { TrendingUp } from "lucide-react";

type Props = {};

function ExpensesChart({}: Props) {
  return (
    <div className="px-5">
      <div className="mt-5 w-full border rounded-md p-10">
        <h3 className="text-lg font-semibold">Expenses per category</h3>
        <div className="flex items-center justify-between gap-10">
          <ExpensesPerCategory />
          <div className="space-y-3 h-full flex flex-col gap-4 justify-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-sky-100"></div>
                <span className="text-sm">Food</span>
                <span className="text-sm text-sky-500 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  43.29%
                </span>
              </div>
              <span className="text-sm">250</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-100"></div>
                <span className="text-sm">Transport</span>
                <span className="text-sm text-green-500 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  36.16%
                </span>
              </div>
              <span className="text-sm">350</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-100"></div>
                <span className="text-sm">perdiem</span>
                <span className="text-sm text-green-500 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  36.16%
                </span>
              </div>
              <span className="text-sm">350</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-sky-100"></div>
                <span className="text-sm">Awarding</span>
                <span className="text-sm text-green-500 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  36.16%
                </span>
              </div>
              <span className="text-sm">350</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-100"></div>
                <span className="text-sm">stationary</span>
                <span className="text-sm text-red-500 flex items-center gap-0.5">
                  <TrendingDown className="h-3 w-3" />
                  36.16%
                </span>
              </div>
              <span className="text-sm">350</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesChart;
