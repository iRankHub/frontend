"use client";

import Image from "next/image";
import LoginForm from "../_form/login-form";
import { useState } from "react";
import LoginFormEmail from "../_form/login-form-email";

function Login() {
  const [isUsingEmail, setIsUsingEmail] = useState(false);

  const handleChange = () => setIsUsingEmail(!isUsingEmail);
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5 px-10 min-h-screen bg-white">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-60 h-60">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h3 className="font-bold text-[#0C1421] text-3xl">Welcome Back 👋</h3>
          <p className="text-xl text-darkBlue leading-8 ">
            Sign in to track your progress and dominate the competition!
          </p>
        </div>

        {isUsingEmail ? (
          <LoginFormEmail handleChange={handleChange} />
        ) : (
          <LoginForm handleChange={handleChange} />
        )}
        <div className="mt-auto w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="relative max-w-3xl w-full h-full rounded-md overflow-hidden">
          <Image src="/static/images/volunteers/signup-step-10.jpg" alt="Login Art" fill />
        </div>
      </div>
    </div>
  );
}

export default Login;
