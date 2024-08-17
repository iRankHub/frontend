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