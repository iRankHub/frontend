import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const dummyData = [
  {
    firstName: "Umutoni",
    lastName: "Sandrine",
    school: "Green Hills Academy",
    score: 689,
  },
  {
    firstName: "Manzi",
    lastName: "Herve",
    school: "Riviera High School",
    score: 675,
  },
  {
    firstName: "Rachel",
    lastName: "McDernott",
    school: "Glory Academy",
    score: 650,
  },
];

function Winners() {
  return (
    <div className="w-full">
      <h3 className="text-primary text-xl mb-8">Winners of the week</h3>
      <div className="flex flex-col gap-5">
        {dummyData.map((winner, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="leading-3 mr-12">
              <h3 className="text-foreground text-sm font-bold">
                {winner.firstName + " " + winner.lastName}
              </h3>
              <span className="text-sm text-foreground">{winner.school}</span>
            </div>
            <span className="text-primary text-sm">{winner.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winners;
