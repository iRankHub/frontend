export enum UserRole {
    STUDENT = "student",
    SCHOOL = "school",
    VOLUNTEER = "volunteer",
    ADMIN = "administrator"
}

export interface LoginResponse {
    token: string;
    userid: string;
    success: boolean;
    status: string;
    message: string;
    requirePasswordReset: string;
    requireTwoFactor: string;
    userrole: "school" | "student" | "volunteer" | "admin"
}

export interface Iparms {
    params: {
        name: string;
    };
}