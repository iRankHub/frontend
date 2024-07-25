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

