import { useRouter } from "next/navigation";
import { Roles, useUserStore } from "./auth.store";
import { useEffect } from "react";

// Auth middleware for pages
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
      // Set loading to false once the component mounts on the client side
      setIsLoading(false);
    }, [setIsLoading]);

    if (isLoading) {
      return <div>Loading...</div>; // Or your custom loading component
    }

    if (!user || !userRole || !allowedRoles.includes(userRole)) {
      router.replace("/auth/select");
    }

    return <WrappedComponent {...props} />;
  };
}
