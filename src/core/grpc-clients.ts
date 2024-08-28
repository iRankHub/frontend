import { AuthServiceClient } from "@/lib/grpc/proto/authentication/AuthServiceClientPb";
import { DebateServiceClient } from "@/lib/grpc/proto/debate_management/DebateServiceClientPb";
import { TournamentServiceClient } from "@/lib/grpc/proto/tournament_management/TournamentServiceClientPb";
import { UserManagementServiceClient } from "@/lib/grpc/proto/user_management/UsersServiceClientPb";

const ENVOY_PROXY_URL = process.env.ENVOY_PROXY_URL || "http://localhost:10000";
// const ENVOY_PROXY_URL = "http://localhost:10000"
export const authClient = new AuthServiceClient(ENVOY_PROXY_URL, null, null);
export const tournamentClient = new TournamentServiceClient(ENVOY_PROXY_URL, null, null);
export const userClient = new UserManagementServiceClient(ENVOY_PROXY_URL, null, null);
export const debateClient = new DebateServiceClient(ENVOY_PROXY_URL, null, null);
