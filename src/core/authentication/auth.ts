import {
    BatchImportUsersRequest,
    BatchImportUsersResponse,
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
    UserData,
    VerifyTwoFactorRequest
} from "@/lib/grpc/proto/authentication/auth_pb";
import { authClient } from "../grpc-clients";
import { TwoFactor } from "@/types/user_management/users";
import { excelSerialToDate, ParsedDataAdmin, ParsedDataSchool, ParsedDataStudent, ParsedDataVolunteer } from "@/file-parser/parse-excel-file";

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
    safeguardingCertificate?: string;
    gender?: string;
    nationalId?: string;
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
        request.setSafeguardingcertificate(data.safeguardingCertificate ?? "")
        request.setGender(data.gender ?? "male")
        request.setNationalid(data.nationalId ?? "")
        // Set other fields as necessary

        authClient.signUp(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const adminLogin = (
    data: {
        emailOrId: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.emailOrId);
        request.setPassword(data.password)

        authClient.adminLogin(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export const studentLogin = (
    data: {
        emailOrId: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.emailOrId);
        request.setPassword(data.password)

        authClient.studentLogin(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export const volunteerLogin = (
    data: {
        emailOrId: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.emailOrId);
        request.setPassword(data.password)

        authClient.volunteerLogin(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export const schoolLogin = (
    data: {
        emailOrId: string;
        password: string;
    }
): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmailOrId(data.emailOrId);
        request.setPassword(data.password)

        authClient.schoolLogin(request, {}, (err, response) => {
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

// batch operations
export const batchCreateUsers = (data: {
    admin: ParsedDataAdmin[];
    student: ParsedDataStudent[];
    school: ParsedDataSchool[];
    volunteer: ParsedDataVolunteer[];
}): Promise<BatchImportUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new BatchImportUsersRequest();

        data.admin.forEach((admin) => {
            const userData = new UserData();
            userData.setFirstname(admin.firstName);
            userData.setLastname(admin.lastName);
            userData.setEmail(admin.email);
            userData.setGender(admin.gender)
            userData.setUserrole("admin")

            request.addUsers(userData);
        });

        // data.student.forEach((student) => {
        //     const userData = new UserData();
        //     userData.setFirstname(student.firstName);
        //     userData.setLastname(student.lastName);
        //     userData.setEmail(student.email);
        //     userData.setGender(student.gender.toLocaleLowerCase())
        //     userData.setDateofbirth(excelSerialToDate(Number(student.dateOfBirth)))
        //     userData.setGrade(student.grade)
        //     userData.setSchoolid(Number(student.schoolID))
        //     userData.setUserrole("student")
        //     userData.setSchoolname(student.schoolName)

        //     request.addUsers(userData);
        // });

        data.school.forEach((school) => {
            const userData = new UserData();
            userData.setFirstname(school.firstName);
            userData.setLastname(school.lastName);
            userData.setEmail(school.email);
            userData.setUserrole("school")
            userData.setGender("female")
            userData.setNationalid(school.nationalID)
            userData.setSchoolname(school.schoolName)
            userData.setAddress(school.address)
            userData.setCountry(school.country)
            userData.setProvince(school.province)
            userData.setDistrict(school.district)
            userData.setContactemail(school.contactEmail)
            userData.setSchooltype(school.schoolType)

            request.addUsers(userData);
        });

        data.volunteer.forEach((volunteer) => {
            const userData = new UserData();
            userData.setFirstname(volunteer.firstName);
            userData.setLastname(volunteer.lastName);
            userData.setEmail(volunteer.email);
            userData.setGender(volunteer.gender.toLocaleLowerCase())
            userData.setDateofbirth(excelSerialToDate(Number(volunteer.dateOfBirth)))
            userData.setNationalid(volunteer.nationalID)
            userData.setRoleinterestedin(volunteer.roleInterestedIn)
            userData.setGraduationyear(Number(volunteer.graduationYear))
            userData.setHasinternship(volunteer.hasInternship.toLocaleLowerCase() === "yes")
            userData.setIsenrolledinuniversity(volunteer.isEnrolledInUniversity.toLocaleLowerCase() === "yes")
            userData.setUserrole("volunteer")
            userData.setSafeguardingcertificate("")

            request.addUsers(userData);
        });

        authClient.batchImportUsers(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    })
}