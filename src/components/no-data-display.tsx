import React from "react";
import { AlertCircle } from "lucide-react";

type TimeRange = "7d" | "30d" | "90d";

interface NoDataDisplayProps {
  timeRange: TimeRange;
  type: "volunteer" | "student" | "school";
}

const getTimeRangeMessage = (timeRange: TimeRange): string => {
  switch (timeRange) {
    case "7d":
      return "No tournament registrations recorded in the last 7 days.";
    case "30d":
      return "No tournament registrations recorded in the last 30 days.";
    case "90d":
      return "No tournament registrations recorded in the last 3 months.";
  }
};

const NoDataDisplay: React.FC<NoDataDisplayProps> = ({ timeRange, type }) => (
  <div className="flex flex-col items-center justify-center h-[300px] text-center p-6 space-y-4">
    <div className="rounded-full bg-orange-100 p-3">
      <AlertCircle className="w-6 h-6 text-orange-500" />
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-foreground">No Registration Data Available</h3>
      <p className="text-gray-500 text-sm max-w-[400px]">
        {getTimeRangeMessage(timeRange)}
        <br />
        {type === "volunteer" ? (
          "Judge for tournaments to start tracking performance trends!"
        ) : "Register for tournaments to start tracking registration trends!"}
      </p>
    </div>
  </div>
);

const LoadingState: React.FC = () => (
  <div className="flex items-center justify-center h-[300px]">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="w-12 h-12 bg-orange-100 rounded-full" />
      <div className="h-4 w-48 bg-orange-100 rounded" />
    </div>
  </div>
);

export { NoDataDisplay, LoadingState };
