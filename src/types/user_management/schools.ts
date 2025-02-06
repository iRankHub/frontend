export interface GetSchoolsType {
    page: number;
    pageSize: number;
    token: string;
    search?: string;
}

export interface GetSchoolsNoAuthType {
    page: number;
    pageSize: number;
}
