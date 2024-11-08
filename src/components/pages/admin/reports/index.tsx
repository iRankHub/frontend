import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import IncomeOverview from "./income-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SchoolsIncomeChart } from "./charts/schools-chart";
import { PerformanceTable } from "./performance-table";
import { ProvincialChart } from "./charts/provincial-chart";
import FinancialReports from "./financial-reports";
import AttendanceReports from "./attendance-reports";
import ExpensesChart from "./expenses-chart";

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
        <TabsList className="max-w-96 bg-white shadow-md border mx-5">
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
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
      </Tabs>
    </div>
  );
}

export default Reports;
