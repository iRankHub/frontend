import React from "react";
import { Attendance } from "./charts/attendence-chart";
import {
  Check,
  TrendingDown,
  TrendingUp,
  ChevronsUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Map from "./map";

interface Framework {
  value: string;
  label: string;
}

interface StatsItemProps {
  region: string;
  trend: number;
  value: number;
  color: 'sky' | 'green' | 'red';
  trending: 'up' | 'down';
}

const frameworks: Framework[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const StatsItem: React.FC<StatsItemProps> = ({ region, trend, value, color, trending }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full bg-${color}-500 border-2 border-${color}-100`}></div>
        <span className="text-sm">{region}</span>
        <span className={`text-sm text-${color}-500 flex items-center gap-0.5`}>
          {trending === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {trend}%
        </span>
      </div>
      <span className="text-sm">{value}</span>
    </div>
  );
};

const AttendanceReports: React.FC = () => {
  const [continent, setContinent] = React.useState<boolean>(false);
  const [continentValue, setContinentValue] = React.useState<string>("");
  const [country, setCountry] = React.useState<boolean>(false);
  const [countryValue, setCountryValue] = React.useState<string>("");

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-5">
        {/* Map and Stats Container */}
        <div className="border rounded-lg">
          <div className="flex flex-col lg:flex-row w-full">
            {/* Map Section - 60% on desktop */}
            <div className="w-full lg:w-[60%] min-h-[400px] p-4">
              <Map />
            </div>

            {/* Stats Section - 40% on desktop */}
            <div className="w-full lg:w-[40%] p-4 flex flex-col gap-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <Popover open={continent} onOpenChange={setContinent}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className="w-32">
                      <span className="truncate flex-1 text-left">
                        {continentValue
                          ? frameworks.find(
                              (framework) => framework.value === continentValue
                            )?.label
                          : "Africa"}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px]" align="start">
                    <Command>
                      <CommandInput placeholder="Search..." className="h-9" />
                      <CommandList>
                        <CommandEmpty>Not found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue: string) => {
                                setContinentValue(
                                  currentValue === continentValue ? "" : currentValue
                                );
                                setContinent(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  continentValue === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Popover open={country} onOpenChange={setCountry}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className="w-32">
                      <span className="truncate flex-1 text-left">
                        {countryValue
                          ? frameworks.find(
                              (framework) => framework.value === countryValue
                            )?.label
                          : "Rwanda"}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px]" align="start">
                    <Command>
                      <CommandInput placeholder="Search..." className="h-9" />
                      <CommandList>
                        <CommandEmpty>Not found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue: string) => {
                                setCountryValue(
                                  currentValue === countryValue ? "" : currentValue
                                );
                                setCountry(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  countryValue === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatsItem
                  region="South"
                  trend={43.29}
                  value={250}
                  color="sky"
                  trending="up"
                />
                <StatsItem
                  region="North"
                  trend={36.16}
                  value={350}
                  color="green"
                  trending="up"
                />
                <StatsItem
                  region="East"
                  trend={36.16}
                  value={350}
                  color="green"
                  trending="up"
                />
                <StatsItem
                  region="West"
                  trend={36.16}
                  value={350}
                  color="sky"
                  trending="up"
                />
                <StatsItem
                  region="Kigali"
                  trend={36.16}
                  value={350}
                  color="red"
                  trending="down"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="w-full">
          <Attendance />
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
