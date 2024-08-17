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
  }
}

export class GetUserDetailsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserDetailsRequest;

  getUserid(): number;
  setUserid(value: number): GetUserDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserDetailsRequest): GetUserDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserDetailsRequest;
  static deserializeBinaryFromReader(message: GetUserDetailsRequest, reader: jspb.BinaryReader): GetUserDetailsRequest;
}

export namespace GetUserDetailsRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class GetUserDetailsResponse extends jspb.Message {
  getUser(): UserDetails | undefined;
  setUser(value?: UserDetails): GetUserDetailsResponse;
  hasUser(): boolean;
  clearUser(): GetUserDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserDetailsResponse): GetUserDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserDetailsResponse;
  static deserializeBinaryFromReader(message: GetUserDetailsResponse, reader: jspb.BinaryReader): GetUserDetailsResponse;
}

export namespace GetUserDetailsResponse {
  export type AsObject = {
    user?: UserDetails.AsObject,
  }
}

export class UserDetails extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): UserDetails;

  getName(): string;
  setName(value: string): UserDetails;

  getEmail(): string;
  setEmail(value: string): UserDetails;

  getUserrole(): string;
  setUserrole(value: string): UserDetails;

  getSignupdate(): string;
  setSignupdate(value: string): UserDetails;

  getProfile(): UserProfile | undefined;
  setProfile(value?: UserProfile): UserDetails;
  hasProfile(): boolean;
  clearProfile(): UserDetails;

  getStudentdetails(): StudentDetails | undefined;
  setStudentdetails(value?: StudentDetails): UserDetails;
  hasStudentdetails(): boolean;
  clearStudentdetails(): UserDetails;

  getSchooldetails(): SchoolDetails | undefined;
  setSchooldetails(value?: SchoolDetails): UserDetails;
  hasSchooldetails(): boolean;
  clearSchooldetails(): UserDetails;

  getVolunteerdetails(): VolunteerDetails | undefined;
  setVolunteerdetails(value?: VolunteerDetails): UserDetails;
  hasVolunteerdetails(): boolean;
  clearVolunteerdetails(): UserDetails;

  getGender(): string;
  setGender(value: string): UserDetails;

  getRoleSpecificDetailsCase(): UserDetails.RoleSpecificDetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetails.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
  static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetails;
  static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
}

export namespace UserDetails {
  export type AsObject = {
    userid: number,
    name: string,
    email: string,
    userrole: string,
    signupdate: string,
    profile?: UserProfile.AsObject,
    studentdetails?: StudentDetails.AsObject,
    schooldetails?: SchoolDetails.AsObject,
    volunteerdetails?: VolunteerDetails.AsObject,
    gender: string,
  }

  export enum RoleSpecificDetailsCase { 
    ROLE_SPECIFIC_DETAILS_NOT_SET = 0,
    STUDENTDETAILS = 7,
    SCHOOLDETAILS = 8,
    VOLUNTEERDETAILS = 9,
  }
}

export class UserProfile extends jspb.Message {
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

  getGender(): string;
  setGender(value: string): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    address: string,
    phone: string,
    bio: string,
    profilepicture: Uint8Array | string,
    gender: string,
  }
}

export class StudentDetails extends jspb.Message {
  getGrade(): string;
  setGrade(value: string): StudentDetails;

  getDateofbirth(): string;
  setDateofbirth(value: string): StudentDetails;

  getSchoolid(): number;
  setSchoolid(value: number): StudentDetails;

  getSchoolname(): string;
  setSchoolname(value: string): StudentDetails;

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
    schoolname: string,
  }
}

export class SchoolDetails extends jspb.Message {
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

  getContactpersonname(): string;
  setContactpersonname(value: string): SchoolDetails;

  getContactpersonnumber(): string;
  setContactpersonnumber(value: string): SchoolDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolDetails.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolDetails): SchoolDetails.AsObject;
  static serializeBinaryToWriter(message: SchoolDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolDetails;
  static deserializeBinaryFromReader(message: SchoolDetails, reader: jspb.BinaryReader): SchoolDetails;
}

export namespace SchoolDetails {
  export type AsObject = {
    address: string,
    country: string,
    province: string,
    district: string,
    schooltype: string,
    contactpersonname: string,
    contactpersonnumber: string,
  }
}

export class VolunteerDetails extends jspb.Message {
  getDateofbirth(): string;
  setDateofbirth(value: string): VolunteerDetails;

  getGraduationyear(): number;
  setGraduationyear(value: number): VolunteerDetails;

  getRoleinterestedin(): string;
  setRoleinterestedin(value: string): VolunteerDetails;

  getSafeguardingcertificate(): boolean;
  setSafeguardingcertificate(value: boolean): VolunteerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolunteerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: VolunteerDetails): VolunteerDetails.AsObject;
  static serializeBinaryToWriter(message: VolunteerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolunteerDetails;
  static deserializeBinaryFromReader(message: VolunteerDetails, reader: jspb.BinaryReader): VolunteerDetails;
}

export namespace VolunteerDetails {
  export type AsObject = {
    dateofbirth: string,
    graduationyear: number,
    roleinterestedin: string,
    safeguardingcertificate: boolean,
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

export class UpdateUserProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateUserProfileRequest;

  getUserid(): number;
  setUserid(value: number): UpdateUserProfileRequest;

  getName(): string;
  setName(value: string): UpdateUserProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateUserProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateUserProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateUserProfileRequest;

  getBio(): string;
  setBio(value: string): UpdateUserProfileRequest;

  getProfilepicture(): Uint8Array | string;
  getProfilepicture_asU8(): Uint8Array;
  getProfilepicture_asB64(): string;
  setProfilepicture(value: Uint8Array | string): UpdateUserProfileRequest;

  getGender(): string;
  setGender(value: string): UpdateUserProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserProfileRequest): UpdateUserProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserProfileRequest;
  static deserializeBinaryFromReader(message: UpdateUserProfileRequest, reader: jspb.BinaryReader): UpdateUserProfileRequest;
}

export namespace UpdateUserProfileRequest {
  export type AsObject = {
    token: string,
    userid: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    bio: string,
    profilepicture: Uint8Array | string,
    gender: string,
  }
}

export class UpdateUserProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateUserProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateUserProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserProfileResponse): UpdateUserProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserProfileResponse;
  static deserializeBinaryFromReader(message: UpdateUserProfileResponse, reader: jspb.BinaryReader): UpdateUserProfileResponse;
}

export namespace UpdateUserProfileResponse {
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

  getSafeguardcertificate(): boolean;
  setSafeguardcertificate(value: boolean): Volunteer;

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
    safeguardcertificate: boolean,
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

