import { AlarmClock, Pin } from "lucide-react";
import React from "react";

type Props = {};

function Notifications({}: Props) {
  return (
    <div className="w-full">
      <div className="flex items-start gap-3 bg-accent/80 p-5 border-b cursor-pointer">
        <AlarmClock className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <p className="text-foreground text-sm font-semibold">
            National Debate Championship is happening tomorrow. Check logistics
          </p>
          <span className="text-sm">8 min ago</span>
        </div>
        <Pin className="w-10 h-10 rotate-45 text-primary" />
      </div>
      <div className="flex items-start gap-3 bg-accent/80 p-5 border-b cursor-pointer">
        <AlarmClock className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <p className="text-foreground text-sm font-semibold">
            National Debate Championship is happening tomorrow. Check logistics
          </p>
          <span className="text-sm">8 min ago</span>
        </div>
        <Pin className="w-10 h-10 rotate-45 text-primary" />
      </div>
    </div>
  );
}

export default Notifications;
