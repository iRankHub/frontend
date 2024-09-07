import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";

export interface GetPairingsProps {
    token: string;
    tournament_id: number;
    round: number;
    is_elimination: boolean;
}

export interface RegeneratePairingsProps {
    token: string;
    tournament_id: number;
}

export interface UpdatePairingProps {
    token: string;
    pairing: Pairing.AsObject;
}

export interface GetTournamentJudgesProps {
    token: string;
    tournament_id: number;
    round_number: number;
    is_elimination: boolean;
}

export interface GetTournamentRoomsProps {
    token: string;
    tournament_id: number;
}

export interface GetTournamentRoomProps {
    token: string;
    tournament_id: number;
    room_id: number;
}

export interface UpdateRoomProps {
    token: string;
    name: string;
    room_id: number;
}