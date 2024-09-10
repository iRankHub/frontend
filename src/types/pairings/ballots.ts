export interface GetBallotsProps {
    token: string;
    tournament_id: number;
    is_elimination: boolean;
    round: number;
}

export interface GetBallotProps {
    token: string;
    ballot_id: number;
}