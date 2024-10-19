export interface CreateTournamentType {
    name: string;
    start_date: string,
    end_date: string,
    location: string,
    format_id: number,
    league_id: number,
    coordinator_id: number,
    number_of_preliminary_rounds: number,
    number_of_elimination_rounds: number,
    judges_per_debate_preliminary: number,
    judges_per_debate_elimination: number,
    tournament_fee: number,
    image_url: string | null;
    token: string;
}

export interface UpdateTournamentType {
    tournament_id: number;
    name: string;
    start_date: string,
    end_date: string,
    location: string,
    format_id: number,
    league_id: number,
    coordinator_id: number,
    number_of_preliminary_rounds: number,
    number_of_elimination_rounds: number,
    judges_per_debate_preliminary: number,
    judges_per_debate_elimination: number,
    tournament_fee: number,
    image_url: string | null;
    token: string;
}

export interface GetTournamentType {
    tournament_id: number;
    token: string;
}

export interface DeleteTournamentType {
    tournament_id: number;
    token: string;
}