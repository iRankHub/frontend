import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import IncomeOverview from "./income-overview";
import { ProvincialChart } from "./charts/provincial-chart";
import { SchoolsIncomeChart } from "./charts/schools-chart";
import { PerformanceTable } from "./performance-table";

type Props = {};

function FinancialReports({}: Props) {
  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <div className="grid grid-cols-2 mt-10 border rounded-lg mx-5">
          <div className="border-r">
            <IncomeOverview />
          </div>
          <div>
            <Tabs
              defaultValue="schools"
              className="w-full flex flex-col h-full"
            >
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-semibold text-sm">Finanical performance by:</h3>
                <TabsList className="max-w-52">
                  <TabsTrigger value="schools">School</TabsTrigger>
                  <TabsTrigger value="provincial">Provincial</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="schools" className="w-full h-full">
                <SchoolsIncomeChart />
              </TabsContent>
              <TabsContent value="provincial" className="w-full h-full">
                <ProvincialChart />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="px-5 mt-12">
          <PerformanceTable type="Student" />
          <PerformanceTable type="Volunteer" />
        </div>
      </div>
      {/* <div className="w-96 mt-10 flex flex-col gap-10">
          <ExpensesChart />
          <Attendance />
          <ExpensesChart />
        </div> */}
    </div>
  );
}

export default FinancialReports;
