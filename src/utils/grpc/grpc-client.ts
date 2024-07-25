import { Metadata } from "grpc-web";
import { AuthServiceClient } from "../../lib/grpc/proto/authentication/AuthServiceClientPb";
import { LoginRequest, SignUpRequest } from "@/lib/grpc/proto/authentication/auth_pb";

// const ENVOY_PROXY_URL = "host.docker.internal"
const ENVOY_PROXY_URL = 'http://10.220.5.134:10000';
// const ENVOY_PROXY_URL = 'http://localhost:10000';
export const client = new AuthServiceClient(ENVOY_PROXY_URL, null, null);

