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
    <div className="grid lg:grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="max-w-md mx-auto w-full flex flex-col justify-between">
        <div />
        <div className="flex flex-col gap-5">
          <div className="relative w-60 h-60">
            <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <h3 className="font-semibold text-[#0C1421] text-xl">
              🔐 Forgot Your Password?
            </h3>
            <p className={cn("text-sm text-darkBlue", rubik)}>
              Don{"`"}t worry, it happens to the best of us! Enter your email
              address below, and we{"`"}ll send you a link to reset your
              password.
            </p>
          </div>

          <ForgotPasswordForm />
        </div>
        <div className="w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="relative max-w-3xl w-full h-full rounded-md">
          <Image
            src="/static/images/2fa-illustration.png"
            alt="Login Art"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
