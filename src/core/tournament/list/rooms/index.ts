import { debateClient } from "@/core/grpc-clients";
import { GetRoomsRequest, GetRoomsResponse } from "@/lib/grpc/proto/debate_management/debate_pb";

export const getRooms = async ({
    token,
    tournament_id,
}: {
    token: string;
    tournament_id: number;
}): Promise<GetRoomsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetRoomsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getRooms(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}