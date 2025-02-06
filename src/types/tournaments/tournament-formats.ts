export interface ListTournamentFormats {
    page_size: number;
    page_token: number;
    token: string;
    search?: string;
}

export interface CreateTournamentFormat {
    format_name: string;
    description: string;
    speakers_per_team: number;
    token: string;
}

export interface UpdateTournamentFormat {
    format_id: number;
    format_name: string;
    description: string;
    speakers_per_team: number;
    token: string;
}

export interface DeleteTournamentFormat {
    format_id: number;
    token: string;
}
