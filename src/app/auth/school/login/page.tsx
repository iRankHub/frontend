import Image from "next/image";
import LoginForm from "../_form/login-form";

function Login() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5 px-10 min-h-screen bg-white">
      <div className="max-w-md mx-auto w-full flex flex-col">
        <div className="relative w-48 h-48">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <h3 className="font-bold text-[#0C1421] text-2xl">Welcome Back 👋</h3>
          <p className="text-lg text-darkBlue leading-7">
            Sign in to track your progress and dominate the competition!
          </p>
        </div>
        <LoginForm />
        <div className="mt-auto w-full text-center">
          <span className="text-sm text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="relative max-w-3xl w-full h-full rounded-md overflow-hidden">
          <Image src="/static/images/schools/school-signup.png" alt="Login Art" fill />
        </div>
      </div>
    </div>
  );
}

export default Login;
