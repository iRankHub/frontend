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
import { authClient, userClient } from "../grpc-clients";
import { TwoFactor } from "@/types/user_management/users";
import { excelSerialToDate, ParsedDataAdmin, ParsedDataSchool, ParsedDataStudent, ParsedDataVolunteer } from "@/file-parser/parse-excel-file";
import { GetSchoolIDsByNamesRequest } from "@/lib/grpc/proto/user_management/users_pb";

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
    token: string;
}): Promise<BatchImportUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new BatchImportUsersRequest();
        const schoolIdsRequest = new GetSchoolIDsByNamesRequest();

        const addUserData = (userData: UserData) => {
            request.addUsers(userData);
        };

        // Add admin, school, and volunteer data
        data.admin.forEach((admin) => {
            const userData = new UserData();
            userData.setFirstname(admin.firstName);
            userData.setLastname(admin.lastName);
            userData.setEmail(admin.email);
            userData.setGender(admin.gender.toLowerCase());
            userData.setUserrole("admin");
            addUserData(userData);
        });

        data.school.forEach((school) => {
            const userData = new UserData();
            userData.setFirstname(school.firstName);
            userData.setLastname(school.lastName);
            userData.setEmail(school.email);
            userData.setUserrole("school");
            userData.setGender("female");
            userData.setNationalid(school.nationalID);
            userData.setSchoolname(school.schoolName);
            userData.setAddress(school.address);
            userData.setCountry(school.country);
            userData.setProvince(school.province);
            userData.setDistrict(school.district);
            userData.setContactemail(school.contactEmail);
            userData.setSchooltype(school.schoolType);
            addUserData(userData);
        });

        data.volunteer.forEach((volunteer) => {
            const userData = new UserData();
            userData.setFirstname(volunteer.firstName);
            userData.setLastname(volunteer.lastName);
            userData.setEmail(volunteer.email);
            userData.setGender(volunteer.gender.toLowerCase());
            userData.setDateofbirth(excelSerialToDate(Number(volunteer.dateOfBirth)));
            userData.setNationalid(volunteer.nationalID);
            userData.setRoleinterestedin(volunteer.roleInterestedIn);
            userData.setGraduationyear(Number(volunteer.graduationYear));
            userData.setHasinternship(volunteer.hasInternship.toLowerCase() === "yes");
            userData.setIsenrolledinuniversity(volunteer.isEnrolledInUniversity.toLowerCase() === "yes");
            userData.setUserrole("volunteer");
            userData.setSafeguardingcertificate("");
            addUserData(userData);
        });

        // Function to add student data
        const addStudentData = (schoolIds: [string, number][]) => {
            data.student.forEach((student) => {
                const userData = new UserData();
                userData.setFirstname(student.firstName);
                userData.setLastname(student.lastName);
                userData.setEmail(student.email);
                userData.setGender(student.gender.toLowerCase());
                userData.setDateofbirth(excelSerialToDate(Number(student.dateOfBirth)));
                userData.setGrade(student.grade);
                userData.setUserrole("student");

                const schoolIdEntry = schoolIds.find(([name, id]) => name === student.schoolName);
                if (schoolIdEntry) {
                    userData.setSchoolid(schoolIdEntry[1]);
                } else {
                    console.error(`School ID not found for school name: ${student.schoolName}`);
                }

                addUserData(userData);
            });
        };

        // Function to make the final batchImportUsers call
        const makeBatchImportUsersCall = () => {
            console.log(request.toObject());
            authClient.batchImportUsers(request, {}, (err, response) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(response.toObject());
                    resolve(response.toObject());
                }
            });
        };

        // Handle student data
        if (data.student.length > 0) {
            const schools = data.school.map((school) => school.schoolName);
            schoolIdsRequest.setSchoolNamesList(schools);
            schoolIdsRequest.setToken(data.token);

            userClient.getSchoolIDsByNames(schoolIdsRequest, {}, (err, response) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    const schoolIds: [string, number][] = response.toObject().schoolIdsMap;
                    addStudentData(schoolIds);
                    makeBatchImportUsersCall();
                }
            });
        } else {
            // If there are no students, make the call immediately
            makeBatchImportUsersCall();
        }
    });
};