import { userClient } from "../grpc-clients";
import {
    BuldDeleteUsers,
    DeactivateUser,
    GetAllUsers,
    GetUserDetails,
    UpdateAdminProfile,
    UpdateSchoolProfile,
    UpdateStudentProfile,
    UpdateVolunteerProfile
} from "@/types/user_management/users";
import {
    ApproveUserRequest,
    ApproveUserResponse,
    ApproveUsersRequest,
    ApproveUsersResponse,
    Country,
    DeleteUsersRequest,
    DeleteUsersResponse,
    GetAllUsersRequest,
    GetAllUsersResponse,
    GetCountriesRequest,
    GetStudentsBySchoolContactRequest,
    GetStudentsBySchoolContactResponse,
    GetStudentsRequest,
    GetStudentsResponse,
    GetUserProfileRequest,
    GetUserProfileResponse,
    GetUserStatisticsRequest,
    GetUserStatisticsResponse,
    GetVolunteersAndAdminsRequest,
    GetVolunteersAndAdminsResponse,
    InitiatePasswordUpdateRequest,
    InitiatePasswordUpdateResponse,
    RejectUserRequest,
    RejectUserResponse,
    RejectUsersRequest,
    UpdateAdminProfileRequest,
    UpdateAdminProfileResponse,
    UpdateSchoolProfileRequest,
    UpdateSchoolProfileResponse,
    UpdateStudentProfileRequest,
    UpdateStudentProfileResponse,
    UpdateVolunteerProfileRequest,
    UpdateVolunteerProfileResponse,
    VerifyAndUpdatePasswordRequest,
    VerifyAndUpdatePasswordResponse,
} from "@/lib/grpc/proto/user_management/users_pb";

export const approveUser = async ({
    token,
    userID
}: DeactivateUser): Promise<ApproveUserResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ApproveUserRequest();
        request.setUserid(userID);
        request.setToken(token);

        userClient.approveUser(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const rejectUser = async ({
    token,
    userID
}: DeactivateUser): Promise<RejectUserResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new RejectUserRequest();
        request.setUserid(userID);
        request.setToken(token);

        userClient.rejectUser(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const deleteUser = async ({
    userID,
    token,
}: DeactivateUser): Promise<DeleteUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeleteUsersRequest();
        request.setUseridsList([userID]);
        request.setToken(token);

        userClient.deleteUsers(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const bulkDeleteUsers = async ({
    userIDs,
    token,
}: BuldDeleteUsers): Promise<DeleteUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeleteUsersRequest();
        request.setUseridsList(userIDs);
        request.setToken(token);

        userClient.deleteUsers(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getAllUsers = async ({
    token,
    page,
    pageSize,
}: GetAllUsers): Promise<GetAllUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetAllUsersRequest();
        request.setToken(token);
        request.setPage(page);
        request.setPagesize(pageSize);

        userClient.getAllUsers(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const getUserStatistics = async ({
    token,
}: {
    token: string;
}): Promise<GetUserStatisticsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetUserStatisticsRequest();
        request.setToken(token);

        userClient.getUserStatistics(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getStudents = async ({
    token,
    page,
    pageSize,
}: GetAllUsers): Promise<GetStudentsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetStudentsRequest();
        request.setToken(token);
        request.setPage(page);
        request.setPagesize(pageSize);

        userClient.getStudents(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getStudentsBySchool = async ({
    token,
    page,
    pageSize,
    userID,
}: GetAllUsers & { userID: number }): Promise<GetStudentsBySchoolContactResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetStudentsBySchoolContactRequest();
        request.setToken(token);
        request.setPage(page);
        request.setPagesize(pageSize);
        request.setUserid(userID);

        userClient.getStudentsBySchoolContact(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getVolunteersAndAdmins = async ({
    token,
    page,
    pageSize,
}: GetAllUsers): Promise<GetVolunteersAndAdminsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetVolunteersAndAdminsRequest();
        request.setToken(token);
        request.setPage(page);
        request.setPagesize(pageSize);

        userClient.getVolunteersAndAdmins(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getUserProfile = async ({
    userID,
    token,
}: GetUserDetails): Promise<GetUserProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetUserProfileRequest();
        request.setToken(token);
        request.setUserid(userID);

        userClient.getUserProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const updateAdminProfile = async ({
    userID,
    token,
    name,
    address,
    gender,
    bio,
    profilePicture,
    phone,
}: UpdateAdminProfile): Promise<UpdateAdminProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateAdminProfileRequest();
        request.setToken(token);
        request.setUserid(userID);
        request.setName(name);
        request.setGender(gender || "male");
        request.setAddress(address || "");
        request.setPhone(phone || "");
        request.setBio(bio || "");
        request.setProfilepicture(profilePicture || "");

        userClient.updateAdminProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateSchoolProfile = async ({
    address,
    bio,
    contactEmail,
    contactPersonName,
    contactPersonNationalId,
    gender,
    phone,
    profilePicture,
    schoolEmail,
    schoolName,
    schoolType,
    token,
    userID,
}: UpdateSchoolProfile): Promise<UpdateSchoolProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateSchoolProfileRequest();
        request.setToken(token);
        request.setUserid(userID);
        address && request.setAddress(address);
        bio && request.setBio(bio);
        contactEmail && request.setContactemail(contactEmail);
        contactPersonName && request.setContactpersonname(contactPersonName);
        contactPersonNationalId && request.setContactpersonnationalid(contactPersonNationalId);
        gender && request.setGender(gender);
        phone && request.setPhone(phone);
        profilePicture && request.setProfilepicture(profilePicture);
        schoolEmail && request.setSchoolemail(schoolEmail);
        schoolName && request.setSchoolname(schoolName);
        schoolType && request.setSchooltype(schoolType);

        userClient.updateSchoolProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateVolunteerProfile = async ({
    address,
    bio,
    gender,
    phone,
    profilePicture,
    token,
    userID,
    email,
    firstName,
    graduateYear,
    hasInternship,
    isEnrolledInUniversity,
    lastName,
    nationalID,
    role,
}: UpdateVolunteerProfile): Promise<UpdateVolunteerProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateVolunteerProfileRequest();
        request.setToken(token);
        request.setUserid(userID);
        address && request.setAddress(address);
        bio && request.setBio(bio);
        gender && request.setGender(gender);
        phone && request.setPhone(phone);
        profilePicture && request.setProfilepicture(profilePicture);
        request.setEmail(email);
        firstName && request.setFirstname(firstName);
        graduateYear && request.setGraduateyear(graduateYear);
        hasInternship !== undefined && request.setHasinternship(hasInternship);
        isEnrolledInUniversity && request.setIsenrolledinuniversity(isEnrolledInUniversity);
        lastName && request.setLastname(lastName);
        nationalID && request.setNationalid(String(nationalID));
        role && request.setRole(role);

        userClient.updateVolunteerProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateStudentsProfile = async ({
    address,
    bio,
    gender,
    phone,
    profilePicture,
    token,
    userID,
    email,
    firstName,
    grade,
    dateOfBirth,
    lastName,
}: UpdateStudentProfile): Promise<UpdateStudentProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateStudentProfileRequest();
        request.setToken(token);
        request.setUserid(userID);
        address && request.setAddress(address);
        bio && request.setBio(bio);
        gender && request.setGender(gender);
        phone && request.setPhone(phone);
        profilePicture && request.setProfilepicture(profilePicture);
        email && request.setEmail(email);
        firstName && request.setFirstname(firstName);
        lastName && request.setLastname(lastName);
        grade && request.setGrade(grade);
        dateOfBirth && request.setDateofbirth(dateOfBirth);

        userClient.updateStudentProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const initiatePasswordReset = async ({
    token,
    userID
}: {
    token: string;
    userID: number;
}): Promise<InitiatePasswordUpdateResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new InitiatePasswordUpdateRequest();
        request.setToken(token);
        request.setUserid(userID);

        userClient.initiatePasswordUpdate(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updatePassword = async ({
    token,
    userID,
    verificationCode,
    password
}: {
    token: string;
    userID: number;
    verificationCode: string;
    password: string;
}): Promise<VerifyAndUpdatePasswordResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new VerifyAndUpdatePasswordRequest();
        request.setToken(token);
        request.setUserid(userID);
        request.setNewpassword(password);
        request.setVerificationcode(verificationCode);

        userClient.verifyAndUpdatePassword(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

// buld approve or reject users
export const bulkApproveOrRejectUsers = async ({
    token,
    userIDs,
    action
}: {
    token: string;
    userIDs: number[];
    action: "approve" | "reject" | "delete";
}): Promise<ApproveUsersResponse.AsObject> => {
    return new Promise((resolve, reject) => {

        if (action === "approve") {
            const request = new ApproveUsersRequest();
            request.setToken(token);
            request.setUseridsList(userIDs);
            userClient.approveUsers(request, {}, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.toObject());
                }
            });
        } else if (action === "reject") {
            const rejectRequest = new RejectUsersRequest();
            rejectRequest.setToken(token);
            rejectRequest.setUseridsList(userIDs);

            console.log(rejectRequest.toObject());
            userClient.rejectUsers(rejectRequest, {}, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.toObject());
                }
            });
        }
    });
}

export const getCountries = async ({
    token,
}: {
    token: string;
}): Promise<Country.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetCountriesRequest();
        request.setToken(token);

        userClient.getCountries(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().countriesList);
            }
        });
    });
}