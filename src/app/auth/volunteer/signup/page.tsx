"use client";

import Image from "next/image";
import SignupForm from "../_form/signup-form";
import React from "react";

function Signup() {
  const [activeStep, setActiveStep] = React.useState(1);

  const volunteerImage = () => {
    switch (activeStep) {
      case 1:
        return "/static/images/volunteers/signup-step-1.jpg";
      case 2:
        return "/static/images/volunteers/signup-step-2.jpg";
      case 3:
        return "/static/images/volunteers/signup-step-3.jpg";
      case 4:
        return "/static/images/volunteers/signup-step-4.jpg";
      default:
        return "/static/images/volunteers/signup-step-1.jpg";
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5 px-10 min-h-screen bg-white">
      <div className="hidden lg:flex justify-start">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <Image src={volunteerImage()} alt="Login Art" fill className="object-top object-cover" />
        </div>
      </div>
      <div className="max-w-md mx-auto w-full flex flex-col items-center">
        <div className="relative w-48 h-48">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <SignupForm activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className="mt-auto w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
