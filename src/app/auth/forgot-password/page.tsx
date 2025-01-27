"use client";

import Image from "next/image";
import ForgotPasswordForm from "../volunteer/_form/forgot/forgot-password-form";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

function ForgotPassword() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 md:p-5 lg:px-10">
      <div className="w-full flex flex-col justify-between items-center lg:items-start lg:max-w-md lg:mx-auto">
        <div className="w-full flex flex-col items-center lg:items-start">
          <div className="relative w-40 h-40 md:w-60 md:h-60 mb-6">
            <Image
              src="/static/images/logo-big.png"
              alt="IDebate Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 mb-5 w-full max-w-sm lg:max-w-md">
            <h3 className="font-semibold text-[#0C1421] text-lg md:text-xl text-center lg:text-left">
              🔐 Forgot Your Password?
            </h3>
            <p className={cn("text-sm md:text-base text-darkBlue text-center lg:text-left", rubik)}>
              Don&apos;t worry, it happens to the best of us! Enter your email
              address below, and we&apos;ll send you a link to reset your
              password.
            </p>
          </div>

          <div className="w-full max-w-sm lg:max-w-md">
            <ForgotPasswordForm />
          </div>
        </div>

        <div className="w-full py-4 mt-8">
          <span className="block text-sm md:text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-end">
        <div className="relative w-full max-w-3xl aspect-[4/3] rounded-md">
          <Image
            src="/static/images/2fa-illustration.png"
            alt="Login Art"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
