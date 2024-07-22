import { Metadata } from "grpc-web";
import { AuthServiceClient } from "../lib/grpc/proto/authentication/AuthServiceClientPb";
import { LoginRequest, SignUpRequest } from "@/lib/grpc/proto/authentication/auth_pb";

// const ENVOY_PROXY_URL = "host.docker.internal"
const ENVOY_PROXY_URL = 'http://10.220.5.134:10000';
// const ENVOY_PROXY_URL = 'http://localhost:10000';
const client = new AuthServiceClient(ENVOY_PROXY_URL, null, null);

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
                reject(err);
            } else {
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
) => {
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