import { useRouter } from "next/navigation";
import { Roles, useUserStore } from "./auth.store";
import { useEffect } from "react";
import { handleInvalidToken, validateToken } from "./tokenValidator";
import AppLoader from "@/lib/loader";
import { getUserProfile } from "@/core/users/users";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Roles[]
): React.FC<P> {
  return function WithAuthComponent(props: P) {
    const { user, userRole, isLoading, setIsLoading } = useUserStore(
      (state) => state
    );
    const router = useRouter();

    useEffect(() => {
      const validateUserSession = async () => {
        setIsLoading(true);
        
        try {
          if (user && userRole) {
            // First validate the token before making any API calls
            if (!validateToken()) {
              handleInvalidToken();
              return;
            }

            // Try to get user profile - this will help detect invalidated tokens
            try {
              const profile = await getUserProfile({
                userID: user.userId, 
                token: user.token
              });
              
              if (!profile) {
                handleInvalidToken();
                return;
              }
            } catch (error: any) {
              handleInvalidToken();
            }
          }
        } finally {
          setIsLoading(false);
        }
      };

      validateUserSession();
    }, [user, userRole, setIsLoading]);

    if (isLoading) {
      return <AppLoader />;
    }

    if (!user || !userRole || !allowedRoles.includes(userRole)) {
      router.replace("/auth/select");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
