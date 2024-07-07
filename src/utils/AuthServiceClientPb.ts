/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb'; // proto import: "auth.proto"


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSignUp = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/SignUp',
    grpcWeb.MethodType.UNARY,
    auth_pb.SignUpRequest,
    auth_pb.SignUpResponse,
    (request: auth_pb.SignUpRequest) => {
      return request.serializeBinary();
    },
    auth_pb.SignUpResponse.deserializeBinary
  );

  signUp(
    request: auth_pb.SignUpRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_pb.SignUpResponse>;

  signUp(
    request: auth_pb.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.SignUpResponse) => void): grpcWeb.ClientReadableStream<auth_pb.SignUpResponse>;

  signUp(
    request: auth_pb.SignUpRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.SignUpResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/SignUp',
        request,
        metadata || {},
        this.methodDescriptorSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/SignUp',
    request,
    metadata || {},
    this.methodDescriptorSignUp);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/Login',
    grpcWeb.MethodType.UNARY,
    auth_pb.LoginRequest,
    auth_pb.LoginResponse,
    (request: auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    auth_pb.LoginResponse.deserializeBinary
  );

  login(
    request: auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_pb.LoginResponse>;

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<auth_pb.LoginResponse>;

  login(
    request: auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

}

