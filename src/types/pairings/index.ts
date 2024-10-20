import { Pairing, RoomInfo } from "@/lib/grpc/proto/debate_management/debate_pb";

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
    pairings: Pairing.AsObject[];
}

export interface GetTournamentJudgesProps {
    token: string;
    tournament_id: number;
}

export interface GetTournamentJudgeProps {
    token: string;
    judge_id: number;
    tournament_id: number;
}

interface RoomAssignment {
    room_id: number;
}

interface RoundAssignments {
    [round: string]: RoomInfo.AsObject;
}

export interface UpdateJudgeData {
    judge_id: number;
    tournament_id: number;
    preliminary: RoundAssignments;
    elimination: RoundAssignments;
    token: string;
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