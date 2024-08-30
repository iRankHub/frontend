import {
    DisableTwoFactorRequest,
    EnableTwoFactorRequest,
    EnableTwoFactorResponse,
    GenerateTwoFactorOTPRequest,
    GenerateTwoFactorOTPResponse,
    LoginRequest,
    LoginResponse,
    PasswordResetRequest,
    PasswordResetResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    SignUpRequest,
    SignUpResponse,
    VerifyTwoFactorRequest
} from "@/lib/grpc/proto/authentication/auth_pb";
import { authClient } from "../grpc-clients";
import { TwoFactor } from "@/types/user_management/users";

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
    gender?: string;
}): Promise<SignUpResponse.AsObject> => {
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
        request.setHasinternship(data.hasInternship ?? false)
        request.setIsenrolledinuniversity(data.isEnrolledInUniversity ?? false)
        request.setSafeguardingcertificate(data.safeguardingCertificate ?? false)
        request.setGender(data.gender ?? "male")
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

// forgot password
export const forgotPassword = (email: string): Promise<PasswordResetResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new PasswordResetRequest();
        request.setEmail(email);

        authClient.requestPasswordReset(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

// reset password
export const resetPassword = (data: {
    password: string;
    token: string;
}): Promise<ResetPasswordResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ResetPasswordRequest();
        request.setToken(data.token);
        request.setNewpassword(data.password);

        authClient.resetPassword(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

// 2fa
export const generateTwoFactorOTP = (data: {
    email: string;
}): Promise<GenerateTwoFactorOTPResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GenerateTwoFactorOTPRequest();
        request.setEmail(data.email);

        authClient.generateTwoFactorOTP(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const verifyTwoFactor = (data: {
    email: string;
    otp: string;
}): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new VerifyTwoFactorRequest();
        request.setEmail(data.email);
        request.setCode(data.otp);

        authClient.verifyTwoFactor(request, {}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};


export const handleTwoFactor = async ({
    userID,
    token,
    disable
}: TwoFactor): Promise<EnableTwoFactorResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject(new Error("Token is missing"));
        }

        if (!disable) {
            const request = new DisableTwoFactorRequest();
            request.setUserid(userID);
            request.setToken(token);

            authClient.disableTwoFactor(request, {}, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.toObject());
                }
            });
        } else {
            const request = new EnableTwoFactorRequest();
            request.setUserid(userID);
            request.setToken(token);

            authClient.enableTwoFactor(request, {}, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.toObject());
                }
            });
        }
    });
}