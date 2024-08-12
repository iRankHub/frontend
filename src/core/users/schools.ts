import { BatchImportUsersRequest } from "@/lib/grpc/proto/authentication/auth_pb";
import { userClient } from "../grpc-clients";
import {
  GetSchoolsRequest,
  GetSchoolsResponse,
} from "@/lib/grpc/proto/user_management/users_pb";
import { GetSchoolsType } from "@/types/user_management/schools";

export const getSchools = ({
  page,
  pageSize,
  token,
}: GetSchoolsType): Promise<GetSchoolsResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new GetSchoolsRequest();
    request.setPage(page);
    request.setPagesize(pageSize);
    request.setToken(token);

    userClient.getSchools(request, {}, (err, response) => {
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
