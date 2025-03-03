import useSWR, { mutate as globalMutate } from 'swr';
import { useRouter } from "next/navigation";
import { useUserStore } from '@/stores/auth/auth.store';
import { validateToken } from '@/stores/auth/tokenValidator';
import { getUserProfile } from '@/core/users/users';

// SWR cache key creator for user profile
export const USER_PROFILE_KEY = (userId: number) => ['userProfile', userId];

// Custom hook that handles user profile fetching with SWR
export const useUserProfile = () => {
  const { user, logout } = useUserStore();
  const router = useRouter();

  // Only create a cache key if we have a user and valid token
  const key = user && user.userId !== undefined && validateToken()
    ? USER_PROFILE_KEY(user.userId)
    : null;

  // SWR fetcher function
  const fetcher = async () => {
    if (!key || !user || user.userId === undefined || !user.token) {
      return null;
    }

    return getUserProfile({
      userID: user.userId,
      token: user.token
    });
  };

  // Use SWR for caching and automatic revalidation
  const { data: profile, error, isLoading, isValidating, mutate } = useSWR(
    key,
    fetcher,
    {
      revalidateOnFocus: false,       // Don't revalidate when window gets focus
      revalidateOnReconnect: true,    // Revalidate when reconnecting
      dedupingInterval: 60000,        // Dedupe requests within 1 minute
      errorRetryCount: 2,             // Retry failed requests twice
      onError: (err) => {
        // Handle auth errors by clearing user and redirecting
        if (err?.status === 401 || err?.status === 403) {
          logout();
          // Invalidate the cache
          globalMutate(key, null, false);
          router.replace("/auth/select");
        }
      }
    }
  );

  return {
    profile,
    error,
    isLoading: isLoading || isValidating,
    mutate
  };
};
