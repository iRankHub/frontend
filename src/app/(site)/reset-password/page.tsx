"use client";
import Image from "next/image";
import ResetPasswordForm from "./_form/reset-password-form";
import { Suspense } from "react";
import { Icons } from "@/components/icons";

function Reset() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 md:p-5 lg:px-10">
      <div className="w-full flex flex-col items-center lg:items-start lg:max-w-md lg:mx-auto">
        <Suspense fallback={<Fallback />}>
          <ResetPasswordForm />
        </Suspense>
        <div className="mt-auto w-full py-4">
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
          />
        </div>
      </div>
    </div>
  );
}

const Fallback = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[50vh]">
      <Icons.spinner className="h-8 w-8 md:h-12 md:w-12 animate-spin" />
    </div>
  );
};

export default Reset;
