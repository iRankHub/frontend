"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import ResetPasswordForm from "./_form/reset-password-form";
import { Suspense } from "react";
import { Icons } from "@/components/icons";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

function Reset() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-60 h-60">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h3 className="font-semibold text-[#0C1421] text-xl">
            🔏 Set New Password
          </h3>
          <p className={cn("text-sm text-darkBlue", rubik)}>
            Enter your new password below to regain access to your account.
          </p>
        </div>

        <Suspense fallback={<Fallback />}>
          <ResetPasswordForm />
        </Suspense>
        <div className="mt-auto w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative max-w-3xl w-full h-full rounded-md">
          <Image src="/static/images/Login-Art.png" alt="Login Art" fill />
        </div>
      </div>
    </div>
  );
}

const Fallback = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Icons.spinner className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default Reset;
