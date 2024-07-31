import { LoginRequest, LoginResponse, SignUpRequest } from "@/lib/grpc/proto/authentication/auth_pb";
import { client } from "./grpc-client";
import { ClientReadableStream } from "grpc-web";

export const signUp = (data: {
    firstName?: string;
    lastName?: string;
    email: string;
    contactEmail?: string;
    password: string;
    userRole: string;
    dob?: string,
    schoolName?: string;
    country?: string;
    province?: string;
    district?: string;
    schoolType?: string;
    roleInterestedIn?: string;
    graduationYear?: number;
    schoolId?: number;
    address?: string;
    grade?: string;
}) => {
    return new Promise((resolve, reject) => {
        const request = new SignUpRequest();
        request.setFirstname(data.firstName ?? "");
        request.setLastname(data.lastName ?? "");
        request.setEmail(data.email);
        request.setContactemail(data.contactEmail ?? "");
        request.setPassword(data.password);
        request.setUserrole(data.userRole);
        request.setDateofbirth(data.dob ?? "");
        request.setCountry(data.country ?? "")
        request.setSchoolname(data.schoolName ?? "")
        request.setDistrict(data.district ?? "")
        request.setSchooltype(data.schoolType ?? "")
        request.setGraduationyear(data.graduationYear ?? 0);
        request.setRoleinterestedin(data.roleInterestedIn ?? "")
        request.setAddress(data.address ?? "");
        request.setProvince(data.province ?? "")
        request.setGrade(data.grade ?? "")
        request.setSchoolid(data.schoolId ?? 0)
        // Set other fields as necessary

        client.signUp(request, {}, (err, response) => {
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

export const login = (
    data: {
        email: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.email);
        request.setPassword(data.password)

        client.login(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}
