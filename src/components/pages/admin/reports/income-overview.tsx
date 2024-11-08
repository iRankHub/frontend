import React from "react";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { OverviewChart } from "./charts/overview-chart";

type Props = {};

const archivo = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function IncomeOverview({}: Props) {
  return (
    <div className="w-full h-full p-3">
      <h3
        className={cn("text-lg font-bold text-foreground", archivo.className)}
      >
        Income Overview
      </h3>
      <div className="flex flex-col">
        <h3
          className={cn(
            "text-lg font-semibold text-muted-foreground",
            archivo.className
          )}
        >
          Total Revenue:
        </h3>
        <h3
          className={cn("text-lg font-bold text-foreground", archivo.className)}
        >
          RWF 9,542,000.00
        </h3>
        <small className="text-sm text-muted-foreground">From 2022</small>
        <OverviewChart />
      </div>
    </div>
  );
}
