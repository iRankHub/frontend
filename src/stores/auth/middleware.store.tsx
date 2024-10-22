import { useRouter } from "next/navigation";
import { Roles, useUserStore } from "./auth.store";
import { useEffect } from "react";
import { handleInvalidToken, validateToken } from "./tokenValidator";
import AppLoader from "@/lib/loader";

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
      setIsLoading(false);
      
      if (user && userRole) {
        if (!validateToken()) {
          handleInvalidToken();
          return;
        }
      }
    }, [user, userRole, setIsLoading]);

    if (isLoading) {
      return <AppLoader />
    }

    if (!user || !userRole || !allowedRoles.includes(userRole)) {
      router.replace("/auth/select");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
