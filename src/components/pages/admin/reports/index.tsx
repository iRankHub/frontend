import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import IncomeOverview from "./income-overview";

type Props = {};

function Reports({}: Props) {
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <div className="w-full rounded-t-md overflow-hidden bg-brown pr-5 flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-3 p-5 py-4">
          <Input
            placeholder="Search name..."
            className="h-8 w-[150px] lg:w-[280px]"
          />
          <Button type="button" className="h-8">
            <Icons.addCircle className="h-5 w-5 mr-2" />
            Year
          </Button>
        </div>
        <Button type="button" className="h-8">
          <Icons.downlaod className="h-5 w-5 mr-2" />
          Download
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10 mx-5">
        <div className="grid grid-cols-2 gap-10">
          <IncomeOverview />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Reports;
