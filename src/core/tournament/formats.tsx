import {
  CreateTournamentFormatRequest,
  CreateTournamentFormatResponse,
  DeleteTournamentFormatRequest,
  DeleteTournamentFormatResponse,
  ListTournamentFormatsRequest,
  ListTournamentFormatsResponse,
  UpdateTournamentFormatRequest,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { tournamentClient } from "../grpc-clients";
import {
  CreateTournamentFormat,
  DeleteTournamentFormat,
  ListTournamentFormats,
  UpdateTournamentFormat,
} from "@/types/tournaments/tournament-formats";

export const tournamentFormats = async ({
  page_size,
  page_token,
  token,
}: ListTournamentFormats): Promise<ListTournamentFormatsResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new ListTournamentFormatsRequest();
    request.setPageSize(page_size);
    request.setPageToken(page_token);
    request.setToken(token);

    tournamentClient.listTournamentFormats(request, {}, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(err);
        resolve(response.toObject());
      }
    });
  });
};

export const createTournamentFormat = async ({
  description,
  format_name,
  speakers_per_team,
  token,
}: CreateTournamentFormat): Promise<CreateTournamentFormatResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new CreateTournamentFormatRequest();
    request.setDescription(description);
    request.setFormatName(format_name);
    request.setSpeakersPerTeam(speakers_per_team);
    request.setToken(token);

    tournamentClient.createTournamentFormat(request, {}, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(err);
        resolve(response.toObject());
      }
    });
  });
};

export const updateTournamentFormat = async ({
  format_id,
  description,
  format_name,
  speakers_per_team,
  token,
}: UpdateTournamentFormat): Promise<CreateTournamentFormatResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new UpdateTournamentFormatRequest();
    request.setFormatId(format_id);
    request.setDescription(description);
    request.setFormatName(format_name);
    request.setSpeakersPerTeam(speakers_per_team);
    request.setToken(token);

    tournamentClient.updateTournamentFormat(request, {}, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(err);
        resolve(response.toObject());
      }
    });
  });
};

export const deleteTournamentFormat = async ({
  format_id,
  token,
}: DeleteTournamentFormat): Promise<DeleteTournamentFormatResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new DeleteTournamentFormatRequest();
    request.setFormatId(format_id);
    request.setToken(token);

    tournamentClient.deleteTournamentFormat(request, {}, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(err);
        resolve(response.toObject());
      }
    });
  });
};
