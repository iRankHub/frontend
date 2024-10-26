import {
    GetVolunteerRankingRequest,
    GetVolunteerRankingResponse,
    OverallRankingRequest,
    OverallRankingResponse,
    OverallSchoolRankingResponse,
    PerformanceData,
    PerformanceRequest,
    PerformanceResponse,
    SchoolPerformanceResponse,
    SchoolRanking,
    StudentRanking,
    StudentTournamentStatsRequest,
    StudentTournamentStatsResponse,
    TeamRanking,
    TournamentRankingRequest,
    TournamentSchoolRankingRequest,
    TournamentTeamsRankingRequest,
    TournamentVolunteerRankingRequest,
    VolunteerPerformanceData,
    VolunteerTournamentRank,
    VolunteerTournamentStatsRequest,
    VolunteerTournamentStatsResponse
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";

export const getTournamentStudentRanking = async ({
    token,
    tournament_id,
    page,
    page_size,
}: {
    token: string;
    tournament_id: number;
    page: number;
    page_size: number;
}): Promise<StudentRanking.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new TournamentRankingRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setPage(page);
        request.setPageSize(page_size);

        debateClient.getTournamentStudentRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().rankingsList);
            }
        });
    });
}

export const getOverallStudentRanking = async ({
    token,
    user_id,
}: {
    token: string;
    user_id: number;
}): Promise<OverallRankingResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new OverallRankingRequest();
        request.setToken(token);
        request.setUserId(user_id);

        debateClient.getOverallStudentRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getStudentOverallPerformance = async ({
    token,
    user_id,
    start_date,
    end_date,
}: {
    token: string;
    user_id: number;
    start_date: string;
    end_date: string;
}): Promise<PerformanceResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new PerformanceRequest();
        request.setToken(token);
        request.setUserId(user_id);
        request.setStartDate(start_date);
        request.setEndDate(end_date);

        debateClient.getStudentOverallPerformance(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getStudentTournamentStats = async ({
    student_id,
    token
}: {
    student_id: number;
    token: string;
}): Promise<StudentTournamentStatsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new StudentTournamentStatsRequest();
        request.setToken(token);
        request.setStudentId(student_id);

        debateClient.getStudentTournamentStats(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    });
}

export const getStudentPerformance = async ({
    end_date,
    start_date,
    token,
    user_id
}: {
        end_date: string,
        start_date: string,
        token: string;
        user_id: number;
}): Promise<PerformanceData.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new PerformanceRequest();
        request.setEndDate(end_date);
        request.setStartDate(start_date);
        request.setUserId(user_id);
        request.setToken(token);

        debateClient.getStudentOverallPerformance(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().performanceDataList)
            }
        })
    })
}

// schools
export const getTournamentSchoolRanking = async ({
    token,
    tournament_id,
}: {
    token: string;
    tournament_id: number;
}): Promise<SchoolRanking.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new TournamentSchoolRankingRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setPage(1);
        request.setPageSize(200);

        debateClient.getTournamentSchoolRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().rankingsList);
            }
        });
    });
}

export const getOverallSchoolRanking = async ({
    token,
    user_id,
}: {
    token: string;
    user_id: number;
}): Promise<OverallSchoolRankingResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new OverallRankingRequest();
        request.setToken(token);
        request.setUserId(user_id);

        debateClient.getOverallSchoolRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getSchoolOverallPerformance = async ({
    token,
    user_id,
    start_date,
    end_date,
}: {
    token: string;
    user_id: number;
    start_date: string;
    end_date: string;
}): Promise<SchoolPerformanceResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new PerformanceRequest();
        request.setToken(token);
        request.setUserId(user_id);
        request.setStartDate(start_date);
        request.setEndDate(end_date);

        debateClient.getSchoolOverallPerformance(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getTournamentTeamsRanking = async ({
    token,
    tournament_id,
    page,
    page_size,
}: {
    token: string;
    tournament_id: number;
    page: number;
    page_size: number;
}): Promise<TeamRanking.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new TournamentTeamsRankingRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setPage(page);
        request.setPageSize(page_size);

        debateClient.getTournamentTeamsRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().rankingsList);
            }
        });
    });
}

// volunteers
export const getOverallVolunteerRanking = async ({
    token,
    user_id,
}: {
    token: string;
    user_id: number;
}): Promise<GetVolunteerRankingResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetVolunteerRankingRequest();
        request.setToken(token);

        debateClient.getVolunteerRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}


export const getVolunteerChartOverallPerformance = async ({
    token,
    user_id,
    start_date,
    end_date,
}: {
    token: string;
    user_id: number;
    start_date: string;
    end_date: string;
}): Promise<VolunteerPerformanceData.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new PerformanceRequest();
        request.setToken(token);
        request.setUserId(user_id);
        request.setStartDate(start_date);
        request.setEndDate(end_date);

        debateClient.getVolunteerPerformance(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().performanceDataList);
            }
        });
    });
}

export const getVolunteerTournamentStats = async ({
    volunteer_id,
    token
}: {
    volunteer_id: number;
    token: string;
}): Promise<VolunteerTournamentStatsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new VolunteerTournamentStatsRequest();
        request.setToken(token);

        debateClient.getVolunteerTournamentStats(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    });
}

export const getTournamentVolunteerRanking = async ({
    token,
    tournament_id,
    page,
    page_size,
}: {
    token: string;
    tournament_id: number;
    page: number;
    page_size: number;
}): Promise<VolunteerTournamentRank.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new TournamentVolunteerRankingRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setPage(page);
        request.setPageSize(page_size);

        debateClient.getTournamentVolunteerRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().rankingsList);
            }
        });
    });
}