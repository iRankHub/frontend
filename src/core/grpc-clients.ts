import { AuthServiceClient } from "@/lib/grpc/proto/authentication/AuthServiceClientPb";
import { DebateServiceClient } from "@/lib/grpc/proto/debate_management/DebateServiceClientPb";
import { NotificationServiceClient } from "@/lib/grpc/proto/notification/NotificationServiceClientPb";
import { TournamentServiceClient } from "@/lib/grpc/proto/tournament_management/TournamentServiceClientPb";
import { UserManagementServiceClient } from "@/lib/grpc/proto/user_management/UsersServiceClientPb";
// import '../envConfig.ts'

// const ENVOY_PROXY_URL = "http://64.226.82.235:10000"
const ENVOY_PROXY_URL = "http://localhost:10000";
export const authClient = new AuthServiceClient(ENVOY_PROXY_URL, null, null);
export const tournamentClient = new TournamentServiceClient(ENVOY_PROXY_URL, null, null);
export const userClient = new UserManagementServiceClient(ENVOY_PROXY_URL, null, null);
export const debateClient = new DebateServiceClient(ENVOY_PROXY_URL, null, null);
export const notificationClient = new NotificationServiceClient(ENVOY_PROXY_URL, null, null);