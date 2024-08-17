import { userClient } from "../grpc-clients";
import { DeactivateUser, GetAllUsers, GetUserDetails } from "@/types/user_management/users";
import { DeactivateAccountRequest, DeactivateAccountResponse, DeleteUsersRequest, DeleteUsersResponse, GetAllUsersRequest, GetAllUsersResponse, GetUserDetailsRequest, GetUserDetailsResponse } from "@/lib/grpc/proto/user_management/users_pb";

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

export const getUserDetails = async ({
    userID,
    token,
}: GetUserDetails): Promise<GetUserDetailsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetUserDetailsRequest();
        request.setUserid(userID);
        request.setToken(token);

        userClient.getUserDetails(request, {}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(err);
                resolve(response.toObject());
            }
        });
    });
}

export const getAllUsers = async({
    token,
    page,
    pageSize,
}: GetAllUsers): Promise<GetAllUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetAllUsersRequest();
        request.setToken(token);
        request.setPage(page);
        request.setPagesize(pageSize);

        userClient.getAllUsers(request, {}, (err, response) => {
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