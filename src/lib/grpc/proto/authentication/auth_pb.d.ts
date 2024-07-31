import * as jspb from 'google-protobuf'



export class SignUpRequest extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): SignUpRequest;

  getLastname(): string;
  setLastname(value: string): SignUpRequest;

  getEmail(): string;
  setEmail(value: string): SignUpRequest;

  getPassword(): string;
  setPassword(value: string): SignUpRequest;

  getUserrole(): string;
  setUserrole(value: string): SignUpRequest;

  getDateofbirth(): string;
  setDateofbirth(value: string): SignUpRequest;

  getSchoolid(): number;
  setSchoolid(value: number): SignUpRequest;

  getSchoolname(): string;
  setSchoolname(value: string): SignUpRequest;

  getAddress(): string;
  setAddress(value: string): SignUpRequest;

  getCountry(): string;
  setCountry(value: string): SignUpRequest;

  getProvince(): string;
  setProvince(value: string): SignUpRequest;

  getDistrict(): string;
  setDistrict(value: string): SignUpRequest;

  getSchooltype(): string;
  setSchooltype(value: string): SignUpRequest;

  getContactpersonname(): string;
  setContactpersonname(value: string): SignUpRequest;

  getContactpersonnumber(): string;
  setContactpersonnumber(value: string): SignUpRequest;

  getContactemail(): string;
  setContactemail(value: string): SignUpRequest;

  getNationalid(): string;
  setNationalid(value: string): SignUpRequest;

  getSchoolattended(): string;
  setSchoolattended(value: string): SignUpRequest;

  getGraduationyear(): number;
  setGraduationyear(value: number): SignUpRequest;

  getRoleinterestedin(): string;
  setRoleinterestedin(value: string): SignUpRequest;

  getSafeguardingcertificate(): boolean;
  setSafeguardingcertificate(value: boolean): SignUpRequest;

  getGrade(): string;
  setGrade(value: string): SignUpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    userrole: string,
    dateofbirth: string,
    schoolid: number,
    schoolname: string,
    address: string,
    country: string,
    province: string,
    district: string,
    schooltype: string,
    contactpersonname: string,
    contactpersonnumber: string,
    contactemail: string,
    nationalid: string,
    schoolattended: string,
    graduationyear: number,
    roleinterestedin: string,
    safeguardingcertificate: boolean,
    grade: string,
  }
}

export class SignUpResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SignUpResponse;

  getMessage(): string;
  setMessage(value: string): SignUpResponse;

  getStatus(): string;
  setStatus(value: string): SignUpResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
  static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpResponse;
  static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    status: string,
  }
}

export class LoginRequest extends jspb.Message {
  getEmailOrId(): string;
  setEmailOrId(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    emailOrId: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LoginResponse;

  getToken(): string;
  setToken(value: string): LoginResponse;

  getUserrole(): string;
  setUserrole(value: string): LoginResponse;

  getUserid(): number;
  setUserid(value: number): LoginResponse;

  getRequireTwoFactor(): boolean;
  setRequireTwoFactor(value: boolean): LoginResponse;

  getRequirePasswordReset(): boolean;
  setRequirePasswordReset(value: boolean): LoginResponse;

  getMessage(): string;
  setMessage(value: string): LoginResponse;

  getStatus(): string;
  setStatus(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    success: boolean,
    token: string,
    userrole: string,
    userid: number,
    requireTwoFactor: boolean,
    requirePasswordReset: boolean,
    message: string,
    status: string,
  }
}

export class GenerateTwoFactorOTPRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GenerateTwoFactorOTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTwoFactorOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTwoFactorOTPRequest): GenerateTwoFactorOTPRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateTwoFactorOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTwoFactorOTPRequest;
  static deserializeBinaryFromReader(message: GenerateTwoFactorOTPRequest, reader: jspb.BinaryReader): GenerateTwoFactorOTPRequest;
}

export namespace GenerateTwoFactorOTPRequest {
  export type AsObject = {
    email: string,
  }
}

export class GenerateTwoFactorOTPResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GenerateTwoFactorOTPResponse;

  getMessage(): string;
  setMessage(value: string): GenerateTwoFactorOTPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTwoFactorOTPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTwoFactorOTPResponse): GenerateTwoFactorOTPResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateTwoFactorOTPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTwoFactorOTPResponse;
  static deserializeBinaryFromReader(message: GenerateTwoFactorOTPResponse, reader: jspb.BinaryReader): GenerateTwoFactorOTPResponse;
}

export namespace GenerateTwoFactorOTPResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class VerifyTwoFactorRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): VerifyTwoFactorRequest;

  getCode(): string;
  setCode(value: string): VerifyTwoFactorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTwoFactorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTwoFactorRequest): VerifyTwoFactorRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyTwoFactorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTwoFactorRequest;
  static deserializeBinaryFromReader(message: VerifyTwoFactorRequest, reader: jspb.BinaryReader): VerifyTwoFactorRequest;
}

export namespace VerifyTwoFactorRequest {
  export type AsObject = {
    email: string,
    code: string,
  }
}

export class PasswordResetRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): PasswordResetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetRequest): PasswordResetRequest.AsObject;
  static serializeBinaryToWriter(message: PasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetRequest;
  static deserializeBinaryFromReader(message: PasswordResetRequest, reader: jspb.BinaryReader): PasswordResetRequest;
}

export namespace PasswordResetRequest {
  export type AsObject = {
    email: string,
  }
}

export class PasswordResetResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): PasswordResetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetResponse): PasswordResetResponse.AsObject;
  static serializeBinaryToWriter(message: PasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetResponse;
  static deserializeBinaryFromReader(message: PasswordResetResponse, reader: jspb.BinaryReader): PasswordResetResponse;
}

export namespace PasswordResetResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ResetPasswordRequest;

  getNewpassword(): string;
  setNewpassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    token: string,
    newpassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class BeginWebAuthnRegistrationRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): BeginWebAuthnRegistrationRequest;

  getUserid(): number;
  setUserid(value: number): BeginWebAuthnRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginWebAuthnRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginWebAuthnRegistrationRequest): BeginWebAuthnRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: BeginWebAuthnRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginWebAuthnRegistrationRequest;
  static deserializeBinaryFromReader(message: BeginWebAuthnRegistrationRequest, reader: jspb.BinaryReader): BeginWebAuthnRegistrationRequest;
}

export namespace BeginWebAuthnRegistrationRequest {
  export type AsObject = {
    token: string,
    userid: number,
  }
}

export class BeginWebAuthnRegistrationResponse extends jspb.Message {
  getOptions(): Uint8Array | string;
  getOptions_asU8(): Uint8Array;
  getOptions_asB64(): string;
  setOptions(value: Uint8Array | string): BeginWebAuthnRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginWebAuthnRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginWebAuthnRegistrationResponse): BeginWebAuthnRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: BeginWebAuthnRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginWebAuthnRegistrationResponse;
  static deserializeBinaryFromReader(message: BeginWebAuthnRegistrationResponse, reader: jspb.BinaryReader): BeginWebAuthnRegistrationResponse;
}

export namespace BeginWebAuthnRegistrationResponse {
  export type AsObject = {
    options: Uint8Array | string,
  }
}

export class FinishWebAuthnRegistrationRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): FinishWebAuthnRegistrationRequest;

  getUserid(): number;
  setUserid(value: number): FinishWebAuthnRegistrationRequest;

  getCredential(): Uint8Array | string;
  getCredential_asU8(): Uint8Array;
  getCredential_asB64(): string;
  setCredential(value: Uint8Array | string): FinishWebAuthnRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishWebAuthnRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishWebAuthnRegistrationRequest): FinishWebAuthnRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: FinishWebAuthnRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishWebAuthnRegistrationRequest;
  static deserializeBinaryFromReader(message: FinishWebAuthnRegistrationRequest, reader: jspb.BinaryReader): FinishWebAuthnRegistrationRequest;
}

export namespace FinishWebAuthnRegistrationRequest {
  export type AsObject = {
    token: string,
    userid: number,
    credential: Uint8Array | string,
  }
}

export class FinishWebAuthnRegistrationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): FinishWebAuthnRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishWebAuthnRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinishWebAuthnRegistrationResponse): FinishWebAuthnRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: FinishWebAuthnRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishWebAuthnRegistrationResponse;
  static deserializeBinaryFromReader(message: FinishWebAuthnRegistrationResponse, reader: jspb.BinaryReader): FinishWebAuthnRegistrationResponse;
}

export namespace FinishWebAuthnRegistrationResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class BeginWebAuthnLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): BeginWebAuthnLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginWebAuthnLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginWebAuthnLoginRequest): BeginWebAuthnLoginRequest.AsObject;
  static serializeBinaryToWriter(message: BeginWebAuthnLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginWebAuthnLoginRequest;
  static deserializeBinaryFromReader(message: BeginWebAuthnLoginRequest, reader: jspb.BinaryReader): BeginWebAuthnLoginRequest;
}

export namespace BeginWebAuthnLoginRequest {
  export type AsObject = {
    email: string,
  }
}

export class BeginWebAuthnLoginResponse extends jspb.Message {
  getOptions(): Uint8Array | string;
  getOptions_asU8(): Uint8Array;
  getOptions_asB64(): string;
  setOptions(value: Uint8Array | string): BeginWebAuthnLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginWebAuthnLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginWebAuthnLoginResponse): BeginWebAuthnLoginResponse.AsObject;
  static serializeBinaryToWriter(message: BeginWebAuthnLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginWebAuthnLoginResponse;
  static deserializeBinaryFromReader(message: BeginWebAuthnLoginResponse, reader: jspb.BinaryReader): BeginWebAuthnLoginResponse;
}

export namespace BeginWebAuthnLoginResponse {
  export type AsObject = {
    options: Uint8Array | string,
  }
}

export class FinishWebAuthnLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): FinishWebAuthnLoginRequest;

  getCredential(): Uint8Array | string;
  getCredential_asU8(): Uint8Array;
  getCredential_asB64(): string;
  setCredential(value: Uint8Array | string): FinishWebAuthnLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishWebAuthnLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishWebAuthnLoginRequest): FinishWebAuthnLoginRequest.AsObject;
  static serializeBinaryToWriter(message: FinishWebAuthnLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishWebAuthnLoginRequest;
  static deserializeBinaryFromReader(message: FinishWebAuthnLoginRequest, reader: jspb.BinaryReader): FinishWebAuthnLoginRequest;
}

export namespace FinishWebAuthnLoginRequest {
  export type AsObject = {
    email: string,
    credential: Uint8Array | string,
  }
}

export class FinishWebAuthnLoginResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): FinishWebAuthnLoginResponse;

  getToken(): string;
  setToken(value: string): FinishWebAuthnLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishWebAuthnLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinishWebAuthnLoginResponse): FinishWebAuthnLoginResponse.AsObject;
  static serializeBinaryToWriter(message: FinishWebAuthnLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishWebAuthnLoginResponse;
  static deserializeBinaryFromReader(message: FinishWebAuthnLoginResponse, reader: jspb.BinaryReader): FinishWebAuthnLoginResponse;
}

export namespace FinishWebAuthnLoginResponse {
  export type AsObject = {
    success: boolean,
    token: string,
  }
}

export class LogoutRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): LogoutRequest;

  getToken(): string;
  setToken(value: string): LogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    userid: number,
    token: string,
  }
}

export class LogoutResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutResponse;

  getMessage(): string;
  setMessage(value: string): LogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

