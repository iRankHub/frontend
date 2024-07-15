import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Spline_Sans_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";

const spline_sans_mono = Spline_Sans_Mono({
  weight: "400",
  subsets: ["latin"],
});

function InstructionBanner() {
  return (
    <div className="bg-white border border-border rounded-md p-5">
      <div className="grid grid-cols-2 items-center h-full gap-5 my-auto">
        <p
          className={cn(
            "text-foreground font-medium text-[34px] leading-tight max-w-xs",
            spline_sans_mono.className
          )}
        >
          DAC 2024 from 14th August - 30th August
        </p>
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/static/images/logo-big.png"
            alt="Idebate Logo"
            width={224}
            height={202}
          />
          <Button
            className="rounded-full bg-transparent border border-primary text-foreground w-32 hover:bg-primary hover:text-white"
            size={"sm"}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InstructionBanner;
