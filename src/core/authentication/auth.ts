import { LoginRequest, LoginResponse, SignUpRequest } from "@/lib/grpc/proto/authentication/auth_pb";
import { authClient } from "../grpc-clients";

export const signUp = (data: {
    firstName?: string;
    lastName?: string;
    email: string;
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
    contactEmail?: string;
    hasInternship?: boolean;
    isEnrolledInUniversity?: boolean;
    safeguardingCertificate?: boolean;
}) => {
    return new Promise((resolve, reject) => {
        console.log(data)
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
        request.setHasinternship(data.hasInternship ?? false)
        request.setIsenrolledinuniversity(data.isEnrolledInUniversity ?? false)
        request.setSafeguardingcertificate(data.safeguardingCertificate ?? false)

        // Set other fields as necessary

        authClient.signUp(request, {}, (err, response) => {
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
        emailOrId: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.emailOrId);
        request.setPassword(data.password)

        authClient.login(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}
