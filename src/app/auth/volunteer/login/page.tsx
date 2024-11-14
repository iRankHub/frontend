"use client";

import Image from "next/image";
import LoginForm from "../_form/login-form";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

function Login() {
  return (
    <div className="grid 2xl:grid-cols-2 gap-5 p-5 px-10 min-h-screen bg-white">
      <div className="max-w-md mx-auto w-full flex flex-col justify-center">
        <div className="relative w-40 h-40">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <div className="flex flex-col gap-4 mb-3">
          <h3 className="font-bold text-[#0C1421] text-3xl">Welcome Back 👋</h3>
          <p className="text-lg text-darkBlue leading-8 ">
            Sign in to track your progress and dominate the competition!
          </p>
        </div>
        <LoginForm />
        {/* <div className="mt-auto w-full text-center">
          <span className="text-base text-darkBlue uppercase text-center">
            © 2024 ALL RIGHTS RESERVED
          </span>
        </div> */}
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}

        className="hidden 2xl:grid items-center w-full h-full"
      >
        <CarouselContent className="h-full">
          <CarouselItem className="w-full h-full">
            <Card className="border-transparent h-full">
              <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/static/images/volunteers/signup-step-5.jpg"
                  alt="Login Art"
                  fill
                  className="object-top object-cover"
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
