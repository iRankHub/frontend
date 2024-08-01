import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";
import TournamentForm from "./tournament-form";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

function CreateTournament() {
  return (
    <div className="mt-7 grid grid-cols-3 gap-5">
      <div className="w-full">
        <h3
          className={cn(
            "text-foreground font-semibold text-2xl tracking-wider",
            inter.className
          )}
        >
          Leagues
        </h3>
        <div className="flex items-center gap-3 mt-2 h-auto">
          <Command className="rounded-md w-full border">
            <CommandInput
              placeholder="Search leagues..."
              className="ring-0 h-8"
            />
          </Command>
          <Button type="button" size={"icon"} className="h-8 rounded-sm hover:bg-primary">
            <Icons.add className="text-white w-3.5 h-3.5" />
          </Button>
        </div>
        <div className="w-full mt-1">
          <p className="text-muted-foreground text-xs italic font-medium">
            20 records found
          </p>
          <ScrollArea className="w-full h-[calc(100vh_-_300px)]">
            <div className="px-2">
              <League title="League 1" subTitle="Local" />
              <League title="League 2" subTitle="International" />
              <League title="League 3" subTitle="Local" />
              <League title="League 4" subTitle="Local" />
              <League title="League 5" subTitle="International" />
              <League title="League 6" subTitle="International" />
              <League title="League 7" subTitle="International" />
              <League title="League 8" subTitle="International" />
              <League title="League 9" subTitle="Local" />
              <League title="League 10" subTitle="International" />
              <League title="League 11" subTitle="International" />
              <League title="League 12" subTitle="Local" />
              <League title="League 13" subTitle="Local" />
              <League title="League 14" subTitle="Local" />
              <League title="League 15" subTitle="Local" />
              <League title="League 16" subTitle="International" />
              <League title="League 17" subTitle="International" />
              <League title="League 18" subTitle="Local" />
              <League title="League 19" subTitle="International" />
              <League title="League 20" subTitle="Local" />
              <League title="League 21" subTitle="International" />
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="col-span-2 bg-background min-h-full rounded-md border border-gray-200">
        <TournamentForm />
      </div>
    </div>
  );
}

interface LeaguProps {
  title: string;
  subTitle: string;
}
const League = ({ subTitle, title }: LeaguProps) => {
  return (
    <div className="w-full flex flex-col mt-4">
      <span className="text-sm text-foreground font-medium leading-tight p-0 m-0">
        {title}
      </span>
      <span className="text-xs text-muted-foreground p-0 m-0 leading-tight">
        {subTitle}
      </span>
    </div>
  );
};

export default CreateTournament;
