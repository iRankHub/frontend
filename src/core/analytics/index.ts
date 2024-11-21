import { AttendanceReportRequest, AttendanceReportResponse,  FinancialReportRequest, FinancialReportResponse } from "@/lib/grpc/proto/analytics/analytics_pb";
import { analyticsClient } from "../grpc-clients";
import { GetAttendanceReportsType, GetFinancialReportsType } from "@/types/analytics";

export const getFinancialReports = async ({
    token,
    tournament_id,
    group_by,
    date_range,
    report_type
}: GetFinancialReportsType): Promise<FinancialReportResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new FinancialReportRequest();
        request.setToken(token);
        request.setTournamentId(String(tournament_id));
        request.setGroupBy(group_by)
        request.setDateRange(date_range)
        request.setReportType(report_type)

        console.log(request.toObject());

        analyticsClient.getFinancialReports(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                console.log(response.toObject())
                resolve(response.toObject());
            }
        });
    });
}

export const GetAttendanceReports = async ({
    token,
    tournament_id,
    date_range,
    report_type,
    countries,
}: GetAttendanceReportsType): Promise<AttendanceReportResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new AttendanceReportRequest();
        request.setToken(token);
        request.setTournamentId(String(tournament_id));
        request.setDateRange(date_range)
        request.setReportType(report_type)
        request.setCountriesList(countries)

        analyticsClient.getAttendanceReports(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}