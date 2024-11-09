import { GetSystemHealthRequest, GetSystemHealthResponse } from "@/lib/grpc/proto/system_health/system_health_pb";
import { systemHealthClient } from "../grpc-clients";

export const getSystemHealthCheck = async ({
    token,
}: {
    token: string;
}): Promise<GetSystemHealthResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetSystemHealthRequest();
        request.setToken(token);

        systemHealthClient.getSystemHealth(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}