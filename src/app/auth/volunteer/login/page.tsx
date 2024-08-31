"use client";

import Image from "next/image";
import LoginForm from "../_form/login-form";
import { useState } from "react";
import LoginFormEmail from "../_form/login-form-email";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Login() {
  const [isUsingEmail, setIsUsingEmail] = useState(false);

  const handleChange = () => setIsUsingEmail(!isUsingEmail);
  return (
    <div className="grid grid-cols-2 gap-5 p-5 px-10 min-h-screen">
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
      <Carousel>
        <CarouselContent>
          <CarouselItem className="w-full">
            <Card className="border-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/static/images/volunteers/signup-step-5.jpg"
                  alt="Login Art"
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/static/images/volunteers/signup-step-6.jpg"
                  alt="Login Art"
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/static/images/volunteers/signup-step-7.jpg"
                  alt="Login Art"
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="border-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/static/images/volunteers/signup-step-8.jpg"
                  alt="Login Art"
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Login;
