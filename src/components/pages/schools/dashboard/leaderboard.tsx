import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  StudentInfo,
  TopSchool,
  TopStudent,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

interface LeaderboardProps {
  topSchools: TopSchool.AsObject[];
}

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

function Leaderboard({
  topSchools,
}: LeaderboardProps) {
  return (
    <div className="w-full min-h-40 h-full py-5 flex flex-col items-center justify-center gap-4 bg-background rounded-lg border-2 border-muted">
      <div>
        <h3 className="text-sm text-muted-foreground font-bold uppercase mb-3">
          Leaderboard
        </h3>
        <h3 className="text-xl text-foreground font-bold capitalize">
          Most Points
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mb-2">
        <div className="relative w-24 h-24 rounded-full">
          <Image 
            src={"/static/images/mic-speech.jpg"} 
            alt="profile" 
            fill 
            className="rounded-full w-full h-full"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#22C55E] rounded-full">
            <Crown size={24} className="text-background m-1.5" />
          </div>
        </div>
        <h2 className="text-xl font-medium text-foreground m-0 p-0">
          {topSchools[0].name}
        </h2>
        <span
          className={cn(
            "text-primary text-2xl p-0 m-0 leading-4 font-bold",
            inter.className
          )}
        >
          {topSchools[0].totalPoints}
        </span>
      </div>
      {topSchools.slice(1, 3).map((school, index) => (
        <div className="w-full px-3" key={index}>
          <div className="flex items-center justify-between gap-2 p-3 bg-[#F1F5F9] dark:bg-accent rounded-lg">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl flex items-center">
                <Icons.moveUpRight
                  size={14}
                  className="text-success-foreground w-5 h-5"
                />
                {index + 2}
              </span>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/static/images/mic-speech.jpg" />
                <AvatarFallback>{school.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
            <p className="w-full text-base text-foreground font-medium m-0 p-0 leading-5">
              {school.name}
            </p>
            <b className="text-primary text-xl font-bold">
              {school.totalPoints}
            </b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
