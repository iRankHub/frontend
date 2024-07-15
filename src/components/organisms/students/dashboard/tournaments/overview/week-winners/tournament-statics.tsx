import { Progress } from "@/components/ui/progress";
import React from "react";

function TournamentStatics() {
  return (
    <div className="w-full">
      <h3 className="text-primary text-xl mb-8">Tournament Statistics</h3>
      <div className="flex flex-col gap-4">
        <div className="w-full leading-10">
          <div className="flex items-center justify-between gap-5">
            <p className="text-foreground">Tournament 1 score</p>
            <p className="text-foreground font-bold">96%</p>
          </div>
          <Progress className="h-1.5 rounded-full bg-[#D9D9D9]" value={96} />
        </div>
        <div className="w-full leading-10">
          <div className="flex items-center justify-between gap-5">
            <p className="text-foreground">Tournament 2 score</p>
            <p className="text-foreground font-bold">85%</p>
          </div>
          <Progress className="h-1.5 rounded-full bg-[#D9D9D9]" value={85} />
        </div>
        <div className="w-full leading-10">
          <div className="flex items-center justify-between gap-5">
            <p className="text-foreground">Tournament 3 score</p>
            <p className="text-foreground font-bold">90%</p>
          </div>
          <Progress className="h-1.5 rounded-full bg-[#D9D9D9]" value={90} />
        </div>
      </div>
    </div>
  );
}

export default TournamentStatics;
