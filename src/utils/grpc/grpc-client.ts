import { AuthServiceClient } from "../../lib/grpc/proto/authentication/AuthServiceClientPb";

const ENVOY_PROXY_URL = "http://10.110.17.187:10000"
export const client = new AuthServiceClient(ENVOY_PROXY_URL, null, null);

