import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {};

function TournamentForm({}: Props) {
  return (
    <div className="p-5">
      <div className="w-full bg-brown rounded-md h-60 p-5 flex items-end">
        <div className="flex-1">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.calendar className="w-3.5 h-3.5 text-white" />
              Pick a Date
            </div>
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.mapPin className="w-3.5 h-3.5 text-white" />
              Location
            </div>
          </div>
          <Input
            placeholder="Your Tournament Name"
            className="text-white placeholder:text-white text-xl font-bold w-72 mt-1 bg-transparent outline-none border-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 p-0"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Icons.imagePlus className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Icons.pencilLine className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Trash2 className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TournamentForm;
