import { AnalyticsServiceClient } from "@/lib/grpc/proto/analytics/AnalyticsServiceClientPb";
import { AuthServiceClient } from "@/lib/grpc/proto/authentication/AuthServiceClientPb";
import { DebateServiceClient } from "@/lib/grpc/proto/debate_management/DebateServiceClientPb";
import { NotificationServiceClient } from "@/lib/grpc/proto/notification/NotificationServiceClientPb";
import { SystemHealthServiceClient } from "@/lib/grpc/proto/system_health/System_healthServiceClientPb";
import { TournamentServiceClient } from "@/lib/grpc/proto/tournament_management/TournamentServiceClientPb";
import { UserManagementServiceClient } from "@/lib/grpc/proto/user_management/UsersServiceClientPb";

const ENVOY_PROXY_URL = process.env.NEXT_PUBLIC_ENVOY_PROXY_URL!;
export const authClient = new AuthServiceClient(ENVOY_PROXY_URL, null, null);
export const tournamentClient = new TournamentServiceClient(ENVOY_PROXY_URL, null, null);
export const userClient = new UserManagementServiceClient(ENVOY_PROXY_URL, null, null);
export const debateClient = new DebateServiceClient(ENVOY_PROXY_URL, null, null);
export const systemHealthClient = new SystemHealthServiceClient(ENVOY_PROXY_URL, null, null);
export const notificationClient = new NotificationServiceClient(ENVOY_PROXY_URL, null, null);
export const analyticsClient = new AnalyticsServiceClient(ENVOY_PROXY_URL, null, null);