import { userClient } from "../grpc-clients";
import { DeactivateUser, GetAllUsers, GetUserDetails, SchoolDetailsType, StudentDetailsType, UpdateUserProfile, VolunteerDetailsType } from "@/types/user_management/users";
import {
    ApproveUserRequest,
    ApproveUserResponse,
    DeactivateAccountRequest,
    DeactivateAccountResponse,
    DeleteUsersRequest,
    DeleteUsersResponse,
    GetAllUsersRequest,
    GetAllUsersResponse,
    GetUserProfileRequest,
    GetUserProfileResponse,
    GetVolunteersAndAdminsRequest,
    GetVolunteersAndAdminsResponse,
    RejectUserRequest,
    RejectUserResponse,
    SchoolDetails,
    StudentDetails,
    UpdateUserProfileRequest,
    UpdateUserProfileResponse,
    VolunteerDetails
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

export const deactivateUser = async ({
    userID,
    token,
}: DeactivateUser): Promise<DeactivateAccountResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeactivateAccountRequest();
        request.setUserid(userID);
        request.setToken(token);

        userClient.deactivateAccount(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

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

// Helper functions to set the school, student and volunteer details in the request
const setSchoolDetails = (request: UpdateUserProfileRequest, schoolDetails: SchoolDetailsType) => {
    const schoolDetailsObj = new SchoolDetails();
    schoolDetailsObj.setSchoolname(schoolDetails.schoolname);
    schoolDetailsObj.setCountry(schoolDetails.country);
    schoolDetailsObj.setProvince(schoolDetails.province);
    schoolDetailsObj.setDistrict(schoolDetails.district);
    schoolDetailsObj.setSchooltype(schoolDetails.schooltype);
    request.setSchooldetails(schoolDetailsObj);
};

const setStudentDetails = (request: UpdateUserProfileRequest, studentDetails: StudentDetailsType) => {
    const studentDetailsObj = new StudentDetails();
    studentDetailsObj.setGrade(studentDetails.grade);
    studentDetailsObj.setDateofbirth(studentDetails.dateofbirth);
    studentDetailsObj.setSchoolid(studentDetails.schoolid);
    request.setStudentdetails(studentDetailsObj);
};

const setVolunteerDetails = (request: UpdateUserProfileRequest, volunteerDetails: VolunteerDetailsType) => {
    const volunteerDetailsObj = new VolunteerDetails();
    volunteerDetailsObj.setGraduateyear(volunteerDetails.graduateyear);
    volunteerDetailsObj.setSafeguardcertificate(volunteerDetails.safeguardcertificate);
    volunteerDetailsObj.setHasinternship(volunteerDetails.hasinternship);
    volunteerDetailsObj.setIsenrolledinuniversity(volunteerDetails.isenrolledinuniversity);
    volunteerDetailsObj.setRole(volunteerDetails.role);
    request.setVolunteerdetails(volunteerDetailsObj);
};

export const updateUserProfile = async ({
    userID,
    token,
    name,
    email,
    address,
    phone,
    bio,
    profilePicture,
    gender,
    password,
    schoolDetails,
    studentDetails,
    volunteerDetails,
    role,
}: UpdateUserProfile): Promise<UpdateUserProfileResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateUserProfileRequest();
        request.setToken(token);
        request.setUserid(userID);
        request.setName(name);
        request.setEmail(email);
        request.setGender(gender);
        request.setAddress(address);
        request.setPhone(phone);
        request.setBio(bio);
        request.setProfilepicture(profilePicture);

        // if password is provided, set it in the request
        if (password) {
            request.setPassword(password);
        }

        switch (role) {
            case "school":
                if (schoolDetails) setSchoolDetails(request, schoolDetails);
                break;
            case "student":
                if (studentDetails) setStudentDetails(request, studentDetails);
                break;
            case "volunteer":
                if (volunteerDetails) setVolunteerDetails(request, volunteerDetails);
                break;
        }

        userClient.updateUserProfile(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}