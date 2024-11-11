import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";
import { CumulativeWinsLoses } from "./charts/cumulative-wins-chart";
import { CumulativePoints } from "./charts/cumulative-points";
import { TeamChart } from "./charts/Team-chart";
import { CommunityChart } from "./charts/community-chart";

type Props = {};

function Performance({}: Props) {
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden bg-background pb-10">
      <header className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-3 p-5 py-4">
          <h3>Performance Stats</h3>
        </div>
      </header>

      <div className="p-5 lg:p-16">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-primary">
              Performance Cohesion
            </h3>
            <Button type="button" size={"sm"} className="border-dashed h-8">
              <Icons.addCircle className="h-5 w-5 mr-2" />
              Term
            </Button>
          </div>
          <div className="mt-3 border rounded-lg p-2 grid lg:grid-cols-2 gap-5">
            <CumulativeWinsLoses />
            <CumulativePoints />
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-primary">
              Elimination & Attendance
            </h3>
            <Button type="button" size={"sm"} className="border-dashed h-8">
              <Icons.addCircle className="h-5 w-5 mr-2" />
              Term
            </Button>
          </div>
          <div className="mt-3 border rounded-lg p-2 grid lg:grid-cols-2 gap-5">
            <TeamChart count={1} />
            <TeamChart count={2} />
            <TeamChart count={3} />
            <CommunityChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
