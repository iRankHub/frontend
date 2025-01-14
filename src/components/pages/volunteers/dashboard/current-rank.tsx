import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

interface CurrentRankProps {
  currentRank: number;
  totalVolunteers: number;
}

function CurrentRank({ currentRank, totalVolunteers }: CurrentRankProps) {
  return (
    <div className="max-w-full md:max-w-xs w-full h-full flex flex-col items-center justify-center gap-4 bg-background rounded-lg border-2 border-muted">
      <h3 className="text-xl text-foreground font-semibold">Current Rank</h3>
      <div className="flex items-center justify-center gap-3">
        <h3 className={cn("text-primary text-4xl font-bold", inter.className)}>
          {currentRank}
        </h3>
        <TrendingUp size={14} className="text-success-foreground" />
      </div>
      <p className="text-muted-text text-sm">Out of {totalVolunteers} volunteers</p>
    </div>
  );
}

export default CurrentRank;

