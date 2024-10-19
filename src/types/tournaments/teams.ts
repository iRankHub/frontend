export interface CreateTeamType {
    name: string;
    tournament_id: number;
    token: string;
    speakers: TeamSpeakers[];
}

export interface TeamSpeakers {
    speaker_id: number;
}

export interface UpdateTeamType {
    name: string;
    team_id: number;
    token: string;
    speakers: TeamSpeakers[];
}