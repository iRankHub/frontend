interface Motion {
    text: string;
    info_slide: string;
    round_number: number;
}

interface TournamentMotions {
    preliminary_motions: Motion[];
    elimination_motions: Motion[];
}

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
    motions: TournamentMotions;
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
    motions: TournamentMotions;
}

export interface GetTournamentType {
    tournament_id: number;
    token: string;
}

export interface DeleteTournamentType {
    tournament_id: number;
    token: string;
}
