import {
    CreateTeamRequest,
    DeleteTeamRequest,
    DeleteTeamResponse,
    GetTeamsByTournamentRequest,
    GetTeamsByTournamentResponse,
    Speaker,
    Team,
    UpdateTeamRequest
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";
import { CreateTeamType, UpdateTeamType } from "@/types/tournaments/teams";

export const getTeamsByTournament = async ({
    token,
    tournament_id,
}: {
    token: string;
    tournament_id: number;
}): Promise<GetTeamsByTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetTeamsByTournamentRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getTeamsByTournament(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const createTournamentTeam = async ({
    token,
    tournament_id,
    name,
    speakers,
}: CreateTeamType): Promise<Team.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateTeamRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setName(name);

        const speakersList = speakers.map((speaker) => {
            const newSpeaker = new Speaker();
            newSpeaker.setSpeakerId(speaker.speaker_id);
            return newSpeaker;
        });
        request.setSpeakersList(speakersList);

        debateClient.createTeam(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateTournamentTeam = async ({
    token,
    team_id,
    name,
    speakers,
}: UpdateTeamType): Promise<Team.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateTeamRequest();
        const team = new Team();
        team.setTeamId(team_id);
        team.setName(name);

        const speakersList = speakers.map((speaker) => {
            const newSpeaker = new Speaker();
            newSpeaker.setSpeakerId(speaker.speaker_id);
            return newSpeaker;
        });
        team.setSpeakersList(speakersList);

        request.setToken(token);
        request.setTeam(team);

        debateClient.updateTeam(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const deleteTournamentTeam = async ({
    token,
    team_id,
}: {
    token: string;
    team_id: number;
}): Promise<DeleteTeamResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeleteTeamRequest();
        const team = new Team();
        team.setTeamId(team_id);
        request.setToken(token);

        debateClient.deleteTeam(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}