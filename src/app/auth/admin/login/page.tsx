"use client";

import Image from "next/image";
import LoginFormEmail from "../_form/login-form-email";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function Login() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-60 h-60">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h3 className="font-bold text-[#0C1421] text-3xl">Welcome Back 👋</h3>
          <p className="text-xl text-darkBlue leading-8 ">
            Sign in and take control of the competition with your admin tools.
          </p>
        </div>

        <LoginFormEmail />
        <div className="mt-auto w-full text-center">
          <span
            className={cn(
              "text-sm text-darkBlue uppercase text-center",
              roboto.className
            )}
          >
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

export default Login;
