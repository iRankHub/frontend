import { GetStudentsBySchoolContactRequest, Student } from "@/lib/grpc/proto/user_management/users_pb";
import { userClient } from "../grpc-clients";

export const getStudentsByContact = async ({
    token,
    userId,
    page,
    pageSize,
}: {
    token: string;
    userId: number;
    page: number;
    pageSize: number;
}): Promise<Student.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetStudentsBySchoolContactRequest();
        request.setToken(token);
        request.setUserid(userId);
        request.setPage(page);
        request.setPagesize(pageSize);

        userClient.getStudentsBySchoolContact(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().studentsList);
            }
        });
    });
}