import React from "react";
import { Spline_Sans_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Instruction from "@/components/organisms/students/dashboard/tournaments/instructions/instruction";
import InstructionBanner from "@/components/organisms/students/dashboard/tournaments/instructions/instruction-banner";
import Winners from "@/components/organisms/students/dashboard/tournaments/overview/week-winners/winners";
import TournamentStatics from "@/components/organisms/students/dashboard/tournaments/overview/week-winners/tournament-statics";
import dynamic from 'next/dynamic'

// ProgressView contains the recharts chart. There is a bug in the library so we have to use dynamic to avoid hydration errors
// This will be reviewed later on
const ProgressView = dynamic(
    () => import('@/components/organisms/students/dashboard/tournaments/overview/week-winners/progress-view'),
    { ssr: false }
  )

const spline_sans_mono = Spline_Sans_Mono({
  weight: '400',
  subsets: ['latin']
})

function page() {
  return (
    <div className="w-full h-full p-10">
      <div className="w-full max-w-md">
        <h1 className={cn(
          "text-foreground font-medium text-4xl",
          spline_sans_mono.className
        )}>Welcome back,</h1>
        <h1 className={cn(
          "text-foreground font-medium text-4xl",
          spline_sans_mono.className
        )}>Umutoni Sandrine</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col gap-5">
          <Instruction />
          <Instruction />
        </div>
        <InstructionBanner />
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <Winners />
        <TournamentStatics />
        <ProgressView value={93} />
      </div>
    </div>
  );
}

export default page;
