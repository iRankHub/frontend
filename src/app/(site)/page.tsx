"use client";

import { useUserStore } from "@/stores/auth/auth.store";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, userRole, logout } = useUserStore((state) => state);
  const router = useRouter();

  if (!user) {
    router.push("/auth/select");
  } else {
    switch (userRole) {
      case "student":
        router.push("/students/dashboard");
        break;
      case "school":
        router.push("/schools/dashboard");
        break;
      case "volunteer":
        router.push("/volunteer/dashboard");
        break;
      default:
        logout();
        router.push("/auth/select");
        break;
    }
  }
}
