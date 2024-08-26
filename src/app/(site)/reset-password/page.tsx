"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import ResetPasswordForm from "./_form/reset-password-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

function Reset() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  if (!token) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-10">
        <h3 className="text-3xl font-semibold text-foreground">Token Invalid.</h3>
        <p className="text-darkBlue text-lg my-3">
          The token provided is invalid or has expired. Please request a new
          one.
        </p>
        <Button
          variant="default"
          onClick={() => router.push("/auth/volunteer/forgot")}

        >
          Request New Token
        </Button>
      </div>
    );
  }
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

        <ResetPasswordForm token={token} />
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

export default Reset;
