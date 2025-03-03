import { useRouter } from "next/navigation";
import { Roles, useUserStore } from "./auth.store";
import { validateToken } from "./tokenValidator";
import AppLoader from "@/lib/loader";
import React from 'react';
import { getUserProfile } from "@/core/users/users";
import { USER_PROFILE_KEY, useUserProfile } from "@/hooks/useUserProfile";
import { mutate as globalMutate } from 'swr';

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Roles[]
): React.FC<P> {
  return function WithAuthComponent(props: P) {
    const { user, userRole, logout } = useUserStore();
    const router = useRouter();
    const { profile, isLoading } = useUserProfile();

    // Quick token validation check (synchronous, no API call)
    if (user && !validateToken()) {
      logout();
      router.replace("/auth/select");
      return null;
    }

    // Only show loader during initial fetch, not during background revalidation
    if (isLoading && !profile) {
      return <AppLoader />;
    }

    // Check if user is authenticated and authorized
    if (!user || !userRole || !allowedRoles.includes(userRole) || !profile) {
      router.replace("/auth/select");
      return null;
    }

    // User is authenticated and authorized, render the wrapped component
    return <WrappedComponent {...props} />;
  };
}

// prefetchProfile.ts - Utility to prefetch the profile after login
export const prefetchUserProfile = async (userId: number, token: string) => {
  try {
    const profile = await getUserProfile({ userID: userId, token });
    // Populate the SWR cache
    globalMutate(USER_PROFILE_KEY(userId), profile, false);
    return profile;
  } catch (error) {
    console.error("Failed to prefetch user profile:", error);
    return null;
  }
};
