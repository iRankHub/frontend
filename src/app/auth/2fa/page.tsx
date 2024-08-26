"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import TwoFactorOTPForm from "./_form/two-factor-otp-form";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

function ForgotPassword() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-60 h-60">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h3 className="font-semibold text-[#0C1421] text-xl">
            2-Factor Authentication✉️
          </h3>
          <p className={cn("text-sm text-darkBlue", rubik)}>
            Enter your email to receive a one-time verification code.
          </p>
        </div>

        <TwoFactorOTPForm />
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

export default ForgotPassword;
