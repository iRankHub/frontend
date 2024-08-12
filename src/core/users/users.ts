import { userClient } from "../grpc-clients";
import { DeactivateUser } from "@/types/user_management/users";
import { DeactivateAccountRequest, DeactivateAccountResponse, DeleteUsersRequest, DeleteUsersResponse } from "@/lib/grpc/proto/user_management/users_pb";

export const deactivateUser = async ({
    userID,
    token,
}: DeactivateUser): Promise<DeactivateAccountResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeactivateAccountRequest();
        request.setUserid(userID);
        request.setToken(token);

        userClient.deactivateAccount(request, {}, (err, response) => {
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
