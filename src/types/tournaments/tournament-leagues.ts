import { LeagueType, LocalDetails } from "@/lib/grpc/proto/tournament_management/tournament_pb";

export interface ListTournamentLeagues {
    page_size: number;
    page_token: number;
    token: string;
}

export interface CreateTournamentLeague {
    name: string;
    league_type: LeagueType;
    local_details: LocalDetails;
    token: string;
}

export interface UpdateTournamentLeague {
    league_id: number;
    name: string;
    league_type: LeagueType;
    local_details: LocalDetails;
    token: string;
}

export interface GetTournamentLeague {
    league_id: number;
    token: string;
}

export interface DeleteTournamentLeague {
    league_id: number;
    token: string;
}