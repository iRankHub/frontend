import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import IncomeOverview from "./income-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SchoolsIncomeChart } from "./charts/schools-chart";
import { StudentPerformanceTable } from "./performance-table";
import { ExpensesChart } from "./charts/expenses-chart";
import { Attendance } from "./charts/attendence-chart";
import { ProvincialChart } from "./charts/provincial-chart";

type Props = {};

function Reports({}: Props) {
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden bg-background pb-10">
      <div className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-3 p-5 py-4">
          <Input
            placeholder="Search name..."
            className="h-8 w-[150px] lg:w-[280px]"
          />
          <Button type="button" className="h-8">
            <Icons.addCircle className="h-5 w-5 mr-2" />
            Year
          </Button>
        </div>
        <Button type="button" className="h-8">
          <Icons.downlaod className="h-5 w-5 mr-2" />
          Download
        </Button>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-5 mt-10 mx-5 border p-3 rounded-lg">
            <IncomeOverview />
            <Tabs
              defaultValue="schools"
              className="col-span-2 w-full flex flex-col items-center"
            >
              <div className="flex items-center gap-3">
                <h4 className="text-sm font-medium">Financial Performance by : </h4>
                <TabsList className="mx-auto">
                  <TabsTrigger value="schools">School</TabsTrigger>
                  <TabsTrigger value="provincial">Provincial</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="schools" className="w-full">
                <SchoolsIncomeChart />
              </TabsContent>
              <TabsContent value="provincial" className="w-full">
                <ProvincialChart />
              </TabsContent>
            </Tabs>
          </div>

          <div className="px-5">
            <StudentPerformanceTable />
            <StudentPerformanceTable />
          </div>
        </div>
        <div className="w-96 mt-10 flex flex-col gap-10">
          <ExpensesChart />
          <Attendance />
          <ExpensesChart />
        </div>
      </div>
    </div>
  );
}

export default Reports;
