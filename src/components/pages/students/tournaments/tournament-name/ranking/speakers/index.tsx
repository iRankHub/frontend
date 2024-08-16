import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { rankings } from "@/components/tables/data/tasks";

type Props = {};

function Speakers({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium">Speaker Ranking</h3>
        <Button
          type="button"
          className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
        >
          Activate
          <span className="sr-only">Activate</span>
        </Button>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          <WinnerCard />
          <WinnerCard />
          <WinnerCard />
        </div>
        <DataTable data={rankings} columns={columns} />
      </div>
    </div>
  );
}

const WinnerCard = () => {
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dmgv5azym/image/upload/v1701766208/samples/smile.jpg"
            alt="user image"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">Mutesi Joy</h3>
              <small className="text-xs text-border">Glorry Academy</small>
            </div>
            <div className="w-8 h-8 relative">
              <Image
                src="/static/images/medal-1.png"
                alt="medal first"
                fill
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-border">Points</span>
              <span className="text-foreground">290</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-border">Wins</span>
              <span className="text-foreground">3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-border">Rank</span>
              <span className="text-foreground">1</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 w-full">
        <Button size="sm" className="w-full hover:bg-primary">
          Bravo!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Speakers;
