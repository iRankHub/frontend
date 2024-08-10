import { BatchImportUsersRequest } from "@/lib/grpc/proto/authentication/auth_pb";
import { authClient } from "../grpc-clients";

export const getSchools = () => {
  return new Promise((resolve, reject) => {
    const request = new BatchImportUsersRequest();

    authClient.batchImportUsers(request, {}, (err, response) => {
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