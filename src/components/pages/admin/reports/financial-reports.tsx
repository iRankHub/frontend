import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import IncomeOverview from "./income-overview";
import { ProvincialChart } from "./charts/provincial-chart";
import { SchoolsIncomeChart } from "./charts/schools-chart";
import ExpensesChart from "./expenses-chart";
import { getFinancialReports } from "@/core/analytics";
import {
  GetFinancialReportsType,
  ReportsGroup_by,
  ReportType,
} from "@/types/analytics";
import {
  DateRange,
  ExpenseCategory,
  SchoolPerformanceData,
} from "@/lib/grpc/proto/analytics/analytics_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";

type TournamentIncomeType = {
  tournamentId: string;
  tournamentName: string;
  leagueId: string;
  leagueName: string;
  totalIncome: number;
  netRevenue: number;
  netProfit: number;
  tournamentDate: string;
};

type Props = {
  tournamentId?: number;
};

function FinancialReports({ tournamentId }: Props) {
  const { user } = useUserStore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedTab, setSelectedTab] = useState("schools");
  const [tournamentIncomeList, setTournamentIncomeList] = useState<
    TournamentIncomeType[]
  >([]);
  const [expenseCategoriesList, setExpenseCategoriesList] = useState<
    ExpenseCategory.AsObject[]
  >([]);
  const [schoolsPerformance, setSchoolsPerformance] = useState<
    SchoolPerformanceData.AsObject[]
  >([]);

  // Generate array of last 10 years
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return year;
  });

  const fetchFinancialReports = async () => {
    try {
      setIsLoading(true);

      // Create date range for selected year
      const dateRange = new DateRange();
      dateRange.setStartDate(`${selectedYear}-01-01`);
      dateRange.setEndDate(`${selectedYear}-12-31`);

      // Fetch income overview data
      const incomeOptions: GetFinancialReportsType = {
        date_range: dateRange,
        group_by: ReportsGroup_by.Category,
        report_type: ReportType.IncomeOverview,
        token: user?.token || "",
        tournament_id: tournamentId || 0,
      };

      // Fetch expense data
      const expenseOptions: GetFinancialReportsType = {
        date_range: dateRange,
        group_by: ReportsGroup_by.Category,
        report_type: ReportType.Expenses,
        token: user?.token || "",
        tournament_id: tournamentId || 0,
      };

      // Fetch performance data with group_by based on selected tab
      const performanceOptions: GetFinancialReportsType = {
        date_range: dateRange,
        group_by:
          selectedTab === "schools"
            ? ReportsGroup_by.Category
            : ReportsGroup_by.Location,
        report_type: ReportType.SchoolFinancialPerformance,
        token: user?.token || "",
        tournament_id: tournamentId || 0,
      };

      // Fetch all reports in parallel
      const [incomeResponse, expenseResponse, performanceResponse] =
        await Promise.all([
          getFinancialReports(incomeOptions),
          getFinancialReports(expenseOptions),
          getFinancialReports(performanceOptions),
        ]);

      setTournamentIncomeList(incomeResponse.tournamentIncomesList || []);
      setExpenseCategoriesList(expenseResponse.expenseCategoriesList || []);
      setSchoolsPerformance(performanceResponse.schoolPerformanceList || []);
    } catch (error) {
      console.error("Error fetching financial reports:", error);
      toast({
        title: "Error",
        description:
          "Failed to fetch financial reports. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user || !user.token) return;
    fetchFinancialReports();
  }, [user, tournamentId, selectedYear, selectedTab]); // Added selectedTab to dependencies

  return (
    <div className="w-full flex gap-5">
      <div className="flex-1">
        <div className="grid mt-10 border rounded-lg mx-5">
          {isLoading ? (
            <div className="w-full h-48 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
          ) : (
            <IncomeOverview
              tournamentIncomeList={tournamentIncomeList}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              years={years}
            />
          )}
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="mt-10 w-full flex flex-col h-full"
          >
            <div className="flex items-center justify-start px-6 gap-3">
              <h3 className="font-semibold text-sm">
                Financial performance by:
              </h3>
              <TabsList className="max-w-52">
                <TabsTrigger value="schools">School</TabsTrigger>
                <TabsTrigger value="provincial">Provincial</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="schools" className="w-full h-full">
              <SchoolsIncomeChart data={schoolsPerformance} />
            </TabsContent>
            <TabsContent value="provincial" className="w-full h-full">
              <ProvincialChart data={schoolsPerformance} />
            </TabsContent>
          </Tabs>
          <ExpensesChart expenseCategoriesList={expenseCategoriesList} />
        </div>
      </div>
    </div>
  );
}

export default FinancialReports;
