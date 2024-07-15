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

  getSafeguardingcertificate(): Uint8Array | string;
  getSafeguardingcertificate_asU8(): Uint8Array;
  getSafeguardingcertificate_asB64(): string;
  setSafeguardingcertificate(value: Uint8Array | string): SignUpRequest;

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
    safeguardingcertificate: Uint8Array | string,
  }
}

export class SignUpResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SignUpResponse;

  getMessage(): string;
  setMessage(value: string): SignUpResponse;

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
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

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
    email: string,
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
  }
}

