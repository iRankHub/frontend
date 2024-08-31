"use client";

import Image from "next/image";
import SignupForm from "../_form/signup-form";

function Signup() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
      <div className="flex justify-start">
        <div className="relative max-w-3xl w-full h-full rounded-md overflow-hidden">
          <Image
            src="/static/images/schools/school-signup.png"
            alt="Login Art"
            fill
          />
        </div>
      </div>
      <div className="max-w-md mx-auto w-full flex flex-col items-center">
        <div className="relative w-48 h-48">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <SignupForm />
        {/* <div className="mt-auto w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Signup;
