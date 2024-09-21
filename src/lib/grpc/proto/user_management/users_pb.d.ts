import * as jspb from 'google-protobuf'



export class GetPendingUsersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetPendingUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingUsersRequest): GetPendingUsersRequest.AsObject;
  static serializeBinaryToWriter(message: GetPendingUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingUsersRequest;
  static deserializeBinaryFromReader(message: GetPendingUsersRequest, reader: jspb.BinaryReader): GetPendingUsersRequest;
}

export namespace GetPendingUsersRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetPendingUsersResponse extends jspb.Message {
  getUsersList(): Array<UserSummary>;
  setUsersList(value: Array<UserSummary>): GetPendingUsersResponse;
  clearUsersList(): GetPendingUsersResponse;
  addUsers(value?: UserSummary, index?: number): UserSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingUsersResponse): GetPendingUsersResponse.AsObject;
  static serializeBinaryToWriter(message: GetPendingUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingUsersResponse;
  static deserializeBinaryFromReader(message: GetPendingUsersResponse, reader: jspb.BinaryReader): GetPendingUsersResponse;
}

export namespace GetPendingUsersResponse {
  export type AsObject = {
    usersList: Array<UserSummary.AsObject>,
  }
}

export class GetAllUsersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetAllUsersRequest;

  getPage(): number;
  setPage(value: number): GetAllUsersRequest;

  getPagesize(): number;
  setPagesize(value: number): GetAllUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersRequest): GetAllUsersRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersRequest;
  static deserializeBinaryFromReader(message: GetAllUsersRequest, reader: jspb.BinaryReader): GetAllUsersRequest;
}

export namespace GetAllUsersRequest {
  export type AsObject = {
    token: string,
    page: number,
    pagesize: number,
  }
}

export class GetAllUsersResponse extends jspb.Message {
  getUsersList(): Array<UserSummary>;
  setUsersList(value: Array<UserSummary>): GetAllUsersResponse;
  clearUsersList(): GetAllUsersResponse;
  addUsers(value?: UserSummary, index?: number): UserSummary;

  getTotalcount(): number;
  setTotalcount(value: number): GetAllUsersResponse;

  getApproveduserscount(): number;
  setApproveduserscount(value: number): GetAllUsersResponse;

  getRecentsignupscount(): number;
  setRecentsignupscount(value: number): GetAllUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersResponse): GetAllUsersResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersResponse;
  static deserializeBinaryFromReader(message: GetAllUsersResponse, reader: jspb.BinaryReader): GetAllUsersResponse;
}

export namespace GetAllUsersResponse {
  export type AsObject = {
    usersList: Array<UserSummary.AsObject>,
    totalcount: number,
    approveduserscount: number,
    recentsignupscount: number,
  }
}

export class GetUserStatisticsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserStatisticsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserStatisticsRequest): GetUserStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserStatisticsRequest;
  static deserializeBinaryFromReader(message: GetUserStatisticsRequest, reader: jspb.BinaryReader): GetUserStatisticsRequest;
}

export namespace GetUserStatisticsRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetUserStatisticsResponse extends jspb.Message {
  getAdminCount(): number;
  setAdminCount(value: number): GetUserStatisticsResponse;

  getSchoolCount(): number;
  setSchoolCount(value: number): GetUserStatisticsResponse;

  getStudentCount(): number;
  setStudentCount(value: number): GetUserStatisticsResponse;

  getVolunteerCount(): number;
  setVolunteerCount(value: number): GetUserStatisticsResponse;

  getApprovedCount(): number;
  setApprovedCount(value: number): GetUserStatisticsResponse;

  getNewRegistrationsCount(): number;
  setNewRegistrationsCount(value: number): GetUserStatisticsResponse;

  getNewRegistrationsPercentageChange(): string;
  setNewRegistrationsPercentageChange(value: string): GetUserStatisticsResponse;

  getApprovedUsersPercentageChange(): string;
  setApprovedUsersPercentageChange(value: string): GetUserStatisticsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserStatisticsResponse): GetUserStatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserStatisticsResponse;
  static deserializeBinaryFromReader(message: GetUserStatisticsResponse, reader: jspb.BinaryReader): GetUserStatisticsResponse;
}

export namespace GetUserStatisticsResponse {
  export type AsObject = {
    adminCount: number,
    schoolCount: number,
    studentCount: number,
    volunteerCount: number,
    approvedCount: number,
    newRegistrationsCount: number,
    newRegistrationsPercentageChange: string,
    approvedUsersPercentageChange: string,
  }
}

export class UserSummary extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): UserSummary;

  getName(): string;
  setName(value: string): UserSummary;

  getEmail(): string;
  setEmail(value: string): UserSummary;

  getUserrole(): string;
  setUserrole(value: string): UserSummary;

  getSignupdate(): string;
  setSignupdate(value: string): UserSummary;

  getGender(): string;
  setGender(value: string): UserSummary;

  getStatus(): string;
  setStatus(value: string): UserSummary;

  getIdebateid(): string;
  setIdebateid(value: string): UserSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSummary.AsObject;
  static toObject(includeInstance: boolean, msg: UserSummary): UserSummary.AsObject;
  static serializeBinaryToWriter(message: UserSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSummary;
  static deserializeBinaryFromReader(message: UserSummary, reader: jspb.BinaryReader): UserSummary;
}

export namespace UserSummary {
  export type AsObject = {
    userid: number,
    name: string,
    email: string,
    userrole: string,
    signupdate: string,
    gender: string,
    status: string,
    idebateid: string,
  }
}

export class UserProfile extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): UserProfile;

  getName(): string;
  setName(value: string): UserProfile;

  getEmail(): string;
  setEmail(value: string): UserProfile;

  getUserrole(): string;
  setUserrole(value: string): UserProfile;

  getGender(): string;
  setGender(value: string): UserProfile;

  getAddress(): string;
  setAddress(value: string): UserProfile;

  getPhone(): string;
  setPhone(value: string): UserProfile;

  getBio(): string;
  setBio(value: string): UserProfile;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UserProfile;

  getVerificationstatus(): boolean;
  setVerificationstatus(value: boolean): UserProfile;

  getSignupdate(): string;
  setSignupdate(value: string): UserProfile;

  getTwofactorenabled(): boolean;
  setTwofactorenabled(value: boolean): UserProfile;

  getBiometricauthenabled(): boolean;
  setBiometricauthenabled(value: boolean): UserProfile;

  getStudentdetails(): StudentDetails | undefined;
  setStudentdetails(value?: StudentDetails): UserProfile;
  hasStudentdetails(): boolean;
  clearStudentdetails(): UserProfile;

  getSchooldetails(): SchoolDetails | undefined;
  setSchooldetails(value?: SchoolDetails): UserProfile;
  hasSchooldetails(): boolean;
  clearSchooldetails(): UserProfile;

  getVolunteerdetails(): VolunteerDetails | undefined;
  setVolunteerdetails(value?: VolunteerDetails): UserProfile;
  hasVolunteerdetails(): boolean;
  clearVolunteerdetails(): UserProfile;

  getRoleSpecificDetailsCase(): UserProfile.RoleSpecificDetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    userid: number,
    name: string,
    email: string,
    userrole: string,
    gender: string,
    address: string,
    phone: string,
    bio: string,
    profilepicture: Uint8Array | string,
    verificationstatus: boolean,
    signupdate: string,
    twofactorenabled: boolean,
    biometricauthenabled: boolean,
    studentdetails?: StudentDetails.AsObject,
    schooldetails?: SchoolDetails.AsObject,
    volunteerdetails?: VolunteerDetails.AsObject,
  }

  export enum RoleSpecificDetailsCase { 
    ROLE_SPECIFIC_DETAILS_NOT_SET = 0,
    STUDENTDETAILS = 14,
    SCHOOLDETAILS = 15,
    VOLUNTEERDETAILS = 16,
  }
}

export class StudentDetails extends jspb.Message {
  getGrade(): string;
  setGrade(value: string): StudentDetails;

  getDateofbirth(): string;
  setDateofbirth(value: string): StudentDetails;

  getSchoolid(): number;
  setSchoolid(value: number): StudentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentDetails.AsObject;
  static toObject(includeInstance: boolean, msg: StudentDetails): StudentDetails.AsObject;
  static serializeBinaryToWriter(message: StudentDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentDetails;
  static deserializeBinaryFromReader(message: StudentDetails, reader: jspb.BinaryReader): StudentDetails;
}

export namespace StudentDetails {
  export type AsObject = {
    grade: string,
    dateofbirth: string,
    schoolid: number,
  }
}

export class SchoolDetails extends jspb.Message {
  getSchoolname(): string;
  setSchoolname(value: string): SchoolDetails;

  getAddress(): string;
  setAddress(value: string): SchoolDetails;

  getCountry(): string;
  setCountry(value: string): SchoolDetails;

  getProvince(): string;
  setProvince(value: string): SchoolDetails;

  getDistrict(): string;
  setDistrict(value: string): SchoolDetails;

  getSchooltype(): string;
  setSchooltype(value: string): SchoolDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolDetails.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolDetails): SchoolDetails.AsObject;
  static serializeBinaryToWriter(message: SchoolDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolDetails;
  static deserializeBinaryFromReader(message: SchoolDetails, reader: jspb.BinaryReader): SchoolDetails;
}

export namespace SchoolDetails {
  export type AsObject = {
    schoolname: string,
    address: string,
    country: string,
    province: string,
    district: string,
    schooltype: string,
  }
}

export class VolunteerDetails extends jspb.Message {
  getRole(): string;
  setRole(value: string): VolunteerDetails;

  getGraduateyear(): number;
  setGraduateyear(value: number): VolunteerDetails;

  getSafeguardcertificate(): Uint8Array | string;
  getSafeguardcertificate_asU8(): Uint8Array;
  getSafeguardcertificate_asB64(): string;
  setSafeguardcertificate(value: Uint8Array | string): VolunteerDetails;

  getHasinternship(): boolean;
  setHasinternship(value: boolean): VolunteerDetails;

  getIsenrolledinuniversity(): boolean;
  setIsenrolledinuniversity(value: boolean): VolunteerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolunteerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: VolunteerDetails): VolunteerDetails.AsObject;
  static serializeBinaryToWriter(message: VolunteerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolunteerDetails;
  static deserializeBinaryFromReader(message: VolunteerDetails, reader: jspb.BinaryReader): VolunteerDetails;
}

export namespace VolunteerDetails {
  export type AsObject = {
    role: string,
    graduateyear: number,
    safeguardcertificate: Uint8Array | string,
    hasinternship: boolean,
    isenrolledinuniversity: boolean,
  }
}

export class ApproveUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ApproveUserRequest;

  getUserid(): number;
  setUserid(value: number): ApproveUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveUserRequest): ApproveUserRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveUserRequest;
  static deserializeBinaryFromReader(message: ApproveUserRequest, reader: jspb.BinaryReader): ApproveUserRequest;
}

export namespace ApproveUserRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class ApproveUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ApproveUserResponse;

  getMessage(): string;
  setMessage(value: string): ApproveUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveUserResponse): ApproveUserResponse.AsObject;
  static serializeBinaryToWriter(message: ApproveUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveUserResponse;
  static deserializeBinaryFromReader(message: ApproveUserResponse, reader: jspb.BinaryReader): ApproveUserResponse;
}

export namespace ApproveUserResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class RejectUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): RejectUserRequest;

  getUserid(): number;
  setUserid(value: number): RejectUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectUserRequest): RejectUserRequest.AsObject;
  static serializeBinaryToWriter(message: RejectUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectUserRequest;
  static deserializeBinaryFromReader(message: RejectUserRequest, reader: jspb.BinaryReader): RejectUserRequest;
}

export namespace RejectUserRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class RejectUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): RejectUserResponse;

  getMessage(): string;
  setMessage(value: string): RejectUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectUserResponse): RejectUserResponse.AsObject;
  static serializeBinaryToWriter(message: RejectUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectUserResponse;
  static deserializeBinaryFromReader(message: RejectUserResponse, reader: jspb.BinaryReader): RejectUserResponse;
}

export namespace RejectUserResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class ApproveUsersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ApproveUsersRequest;

  getUseridsList(): Array<number>;
  setUseridsList(value: Array<number>): ApproveUsersRequest;
  clearUseridsList(): ApproveUsersRequest;
  addUserids(value: number, index?: number): ApproveUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveUsersRequest): ApproveUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveUsersRequest;
  static deserializeBinaryFromReader(message: ApproveUsersRequest, reader: jspb.BinaryReader): ApproveUsersRequest;
}

export namespace ApproveUsersRequest {
  export type AsObject = {
    token: string,
    useridsList: Array<number>,
  }
}

export class ApproveUsersResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ApproveUsersResponse;

  getMessage(): string;
  setMessage(value: string): ApproveUsersResponse;

  getFaileduseridsList(): Array<number>;
  setFaileduseridsList(value: Array<number>): ApproveUsersResponse;
  clearFaileduseridsList(): ApproveUsersResponse;
  addFaileduserids(value: number, index?: number): ApproveUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveUsersResponse): ApproveUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ApproveUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveUsersResponse;
  static deserializeBinaryFromReader(message: ApproveUsersResponse, reader: jspb.BinaryReader): ApproveUsersResponse;
}

export namespace ApproveUsersResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    faileduseridsList: Array<number>,
  }
}

export class RejectUsersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): RejectUsersRequest;

  getUseridsList(): Array<number>;
  setUseridsList(value: Array<number>): RejectUsersRequest;
  clearUseridsList(): RejectUsersRequest;
  addUserids(value: number, index?: number): RejectUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectUsersRequest): RejectUsersRequest.AsObject;
  static serializeBinaryToWriter(message: RejectUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectUsersRequest;
  static deserializeBinaryFromReader(message: RejectUsersRequest, reader: jspb.BinaryReader): RejectUsersRequest;
}

export namespace RejectUsersRequest {
  export type AsObject = {
    token: string,
    useridsList: Array<number>,
  }
}

export class RejectUsersResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): RejectUsersResponse;

  getMessage(): string;
  setMessage(value: string): RejectUsersResponse;

  getFaileduseridsList(): Array<number>;
  setFaileduseridsList(value: Array<number>): RejectUsersResponse;
  clearFaileduseridsList(): RejectUsersResponse;
  addFaileduserids(value: number, index?: number): RejectUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectUsersResponse): RejectUsersResponse.AsObject;
  static serializeBinaryToWriter(message: RejectUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectUsersResponse;
  static deserializeBinaryFromReader(message: RejectUsersResponse, reader: jspb.BinaryReader): RejectUsersResponse;
}

export namespace RejectUsersResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    faileduseridsList: Array<number>,
  }
}

export class DeleteUsersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): DeleteUsersRequest;

  getUseridsList(): Array<number>;
  setUseridsList(value: Array<number>): DeleteUsersRequest;
  clearUseridsList(): DeleteUsersRequest;
  addUserids(value: number, index?: number): DeleteUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUsersRequest): DeleteUsersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUsersRequest;
  static deserializeBinaryFromReader(message: DeleteUsersRequest, reader: jspb.BinaryReader): DeleteUsersRequest;
}

export namespace DeleteUsersRequest {
  export type AsObject = {
    token: string,
    useridsList: Array<number>,
  }
}

export class DeleteUsersResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteUsersResponse;

  getMessage(): string;
  setMessage(value: string): DeleteUsersResponse;

  getFaileduseridsList(): Array<number>;
  setFaileduseridsList(value: Array<number>): DeleteUsersResponse;
  clearFaileduseridsList(): DeleteUsersResponse;
  addFaileduserids(value: number, index?: number): DeleteUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUsersResponse): DeleteUsersResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUsersResponse;
  static deserializeBinaryFromReader(message: DeleteUsersResponse, reader: jspb.BinaryReader): DeleteUsersResponse;
}

export namespace DeleteUsersResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    faileduseridsList: Array<number>,
  }
}

export class GetUserProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserProfileRequest;

  getUserid(): number;
  setUserid(value: number): GetUserProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserProfileRequest): GetUserProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserProfileRequest;
  static deserializeBinaryFromReader(message: GetUserProfileRequest, reader: jspb.BinaryReader): GetUserProfileRequest;
}

export namespace GetUserProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class GetUserProfileResponse extends jspb.Message {
  getProfile(): UserProfile | undefined;
  setProfile(value?: UserProfile): GetUserProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetUserProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserProfileResponse): GetUserProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserProfileResponse;
  static deserializeBinaryFromReader(message: GetUserProfileResponse, reader: jspb.BinaryReader): GetUserProfileResponse;
}

export namespace GetUserProfileResponse {
  export type AsObject = {
    profile?: UserProfile.AsObject,
  }
}

export class UpdateAdminProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateAdminProfileRequest;

  getUserid(): number;
  setUserid(value: number): UpdateAdminProfileRequest;

  getName(): string;
  setName(value: string): UpdateAdminProfileRequest;

  getGender(): string;
  setGender(value: string): UpdateAdminProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateAdminProfileRequest;

  getBio(): string;
  setBio(value: string): UpdateAdminProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateAdminProfileRequest;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UpdateAdminProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateAdminProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminProfileRequest): UpdateAdminProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAdminProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminProfileRequest;
  static deserializeBinaryFromReader(message: UpdateAdminProfileRequest, reader: jspb.BinaryReader): UpdateAdminProfileRequest;
}

export namespace UpdateAdminProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
    name: string,
    gender: string,
    address: string,
    bio: string,
    phone: string,
    profilepicture: Uint8Array | string,
    email: string,
  }
}

export class UpdateAdminProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateAdminProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateAdminProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminProfileResponse): UpdateAdminProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAdminProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminProfileResponse;
  static deserializeBinaryFromReader(message: UpdateAdminProfileResponse, reader: jspb.BinaryReader): UpdateAdminProfileResponse;
}

export namespace UpdateAdminProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class UpdateSchoolProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateSchoolProfileRequest;

  getUserid(): number;
  setUserid(value: number): UpdateSchoolProfileRequest;

  getContactpersonname(): string;
  setContactpersonname(value: string): UpdateSchoolProfileRequest;

  getGender(): string;
  setGender(value: string): UpdateSchoolProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateSchoolProfileRequest;

  getSchoolname(): string;
  setSchoolname(value: string): UpdateSchoolProfileRequest;

  getSchoolemail(): string;
  setSchoolemail(value: string): UpdateSchoolProfileRequest;

  getSchooltype(): string;
  setSchooltype(value: string): UpdateSchoolProfileRequest;

  getContactemail(): string;
  setContactemail(value: string): UpdateSchoolProfileRequest;

  getContactpersonnationalid(): string;
  setContactpersonnationalid(value: string): UpdateSchoolProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateSchoolProfileRequest;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UpdateSchoolProfileRequest;

  getBio(): string;
  setBio(value: string): UpdateSchoolProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchoolProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchoolProfileRequest): UpdateSchoolProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSchoolProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchoolProfileRequest;
  static deserializeBinaryFromReader(message: UpdateSchoolProfileRequest, reader: jspb.BinaryReader): UpdateSchoolProfileRequest;
}

export namespace UpdateSchoolProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
    contactpersonname: string,
    gender: string,
    address: string,
    schoolname: string,
    schoolemail: string,
    schooltype: string,
    contactemail: string,
    contactpersonnationalid: string,
    phone: string,
    profilepicture: Uint8Array | string,
    bio: string,
  }
}

export class UpdateSchoolProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateSchoolProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateSchoolProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchoolProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchoolProfileResponse): UpdateSchoolProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSchoolProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchoolProfileResponse;
  static deserializeBinaryFromReader(message: UpdateSchoolProfileResponse, reader: jspb.BinaryReader): UpdateSchoolProfileResponse;
}

export namespace UpdateSchoolProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class UpdateStudentProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateStudentProfileRequest;

  getUserid(): number;
  setUserid(value: number): UpdateStudentProfileRequest;

  getFirstname(): string;
  setFirstname(value: string): UpdateStudentProfileRequest;

  getLastname(): string;
  setLastname(value: string): UpdateStudentProfileRequest;

  getGender(): string;
  setGender(value: string): UpdateStudentProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateStudentProfileRequest;

  getGrade(): string;
  setGrade(value: string): UpdateStudentProfileRequest;

  getDateofbirth(): string;
  setDateofbirth(value: string): UpdateStudentProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateStudentProfileRequest;

  getBio(): string;
  setBio(value: string): UpdateStudentProfileRequest;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UpdateStudentProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateStudentProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudentProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudentProfileRequest): UpdateStudentProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStudentProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudentProfileRequest;
  static deserializeBinaryFromReader(message: UpdateStudentProfileRequest, reader: jspb.BinaryReader): UpdateStudentProfileRequest;
}

export namespace UpdateStudentProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
    firstname: string,
    lastname: string,
    gender: string,
    email: string,
    grade: string,
    dateofbirth: string,
    address: string,
    bio: string,
    profilepicture: Uint8Array | string,
    phone: string,
  }
}

export class UpdateStudentProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateStudentProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateStudentProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudentProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudentProfileResponse): UpdateStudentProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateStudentProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudentProfileResponse;
  static deserializeBinaryFromReader(message: UpdateStudentProfileResponse, reader: jspb.BinaryReader): UpdateStudentProfileResponse;
}

export namespace UpdateStudentProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class UpdateVolunteerProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateVolunteerProfileRequest;

  getUserid(): number;
  setUserid(value: number): UpdateVolunteerProfileRequest;

  getFirstname(): string;
  setFirstname(value: string): UpdateVolunteerProfileRequest;

  getLastname(): string;
  setLastname(value: string): UpdateVolunteerProfileRequest;

  getGender(): string;
  setGender(value: string): UpdateVolunteerProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateVolunteerProfileRequest;

  getNationalid(): string;
  setNationalid(value: string): UpdateVolunteerProfileRequest;

  getGraduateyear(): number;
  setGraduateyear(value: number): UpdateVolunteerProfileRequest;

  getIsenrolledinuniversity(): boolean;
  setIsenrolledinuniversity(value: boolean): UpdateVolunteerProfileRequest;

  getHasinternship(): boolean;
  setHasinternship(value: boolean): UpdateVolunteerProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateVolunteerProfileRequest;

  getBio(): string;
  setBio(value: string): UpdateVolunteerProfileRequest;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UpdateVolunteerProfileRequest;

  getRole(): string;
  setRole(value: string): UpdateVolunteerProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateVolunteerProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVolunteerProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVolunteerProfileRequest): UpdateVolunteerProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVolunteerProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVolunteerProfileRequest;
  static deserializeBinaryFromReader(message: UpdateVolunteerProfileRequest, reader: jspb.BinaryReader): UpdateVolunteerProfileRequest;
}

export namespace UpdateVolunteerProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
    firstname: string,
    lastname: string,
    gender: string,
    email: string,
    nationalid: string,
    graduateyear: number,
    isenrolledinuniversity: boolean,
    hasinternship: boolean,
    address: string,
    bio: string,
    profilepicture: Uint8Array | string,
    role: string,
    phone: string,
  }
}

export class UpdateVolunteerProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateVolunteerProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateVolunteerProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVolunteerProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVolunteerProfileResponse): UpdateVolunteerProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVolunteerProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVolunteerProfileResponse;
  static deserializeBinaryFromReader(message: UpdateVolunteerProfileResponse, reader: jspb.BinaryReader): UpdateVolunteerProfileResponse;
}

export namespace UpdateVolunteerProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class DeleteUserProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): DeleteUserProfileRequest;

  getUserid(): number;
  setUserid(value: number): DeleteUserProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserProfileRequest): DeleteUserProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserProfileRequest;
  static deserializeBinaryFromReader(message: DeleteUserProfileRequest, reader: jspb.BinaryReader): DeleteUserProfileRequest;
}

export namespace DeleteUserProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class DeleteUserProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteUserProfileResponse;

  getMessage(): string;
  setMessage(value: string): DeleteUserProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserProfileResponse): DeleteUserProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserProfileResponse;
  static deserializeBinaryFromReader(message: DeleteUserProfileResponse, reader: jspb.BinaryReader): DeleteUserProfileResponse;
}

export namespace DeleteUserProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class DeactivateAccountRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): DeactivateAccountRequest;

  getUserid(): number;
  setUserid(value: number): DeactivateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateAccountRequest): DeactivateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateAccountRequest;
  static deserializeBinaryFromReader(message: DeactivateAccountRequest, reader: jspb.BinaryReader): DeactivateAccountRequest;
}

export namespace DeactivateAccountRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class DeactivateAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeactivateAccountResponse;

  getMessage(): string;
  setMessage(value: string): DeactivateAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateAccountResponse): DeactivateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateAccountResponse;
  static deserializeBinaryFromReader(message: DeactivateAccountResponse, reader: jspb.BinaryReader): DeactivateAccountResponse;
}

export namespace DeactivateAccountResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class ReactivateAccountRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ReactivateAccountRequest;

  getUserid(): number;
  setUserid(value: number): ReactivateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateAccountRequest): ReactivateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: ReactivateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateAccountRequest;
  static deserializeBinaryFromReader(message: ReactivateAccountRequest, reader: jspb.BinaryReader): ReactivateAccountRequest;
}

export namespace ReactivateAccountRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class ReactivateAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ReactivateAccountResponse;

  getMessage(): string;
  setMessage(value: string): ReactivateAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateAccountResponse): ReactivateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: ReactivateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateAccountResponse;
  static deserializeBinaryFromReader(message: ReactivateAccountResponse, reader: jspb.BinaryReader): ReactivateAccountResponse;
}

export namespace ReactivateAccountResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class GetAccountStatusRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetAccountStatusRequest;

  getUserid(): number;
  setUserid(value: number): GetAccountStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountStatusRequest): GetAccountStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountStatusRequest;
  static deserializeBinaryFromReader(message: GetAccountStatusRequest, reader: jspb.BinaryReader): GetAccountStatusRequest;
}

export namespace GetAccountStatusRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class GetAccountStatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): GetAccountStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountStatusResponse): GetAccountStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountStatusResponse;
  static deserializeBinaryFromReader(message: GetAccountStatusResponse, reader: jspb.BinaryReader): GetAccountStatusResponse;
}

export namespace GetAccountStatusResponse {
  export type AsObject = {
    status: string,
  }
}

export class GetCountriesRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetCountriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesRequest): GetCountriesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesRequest;
  static deserializeBinaryFromReader(message: GetCountriesRequest, reader: jspb.BinaryReader): GetCountriesRequest;
}

export namespace GetCountriesRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetCountriesResponse extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): GetCountriesResponse;
  clearCountriesList(): GetCountriesResponse;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
  static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class GetCountriesNoAuthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesNoAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesNoAuthRequest): GetCountriesNoAuthRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountriesNoAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesNoAuthRequest;
  static deserializeBinaryFromReader(message: GetCountriesNoAuthRequest, reader: jspb.BinaryReader): GetCountriesNoAuthRequest;
}

export namespace GetCountriesNoAuthRequest {
  export type AsObject = {
  }
}

export class GetCountriesNoAuthResponse extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): GetCountriesNoAuthResponse;
  clearCountriesList(): GetCountriesNoAuthResponse;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesNoAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesNoAuthResponse): GetCountriesNoAuthResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountriesNoAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesNoAuthResponse;
  static deserializeBinaryFromReader(message: GetCountriesNoAuthResponse, reader: jspb.BinaryReader): GetCountriesNoAuthResponse;
}

export namespace GetCountriesNoAuthResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class Country extends jspb.Message {
  getName(): string;
  setName(value: string): Country;

  getCode(): string;
  setCode(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    name: string,
    code: string,
  }
}

export class GetSchoolsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetSchoolsRequest;

  getPage(): number;
  setPage(value: number): GetSchoolsRequest;

  getPagesize(): number;
  setPagesize(value: number): GetSchoolsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolsRequest): GetSchoolsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSchoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolsRequest;
  static deserializeBinaryFromReader(message: GetSchoolsRequest, reader: jspb.BinaryReader): GetSchoolsRequest;
}

export namespace GetSchoolsRequest {
  export type AsObject = {
    token: string,
    page: number,
    pagesize: number,
  }
}

export class GetSchoolsResponse extends jspb.Message {
  getSchoolsList(): Array<School>;
  setSchoolsList(value: Array<School>): GetSchoolsResponse;
  clearSchoolsList(): GetSchoolsResponse;
  addSchools(value?: School, index?: number): School;

  getTotalcount(): number;
  setTotalcount(value: number): GetSchoolsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolsResponse): GetSchoolsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSchoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolsResponse;
  static deserializeBinaryFromReader(message: GetSchoolsResponse, reader: jspb.BinaryReader): GetSchoolsResponse;
}

export namespace GetSchoolsResponse {
  export type AsObject = {
    schoolsList: Array<School.AsObject>,
    totalcount: number,
  }
}

export class School extends jspb.Message {
  getSchoolid(): number;
  setSchoolid(value: number): School;

  getName(): string;
  setName(value: string): School;

  getAddress(): string;
  setAddress(value: string): School;

  getCountry(): string;
  setCountry(value: string): School;

  getProvince(): string;
  setProvince(value: string): School;

  getDistrict(): string;
  setDistrict(value: string): School;

  getSchooltype(): string;
  setSchooltype(value: string): School;

  getContactpersonname(): string;
  setContactpersonname(value: string): School;

  getContactemail(): string;
  setContactemail(value: string): School;

  getSchoolemail(): string;
  setSchoolemail(value: string): School;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): School.AsObject;
  static toObject(includeInstance: boolean, msg: School): School.AsObject;
  static serializeBinaryToWriter(message: School, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): School;
  static deserializeBinaryFromReader(message: School, reader: jspb.BinaryReader): School;
}

export namespace School {
  export type AsObject = {
    schoolid: number,
    name: string,
    address: string,
    country: string,
    province: string,
    district: string,
    schooltype: string,
    contactpersonname: string,
    contactemail: string,
    schoolemail: string,
  }
}

export class GetStudentsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetStudentsRequest;

  getPage(): number;
  setPage(value: number): GetStudentsRequest;

  getPagesize(): number;
  setPagesize(value: number): GetStudentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudentsRequest): GetStudentsRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudentsRequest;
  static deserializeBinaryFromReader(message: GetStudentsRequest, reader: jspb.BinaryReader): GetStudentsRequest;
}

export namespace GetStudentsRequest {
  export type AsObject = {
    token: string,
    page: number,
    pagesize: number,
  }
}

export class GetStudentsResponse extends jspb.Message {
  getStudentsList(): Array<Student>;
  setStudentsList(value: Array<Student>): GetStudentsResponse;
  clearStudentsList(): GetStudentsResponse;
  addStudents(value?: Student, index?: number): Student;

  getTotalcount(): number;
  setTotalcount(value: number): GetStudentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudentsResponse): GetStudentsResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudentsResponse;
  static deserializeBinaryFromReader(message: GetStudentsResponse, reader: jspb.BinaryReader): GetStudentsResponse;
}

export namespace GetStudentsResponse {
  export type AsObject = {
    studentsList: Array<Student.AsObject>,
    totalcount: number,
  }
}

export class Student extends jspb.Message {
  getStudentid(): number;
  setStudentid(value: number): Student;

  getFirstname(): string;
  setFirstname(value: string): Student;

  getLastname(): string;
  setLastname(value: string): Student;

  getGrade(): string;
  setGrade(value: string): Student;

  getDateofbirth(): string;
  setDateofbirth(value: string): Student;

  getEmail(): string;
  setEmail(value: string): Student;

  getSchoolid(): number;
  setSchoolid(value: number): Student;

  getSchoolname(): string;
  setSchoolname(value: string): Student;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Student.AsObject;
  static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
  static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Student;
  static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
  export type AsObject = {
    studentid: number,
    firstname: string,
    lastname: string,
    grade: string,
    dateofbirth: string,
    email: string,
    schoolid: number,
    schoolname: string,
  }
}

export class GetVolunteersRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetVolunteersRequest;

  getPage(): number;
  setPage(value: number): GetVolunteersRequest;

  getPagesize(): number;
  setPagesize(value: number): GetVolunteersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVolunteersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVolunteersRequest): GetVolunteersRequest.AsObject;
  static serializeBinaryToWriter(message: GetVolunteersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVolunteersRequest;
  static deserializeBinaryFromReader(message: GetVolunteersRequest, reader: jspb.BinaryReader): GetVolunteersRequest;
}

export namespace GetVolunteersRequest {
  export type AsObject = {
    token: string,
    page: number,
    pagesize: number,
  }
}

export class GetVolunteersResponse extends jspb.Message {
  getVolunteersList(): Array<Volunteer>;
  setVolunteersList(value: Array<Volunteer>): GetVolunteersResponse;
  clearVolunteersList(): GetVolunteersResponse;
  addVolunteers(value?: Volunteer, index?: number): Volunteer;

  getTotalcount(): number;
  setTotalcount(value: number): GetVolunteersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVolunteersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVolunteersResponse): GetVolunteersResponse.AsObject;
  static serializeBinaryToWriter(message: GetVolunteersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVolunteersResponse;
  static deserializeBinaryFromReader(message: GetVolunteersResponse, reader: jspb.BinaryReader): GetVolunteersResponse;
}

export namespace GetVolunteersResponse {
  export type AsObject = {
    volunteersList: Array<Volunteer.AsObject>,
    totalcount: number,
  }
}

export class Volunteer extends jspb.Message {
  getVolunteerid(): number;
  setVolunteerid(value: number): Volunteer;

  getFirstname(): string;
  setFirstname(value: string): Volunteer;

  getLastname(): string;
  setLastname(value: string): Volunteer;

  getDateofbirth(): string;
  setDateofbirth(value: string): Volunteer;

  getRole(): string;
  setRole(value: string): Volunteer;

  getGraduateyear(): number;
  setGraduateyear(value: number): Volunteer;

  getSafeguardcertificate(): Uint8Array | string;
  getSafeguardcertificate_asU8(): Uint8Array;
  getSafeguardcertificate_asB64(): string;
  setSafeguardcertificate(value: Uint8Array | string): Volunteer;

  getEmail(): string;
  setEmail(value: string): Volunteer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volunteer.AsObject;
  static toObject(includeInstance: boolean, msg: Volunteer): Volunteer.AsObject;
  static serializeBinaryToWriter(message: Volunteer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volunteer;
  static deserializeBinaryFromReader(message: Volunteer, reader: jspb.BinaryReader): Volunteer;
}

export namespace Volunteer {
  export type AsObject = {
    volunteerid: number,
    firstname: string,
    lastname: string,
    dateofbirth: string,
    role: string,
    graduateyear: number,
    safeguardcertificate: Uint8Array | string,
    email: string,
  }
}

export class GetVolunteersAndAdminsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetVolunteersAndAdminsRequest;

  getPage(): number;
  setPage(value: number): GetVolunteersAndAdminsRequest;

  getPagesize(): number;
  setPagesize(value: number): GetVolunteersAndAdminsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVolunteersAndAdminsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVolunteersAndAdminsRequest): GetVolunteersAndAdminsRequest.AsObject;
  static serializeBinaryToWriter(message: GetVolunteersAndAdminsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVolunteersAndAdminsRequest;
  static deserializeBinaryFromReader(message: GetVolunteersAndAdminsRequest, reader: jspb.BinaryReader): GetVolunteersAndAdminsRequest;
}

export namespace GetVolunteersAndAdminsRequest {
  export type AsObject = {
    token: string,
    page: number,
    pagesize: number,
  }
}

export class GetVolunteersAndAdminsResponse extends jspb.Message {
  getUsersList(): Array<UserSummary>;
  setUsersList(value: Array<UserSummary>): GetVolunteersAndAdminsResponse;
  clearUsersList(): GetVolunteersAndAdminsResponse;
  addUsers(value?: UserSummary, index?: number): UserSummary;

  getTotalcount(): number;
  setTotalcount(value: number): GetVolunteersAndAdminsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVolunteersAndAdminsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVolunteersAndAdminsResponse): GetVolunteersAndAdminsResponse.AsObject;
  static serializeBinaryToWriter(message: GetVolunteersAndAdminsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVolunteersAndAdminsResponse;
  static deserializeBinaryFromReader(message: GetVolunteersAndAdminsResponse, reader: jspb.BinaryReader): GetVolunteersAndAdminsResponse;
}

export namespace GetVolunteersAndAdminsResponse {
  export type AsObject = {
    usersList: Array<UserSummary.AsObject>,
    totalcount: number,
  }
}

export class GetSchoolsNoAuthRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetSchoolsNoAuthRequest;

  getPagesize(): number;
  setPagesize(value: number): GetSchoolsNoAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolsNoAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolsNoAuthRequest): GetSchoolsNoAuthRequest.AsObject;
  static serializeBinaryToWriter(message: GetSchoolsNoAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolsNoAuthRequest;
  static deserializeBinaryFromReader(message: GetSchoolsNoAuthRequest, reader: jspb.BinaryReader): GetSchoolsNoAuthRequest;
}

export namespace GetSchoolsNoAuthRequest {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

export class GetSchoolsNoAuthResponse extends jspb.Message {
  getSchoolsList(): Array<School>;
  setSchoolsList(value: Array<School>): GetSchoolsNoAuthResponse;
  clearSchoolsList(): GetSchoolsNoAuthResponse;
  addSchools(value?: School, index?: number): School;

  getTotalcount(): number;
  setTotalcount(value: number): GetSchoolsNoAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolsNoAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolsNoAuthResponse): GetSchoolsNoAuthResponse.AsObject;
  static serializeBinaryToWriter(message: GetSchoolsNoAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolsNoAuthResponse;
  static deserializeBinaryFromReader(message: GetSchoolsNoAuthResponse, reader: jspb.BinaryReader): GetSchoolsNoAuthResponse;
}

export namespace GetSchoolsNoAuthResponse {
  export type AsObject = {
    schoolsList: Array<School.AsObject>,
    totalcount: number,
  }
}

export class InitiatePasswordUpdateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): InitiatePasswordUpdateRequest;

  getUserid(): number;
  setUserid(value: number): InitiatePasswordUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePasswordUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePasswordUpdateRequest): InitiatePasswordUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: InitiatePasswordUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePasswordUpdateRequest;
  static deserializeBinaryFromReader(message: InitiatePasswordUpdateRequest, reader: jspb.BinaryReader): InitiatePasswordUpdateRequest;
}

export namespace InitiatePasswordUpdateRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class InitiatePasswordUpdateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): InitiatePasswordUpdateResponse;

  getMessage(): string;
  setMessage(value: string): InitiatePasswordUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePasswordUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePasswordUpdateResponse): InitiatePasswordUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: InitiatePasswordUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePasswordUpdateResponse;
  static deserializeBinaryFromReader(message: InitiatePasswordUpdateResponse, reader: jspb.BinaryReader): InitiatePasswordUpdateResponse;
}

export namespace InitiatePasswordUpdateResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class VerifyAndUpdatePasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyAndUpdatePasswordRequest;

  getUserid(): number;
  setUserid(value: number): VerifyAndUpdatePasswordRequest;

  getVerificationcode(): string;
  setVerificationcode(value: string): VerifyAndUpdatePasswordRequest;

  getNewpassword(): string;
  setNewpassword(value: string): VerifyAndUpdatePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyAndUpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyAndUpdatePasswordRequest): VerifyAndUpdatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyAndUpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyAndUpdatePasswordRequest;
  static deserializeBinaryFromReader(message: VerifyAndUpdatePasswordRequest, reader: jspb.BinaryReader): VerifyAndUpdatePasswordRequest;
}

export namespace VerifyAndUpdatePasswordRequest {
  export type AsObject = {
    token: string,
    userid: number,
    verificationcode: string,
    newpassword: string,
  }
}

export class VerifyAndUpdatePasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyAndUpdatePasswordResponse;

  getMessage(): string;
  setMessage(value: string): VerifyAndUpdatePasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyAndUpdatePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyAndUpdatePasswordResponse): VerifyAndUpdatePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyAndUpdatePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyAndUpdatePasswordResponse;
  static deserializeBinaryFromReader(message: VerifyAndUpdatePasswordResponse, reader: jspb.BinaryReader): VerifyAndUpdatePasswordResponse;
}

export namespace VerifyAndUpdatePasswordResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class GetSchoolIDsByNamesRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetSchoolIDsByNamesRequest;

  getSchoolNamesList(): Array<string>;
  setSchoolNamesList(value: Array<string>): GetSchoolIDsByNamesRequest;
  clearSchoolNamesList(): GetSchoolIDsByNamesRequest;
  addSchoolNames(value: string, index?: number): GetSchoolIDsByNamesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolIDsByNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolIDsByNamesRequest): GetSchoolIDsByNamesRequest.AsObject;
  static serializeBinaryToWriter(message: GetSchoolIDsByNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolIDsByNamesRequest;
  static deserializeBinaryFromReader(message: GetSchoolIDsByNamesRequest, reader: jspb.BinaryReader): GetSchoolIDsByNamesRequest;
}

export namespace GetSchoolIDsByNamesRequest {
  export type AsObject = {
    token: string,
    schoolNamesList: Array<string>,
  }
}

export class GetSchoolIDsByNamesResponse extends jspb.Message {
  getSchoolIdsMap(): jspb.Map<string, number>;
  clearSchoolIdsMap(): GetSchoolIDsByNamesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchoolIDsByNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchoolIDsByNamesResponse): GetSchoolIDsByNamesResponse.AsObject;
  static serializeBinaryToWriter(message: GetSchoolIDsByNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchoolIDsByNamesResponse;
  static deserializeBinaryFromReader(message: GetSchoolIDsByNamesResponse, reader: jspb.BinaryReader): GetSchoolIDsByNamesResponse;
}

export namespace GetSchoolIDsByNamesResponse {
  export type AsObject = {
    schoolIdsMap: Array<[string, number]>,
  }
}

