"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { Undo2 } from "lucide-react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "hebrew", "arabic"],
});

function NotFound() {
  const router = useRouter();
  const {user, userRole} = useUserStore((state) => state);
  const handleNavigateBack = () => {
    if (user && userRole) {
      let endpoint;
      if (userRole === Roles.ADMIN) {
        endpoint = "/admin/dashboard"
      } else if (userRole === Roles.SCHOOL) {
        endpoint = "/schools/dashboard"
      } else if (userRole === Roles.STUDENT) {
        endpoint = "/students/dashboard"
      } else if (userRole === Roles.VOLUNTEER) {
        endpoint = "/volunteers/dashboard"
      } else {
        endpoint = "/auth/select"
      }
      router.push(endpoint);
    } else {
      router.push("/auth/select");
    }
  };
  return (
    <div className="bg-white min-h-screen grid place-content-center">
      <h1 className={cn("text-6xl text-center font-bold mb-4 text-muted dark:text-white", rubik.className)}>Oops!</h1>
      <h2 className={cn("text-3xl mb-8 text-center font-semibold text-muted dark:text-white", rubik.className)}>Welcome to 70&apos;s</h2>
      <div className="w-[600px] h-[400px] relative">
        <div className="w-full h-full z-0 relative">
          <Image
            src="/static/images/Shopaholics-Dots-and-stars.png"
            alt="Background pattern"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute h-full inset-1 grid place-content-center">
          <div className="w-80 h-80 relative">
            <Image
              src="/static/images/peeps.png"
              alt="70's themed people"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 flex items-center bg-red-200">
        <Button
          onClick={handleNavigateBack}
          className="flex items-center justify-center"
        >
          <Undo2 size={20} className="mr-2" />
          Back 2020s
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
