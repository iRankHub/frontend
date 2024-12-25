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
import { Country, GetCountriesNoAuthRequest, GetSchoolIDsByNamesRequest } from "@/lib/grpc/proto/user_management/users_pb";

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
        request.setSafeguardingCertificateUrl(data.safeguardingCertificate ?? "")
        request.setGender(data.gender ?? "male")
        request.setNationalid(data.nationalId ?? "")

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
export const batchCreateUsers = async (data: {
    admin: ParsedDataAdmin[];
    student: ParsedDataStudent[];
    school: ParsedDataSchool[];
    volunteer: ParsedDataVolunteer[];
    token: string;
}): Promise<BatchImportUsersResponse.AsObject> => {
    // Step 1: Upload admins, volunteers, and schools
    const nonStudentRequest = new BatchImportUsersRequest();

    const addUserData = (userData: UserData) => {
        nonStudentRequest.addUsers(userData);
    };

    // Add admin data
    data.admin.forEach((admin) => {
        const userData = new UserData();
        userData.setFirstname(admin.firstName);
        userData.setLastname(admin.lastName);
        userData.setEmail(admin.email);
        userData.setGender(admin.gender.toLowerCase());
        userData.setUserrole("admin");
        addUserData(userData);
    });

    // Add volunteer data
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
        userData.setSafeguardingCertificateUrl(volunteer.safeguardingCertificate ?? "")
        addUserData(userData);
    });

    // Add school data
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

    // Step 2: Upload non-student users and get the response
    const nonStudentResponse = await new Promise<BatchImportUsersResponse.AsObject>((resolve, reject) => {
        authClient.batchImportUsers(nonStudentRequest, {}, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });

    // Step 3: Get school IDs for newly created schools
    const schoolNames = data.school.map(school => school.schoolName);
    const schoolIdsRequest = new GetSchoolIDsByNamesRequest();
    schoolIdsRequest.setSchoolNamesList(schoolNames);
    schoolIdsRequest.setToken(data.token);

    const schoolIds = await new Promise<[string, number][]>((resolve, reject) => {
        userClient.getSchoolIDsByNames(schoolIdsRequest, {}, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response.toObject().schoolIdsMap);
            }
        });
    });

    // Step 4: Upload students with correct school IDs
    const studentRequest = new BatchImportUsersRequest();

    data.student.forEach((student) => {
        const userData = new UserData();
        userData.setFirstname(student.firstName);
        userData.setLastname(student.lastName);
        userData.setEmail(student.email);
        userData.setGender(student.gender.toLowerCase());
        userData.setDateofbirth(excelSerialToDate(Number(student.dateOfBirth)));
        userData.setGrade(student.grade);
        userData.setUserrole("student");

        const schoolId = schoolIds.find(([schoolName]) => schoolName === student.schoolName)?.[1];
        if (schoolId) {
            userData.setSchoolid(schoolId);
        } else {
            console.error(`School ID not found for school name: ${student.schoolName}`);
        }

        studentRequest.addUsers(userData);
    });

    // Step 5: Upload students and get the response
    const studentResponse = await new Promise<BatchImportUsersResponse.AsObject>((resolve, reject) => {
        authClient.batchImportUsers(studentRequest, {}, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });

    // Step 6: Combine and return the results
    return {
        importedcount: nonStudentResponse.importedcount + studentResponse.importedcount,
        success: nonStudentResponse.success && studentResponse.success,
        message: nonStudentResponse.message + studentResponse.message,
        failedemailsList: [
            ...nonStudentResponse.failedemailsList,
            ...studentResponse.failedemailsList
        ]
    };
};

export const getCountriesNoAuth = async (): Promise<Country.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetCountriesNoAuthRequest();

        userClient.getCountriesNoAuth(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().countriesList);
            }
        });
    });
}
