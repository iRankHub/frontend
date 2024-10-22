/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.27.2
 * source: system_health/system_health.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace system_health {
    export class GetSystemHealthRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): GetSystemHealthRequest {
            const message = new GetSystemHealthRequest({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetSystemHealthRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetSystemHealthRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetSystemHealthRequest {
            return GetSystemHealthRequest.deserialize(bytes);
        }
    }
    export class GetSystemHealthResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            cpu_usage_percentage?: number;
            memory_usage_percentage?: number;
            ephemeral_storage_percentage?: number;
            pvc_storage_percentage?: number;
            node_count?: number;
            pod_count?: number;
            pvc_count?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("cpu_usage_percentage" in data && data.cpu_usage_percentage != undefined) {
                    this.cpu_usage_percentage = data.cpu_usage_percentage;
                }
                if ("memory_usage_percentage" in data && data.memory_usage_percentage != undefined) {
                    this.memory_usage_percentage = data.memory_usage_percentage;
                }
                if ("ephemeral_storage_percentage" in data && data.ephemeral_storage_percentage != undefined) {
                    this.ephemeral_storage_percentage = data.ephemeral_storage_percentage;
                }
                if ("pvc_storage_percentage" in data && data.pvc_storage_percentage != undefined) {
                    this.pvc_storage_percentage = data.pvc_storage_percentage;
                }
                if ("node_count" in data && data.node_count != undefined) {
                    this.node_count = data.node_count;
                }
                if ("pod_count" in data && data.pod_count != undefined) {
                    this.pod_count = data.pod_count;
                }
                if ("pvc_count" in data && data.pvc_count != undefined) {
                    this.pvc_count = data.pvc_count;
                }
            }
        }
        get cpu_usage_percentage() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set cpu_usage_percentage(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get memory_usage_percentage() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set memory_usage_percentage(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get ephemeral_storage_percentage() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set ephemeral_storage_percentage(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get pvc_storage_percentage() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set pvc_storage_percentage(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get node_count() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set node_count(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get pod_count() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set pod_count(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get pvc_count() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set pvc_count(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            cpu_usage_percentage?: number;
            memory_usage_percentage?: number;
            ephemeral_storage_percentage?: number;
            pvc_storage_percentage?: number;
            node_count?: number;
            pod_count?: number;
            pvc_count?: number;
        }): GetSystemHealthResponse {
            const message = new GetSystemHealthResponse({});
            if (data.cpu_usage_percentage != null) {
                message.cpu_usage_percentage = data.cpu_usage_percentage;
            }
            if (data.memory_usage_percentage != null) {
                message.memory_usage_percentage = data.memory_usage_percentage;
            }
            if (data.ephemeral_storage_percentage != null) {
                message.ephemeral_storage_percentage = data.ephemeral_storage_percentage;
            }
            if (data.pvc_storage_percentage != null) {
                message.pvc_storage_percentage = data.pvc_storage_percentage;
            }
            if (data.node_count != null) {
                message.node_count = data.node_count;
            }
            if (data.pod_count != null) {
                message.pod_count = data.pod_count;
            }
            if (data.pvc_count != null) {
                message.pvc_count = data.pvc_count;
            }
            return message;
        }
        toObject() {
            const data: {
                cpu_usage_percentage?: number;
                memory_usage_percentage?: number;
                ephemeral_storage_percentage?: number;
                pvc_storage_percentage?: number;
                node_count?: number;
                pod_count?: number;
                pvc_count?: number;
            } = {};
            if (this.cpu_usage_percentage != null) {
                data.cpu_usage_percentage = this.cpu_usage_percentage;
            }
            if (this.memory_usage_percentage != null) {
                data.memory_usage_percentage = this.memory_usage_percentage;
            }
            if (this.ephemeral_storage_percentage != null) {
                data.ephemeral_storage_percentage = this.ephemeral_storage_percentage;
            }
            if (this.pvc_storage_percentage != null) {
                data.pvc_storage_percentage = this.pvc_storage_percentage;
            }
            if (this.node_count != null) {
                data.node_count = this.node_count;
            }
            if (this.pod_count != null) {
                data.pod_count = this.pod_count;
            }
            if (this.pvc_count != null) {
                data.pvc_count = this.pvc_count;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.cpu_usage_percentage != 0)
                writer.writeDouble(1, this.cpu_usage_percentage);
            if (this.memory_usage_percentage != 0)
                writer.writeDouble(2, this.memory_usage_percentage);
            if (this.ephemeral_storage_percentage != 0)
                writer.writeDouble(3, this.ephemeral_storage_percentage);
            if (this.pvc_storage_percentage != 0)
                writer.writeDouble(4, this.pvc_storage_percentage);
            if (this.node_count != 0)
                writer.writeInt32(5, this.node_count);
            if (this.pod_count != 0)
                writer.writeInt32(6, this.pod_count);
            if (this.pvc_count != 0)
                writer.writeInt32(7, this.pvc_count);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetSystemHealthResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetSystemHealthResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.cpu_usage_percentage = reader.readDouble();
                        break;
                    case 2:
                        message.memory_usage_percentage = reader.readDouble();
                        break;
                    case 3:
                        message.ephemeral_storage_percentage = reader.readDouble();
                        break;
                    case 4:
                        message.pvc_storage_percentage = reader.readDouble();
                        break;
                    case 5:
                        message.node_count = reader.readInt32();
                        break;
                    case 6:
                        message.pod_count = reader.readInt32();
                        break;
                    case 7:
                        message.pvc_count = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetSystemHealthResponse {
            return GetSystemHealthResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedSystemHealthServiceService {
        static definition = {
            GetSystemHealth: {
                path: "/system_health.SystemHealthService/GetSystemHealth",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetSystemHealthRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetSystemHealthRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetSystemHealthResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetSystemHealthResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetSystemHealth(call: grpc_1.ServerUnaryCall<GetSystemHealthRequest, GetSystemHealthResponse>, callback: grpc_1.sendUnaryData<GetSystemHealthResponse>): void;
    }
    export class SystemHealthServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedSystemHealthServiceService.definition, "SystemHealthService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetSystemHealth: GrpcUnaryServiceInterface<GetSystemHealthRequest, GetSystemHealthResponse> = (message: GetSystemHealthRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<GetSystemHealthResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<GetSystemHealthResponse>, callback?: grpc_1.requestCallback<GetSystemHealthResponse>): grpc_1.ClientUnaryCall => {
            return super.GetSystemHealth(message, metadata, options, callback);
        };
    }
}
