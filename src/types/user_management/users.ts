import { SchoolDetails, StudentDetails, VolunteerDetails } from "@/lib/grpc/proto/user_management/users_pb";
import { UserRole } from "..";

export interface DeactivateUser {
    userID: number;
    token: string;
}

export interface GetUserDetails {
    userID: number;
    token: string;
}

export interface GetAllUsers {
    page: number;
    pageSize: number;
    token: string;
}

// Define the main user interface
export interface UpdateUserProfile {
    token: string;
    userID: number;
    name: string;
    email: string;
    gender?: string;
    address?: string;
    phone?: string;
    bio?: string;
    profilePicture?: string | Uint8Array;
    password?: string;
    schoolDetails?: SchoolDetails.AsObject;
    studentDetails?: StudentDetails.AsObject;
    volunteerDetails?: VolunteerDetails.AsObject;
    role?: UserRole;
}

export interface UpdateAdminProfile {
    token: string;
    userID: number;
    name: string;
    gender?: string;
    address?: string;
    bio?: string;
    profilePicture?: string | Uint8Array;
    phone?: string;
}

export interface UpdateSchoolProfile {
    token: string;
    userID: number;
    contactPersonName?: string;
    gender?: string;
    address?: string;
    schoolName?: string;
    schoolEmail?: string;
    schoolType?: string;
    contactEmail?: string;
    contactPersonNationalId?: string;
    phone?: string;
    profilePicture?: string | Uint8Array;
    bio?: string;
}

export interface UpdateStudentProfile {
    token: string;
    userID: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    grade?: string;
    dateOfBirth?: string;
    address?: string;
    bio?: string;
    profilePicture?: string | Uint8Array;
    phone?: string;
}

export interface UpdateVolunteerProfile {
    token: string;
    userID: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email: string;
    nationalID?: string;
    graduateYear?: number;
    isEnrolledInUniversity?: boolean;
    hasInternship?: boolean;
    address?: string;
    bio?: string;
    profilePicture?: string | Uint8Array;
    role?: string;
    phone?: string;
}

export interface SchoolDetailsType {
    schoolname: string;
    country: string;
    province: string;
    district: string;
    schooltype: string;
}

export interface StudentDetailsType {
    grade: string;
    dateofbirth: string; // Or Date type if applicable
    schoolid: number;
}

export interface VolunteerDetailsType {
    role: string;
    graduateyear: number;
    safeguardcertificate: string | Uint8Array;
    hasinternship: boolean;
    isenrolledinuniversity: boolean;
}

export interface TwoFactor {
    userID: number;
    token: string;
    disable: boolean;
}