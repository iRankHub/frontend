import {
    GetRoomRequest,
    GetRoomResponse,
    GetRoomsRequest,
    Room,
    RoomStatus,
    UpdateRoomRequest,
    UpdateRoomResponse,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";
import {
    GetTournamentRoomProps,
    GetTournamentRoomsProps,
    UpdateRoomProps
} from "@/types/pairings";

export const getTournamentRooms = async ({
    token,
    tournament_id
}: GetTournamentRoomsProps): Promise<RoomStatus.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetRoomsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getRooms(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().roomsList);
            }
        });
    });
}

export const getRoom = async ({
    token,
    room_id,
    tournament_id
}: GetTournamentRoomProps): Promise<GetRoomResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetRoomRequest();
        request.setToken(token);
        request.setRoomId(room_id);
        request.setTournamentId(tournament_id);

        debateClient.getRoom(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateTournamentRoom = async ({
    name,
    token,
    room_id
}: UpdateRoomProps): Promise<UpdateRoomResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateRoomRequest();
        request.setToken(token);

        const room = new Room();
        room.setRoomName(name);
        room.setRoomId(room_id);
        request.setRoom(room);

        debateClient.updateRoom(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}
