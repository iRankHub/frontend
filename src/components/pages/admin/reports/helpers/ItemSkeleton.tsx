import { Skeleton } from "@/components/ui/skeleton";
import { TrendingDown, TrendingUp } from "lucide-react";

const StatsItemSkeleton = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-16" />
    </div>
    <Skeleton className="h-4 w-12" />
  </div>
);

const EmptyStats = () => (
  <div className="col-span-2 flex flex-col items-center justify-center py-8 text-center">
    <div className="text-gray-400 mb-2">No data available</div>
    <p className="text-sm text-gray-500">
      There are no statistics available for the selected region
    </p>
  </div>
);

interface StatsItemProps {
  region: string;
  trend: number;
  value: number;
  color: "sky" | "green" | "red";
  trending: "up" | "down";
}

const StatsItem: React.FC<StatsItemProps> = ({
  region,
  trend,
  value,
  color,
  trending,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full bg-${color}-500 border-2 border-${color}-100`}
        ></div>
        <span className="text-sm">{region}</span>
        {trending === "up" ? (
          <span className="text-sm text-green-500 flex items-center gap-0.5">
            <TrendingUp className="h-3 w-3" />
            {trend}%
          </span>
        ) : (
          <span className="text-sm text-red-500 flex items-center gap-0.5">
            <TrendingDown className="h-3 w-3" />
            {trend}%
          </span>
        )}
      </div>
      <span className="text-sm">{value}</span>
    </div>
  );
};

export {StatsItemSkeleton, EmptyStats, StatsItem}