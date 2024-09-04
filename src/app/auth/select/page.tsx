"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState<
    "school" | "student" | "volunteer" | null
  >(null);
  const router = useRouter();
  const handlePress = () => {
    router.push(`/auth/${selected}/login`);
  };
  return (
    <div className="min-h-screen bg-primary px-5 py-5 lg:px-20 grid">
      <div className="bg-white rounded-2xl mx-auto w-full max-w-7xl my-auto p-8 flex flex-col items-center overflow-hidden">
        <div className="relative w-40 h-40">
          <Image src="/static/images/logo-big.png" alt="IDebate Logo" fill />
        </div>
        <h3 className="text-foreground dark:text-background font-bold text-2xl mb-2">
          Select your role
        </h3>
        <span className="text-base text-[#7D7878] mb-4">
          To start using iRankHub, select the user role that you will be using
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          <div
            className={cn(
              "group flex flex-col justify-center items-center gap-4 shadow-lg border-2 rounded-2xl hover:border-primary cursor-pointer border-[#D9D9D9] w-64 h-64",
              selected === "student" && "border-primary"
            )}
            onClick={() => setSelected("student")}
          >
            <Image
              src="/static/images/StudentSVG.png"
              alt="Student"
              width={142}
              height={127}
            />
            <h3 className="text-foreground dark:text-background group-hover:text-primary text-lg font-medium">
              Student
            </h3>
          </div>
          <div
            className={cn(
              "group flex flex-col justify-center items-center gap-4 shadow-lg border-2 rounded-2xl hover:border-primary cursor-pointer border-[#D9D9D9] w-64 h-64",
              selected === "school" && "border-primary"
            )}
            onClick={() => setSelected("school")}
          >
            <Image
              src="/static/images/SchoolSVG.png"
              alt="Student"
              width={142}
              height={127}
            />
            <h3 className="text-foreground dark:text-background group-hover:text-primary text-lg font-medium">
              School
            </h3>
          </div>
          <div
            className={cn(
              "group flex flex-col justify-center items-center gap-4 shadow-lg border-2 rounded-2xl hover:border-primary cursor-pointer border-[#D9D9D9] w-64 h-64",
              selected === "volunteer" && "border-primary"
            )}
            onClick={() => setSelected("volunteer")}
          >
            <Image
              src="/static/images/Education-Student.png"
              alt="Student"
              width={142}
              height={127}
            />
            <h3 className="text-foreground dark:text-background group-hover:text-primary text-lg font-medium">
              Volunteer
            </h3>
          </div>
        </div>
        <Button
          disabled={selected === null}
          variant={"default"}
          size={"lg"}
          className="w-52 mt-10"
          onClick={handlePress}
        >
          Continue
          <span className="sr-only">Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default Page;
