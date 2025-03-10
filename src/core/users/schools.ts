import { userClient } from "../grpc-clients";
import {
  GetSchoolsNoAuthRequest,
  GetSchoolsNoAuthResponse,
  GetSchoolsRequest,
  GetSchoolsResponse,
} from "@/lib/grpc/proto/user_management/users_pb";
import { GetSchoolsNoAuthType, GetSchoolsType } from "@/types/user_management/schools";

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
        reject(err);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export const getSchoolsNoAuth = ({
  page,
  pageSize,
}: GetSchoolsNoAuthType): Promise<GetSchoolsNoAuthResponse.AsObject> => {
  return new Promise((resolve, reject) => {
    const request = new GetSchoolsNoAuthRequest();
    request.setPage(page);
    request.setPagesize(pageSize);

    userClient.getSchoolsNoAuth(request, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        console.log(err);
        resolve(response.toObject());
      }
    });
  });
}

