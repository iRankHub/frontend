"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import TwoFactorStep2 from "../_form/two-factor-otp-step-2-form";
import { Icons } from "@/components/icons";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

function Page() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-60 h-60">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h3 className="font-semibold text-[#0C1421] text-xl">
            Enter Verification Code🔢
          </h3>
          <p className={cn("text-sm text-darkBlue", rubik)}>
            Please enter the 6-digit code sent to your email.
          </p>
        </div>
        <Suspense fallback={<Fallback />}>
          <TwoFactorStep2 />
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

export default Page;
