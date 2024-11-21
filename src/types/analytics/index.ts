import { DateRange } from "@/lib/grpc/proto/analytics/analytics_pb";

export interface GetAttendanceReportsType {
    token: string;
    tournament_id: number;
    report_type: string;
    date_range: DateRange;
    countries: Array<string>
}

export enum ReportType {
    IncomeOverview = "income_overview",
    SchoolFinancialPerformance = "school_financial_performance",
    Expenses = "expenses"
}

export enum ReportsGroup_by {
    Category = "category",
    Location = "location"
}

export interface GetFinancialReportsType {
    token: string;
    tournament_id: number;
    report_type: ReportType | "";
    group_by: ReportsGroup_by | "";
    date_range: DateRange;
}