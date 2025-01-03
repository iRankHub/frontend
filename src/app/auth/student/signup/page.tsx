import Image from "next/image";
import SignupForm from "../_form/signup-form";

function Signup() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5 px-10 min-h-screen bg-white">
      <div className="hidden lg:flex justify-start">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <Image src="/static/images/volunteers/signup-step-9.jpg" alt="Login Art" fill />
        </div>
      </div>
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-48 h-48">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <SignupForm />
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
