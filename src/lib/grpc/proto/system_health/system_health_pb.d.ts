import * as jspb from 'google-protobuf'



export class GetSystemHealthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetSystemHealthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemHealthRequest): GetSystemHealthRequest.AsObject;
  static serializeBinaryToWriter(message: GetSystemHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemHealthRequest;
  static deserializeBinaryFromReader(message: GetSystemHealthRequest, reader: jspb.BinaryReader): GetSystemHealthRequest;
}

export namespace GetSystemHealthRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetSystemHealthResponse extends jspb.Message {
  getCpuUsagePercentage(): number;
  setCpuUsagePercentage(value: number): GetSystemHealthResponse;

  getMemoryUsagePercentage(): number;
  setMemoryUsagePercentage(value: number): GetSystemHealthResponse;

  getEphemeralStorageUsed(): number;
  setEphemeralStorageUsed(value: number): GetSystemHealthResponse;

  getEphemeralStorageTotal(): number;
  setEphemeralStorageTotal(value: number): GetSystemHealthResponse;

  getEphemeralStoragePercentage(): number;
  setEphemeralStoragePercentage(value: number): GetSystemHealthResponse;

  getPvcStorageUsed(): number;
  setPvcStorageUsed(value: number): GetSystemHealthResponse;

  getPvcStorageTotal(): number;
  setPvcStorageTotal(value: number): GetSystemHealthResponse;

  getPvcStoragePercentage(): number;
  setPvcStoragePercentage(value: number): GetSystemHealthResponse;

  getNodeCount(): number;
  setNodeCount(value: number): GetSystemHealthResponse;

  getPodCount(): number;
  setPodCount(value: number): GetSystemHealthResponse;

  getPvcCount(): number;
  setPvcCount(value: number): GetSystemHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemHealthResponse): GetSystemHealthResponse.AsObject;
  static serializeBinaryToWriter(message: GetSystemHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemHealthResponse;
  static deserializeBinaryFromReader(message: GetSystemHealthResponse, reader: jspb.BinaryReader): GetSystemHealthResponse;
}

export namespace GetSystemHealthResponse {
  export type AsObject = {
    cpuUsagePercentage: number,
    memoryUsagePercentage: number,
    ephemeralStorageUsed: number,
    ephemeralStorageTotal: number,
    ephemeralStoragePercentage: number,
    pvcStorageUsed: number,
    pvcStorageTotal: number,
    pvcStoragePercentage: number,
    nodeCount: number,
    podCount: number,
    pvcCount: number,
  }
}

