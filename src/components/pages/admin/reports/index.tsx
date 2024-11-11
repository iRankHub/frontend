import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialReports from "./financial-reports";
import AttendanceReports from "./attendance-reports";
import ExpensesChart from "./expenses-chart";
import PerformanceStats from "./PerformanceStats";

type Props = {};

function Reports({}: Props) {
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden bg-background pb-10">
      <header className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between">
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
      </header>

      <Tabs defaultValue="financial" className="mt-4 mx-auto w-full">
        <TabsList className="max-w-96 bg-white dark:bg-muted shadow-md border dark:border-none dark:shadow-none  mx-5">
          <TabsTrigger value="financial" className="data-[state=active]:text-white">Financial</TabsTrigger>
          <TabsTrigger value="attendance" className="data-[state=active]:text-white">Attendance</TabsTrigger>
          <TabsTrigger value="expenses" className="data-[state=active]:text-white">Expenses</TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:text-white">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="financial" className="w-full h-full">
          <FinancialReports />
        </TabsContent>
        <TabsContent value="attendance" className="w-full h-full">
          <AttendanceReports />
        </TabsContent>
        <TabsContent value="expenses" className="w-full h-full">
          <ExpensesChart />
        </TabsContent>
        <TabsContent value="performance" className="w-full h-full">
          <PerformanceStats />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Reports;
