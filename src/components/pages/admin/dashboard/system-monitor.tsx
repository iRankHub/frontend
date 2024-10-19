import { Progress } from "@/components/ui/progress";
import { CircleCheckBig, CircleX, Clock } from "lucide-react";
import React from "react";

function SystemMonitor() {
  return (
    <div className="col-span-2 px-7 py-5 bg-background rounded-lg border-2 border-muted mt-5">
      <h2 className="text-foreground text-xl capitalize">System Health</h2>
      <div className="w-full flex flex-col gap-8 mt-5">
        <div className="w-full h-auto flex rounded-md overflow-hidden border border-muted">
          <div className="h-full w-auto flex items-center bg-muted gap-4 py-3 px-4">
            <div className="rounded-full bg-success">
              <CircleCheckBig className="w-5 h-5 text-white m-1" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-sm">Done at</span>
              <div className="flex items-center gap-2">
                <Clock className="text-[#778399] w-4 h-4" />
                <p className="m-0 text-xs text-[#778399]">9:00 am</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between gap-5 px-5">
            <h2 className="text-foreground capitalize">Daily System Check</h2>
            <div className="block">
              <p className="text-[#23235F] dark:text-foreground">100% complete</p>
              <Progress value={100} className="h-1 mt-2" />
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex rounded-md overflow-hidden border border-muted">
          <div className="h-full w-auto flex items-center bg-muted gap-4 py-3 px-4">
            <div className="rounded-full bg-destructive">
              <CircleX className="w-5 h-5 text-white m-1" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-foreground text-sm">Done at</span>
              <div className="flex items-center gap-2">
                <Clock className="text-[#778399] w-4 h-4" />
                <p className="m-0 text-xs text-[#778399]">9:00 am</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between gap-5 px-5">
            <h2 className="text-foreground capitalize">Daily System Check</h2>
            <div className="block">
              <p className="text-[#23235F] dark:text-foreground">24% complete</p>
              <Progress value={33} className="h-1 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemMonitor;
