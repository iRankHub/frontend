import React from "react";
import { Attendance } from "./charts/attendence-chart";
import {
  ArrowDown,
  ArrowUp,
  Check,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
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

type Props = {};

const frameworks = [
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

function AttendanceReports({}: Props) {
  const [continent, setContinent] = React.useState(false);
  const [continentValue, setContinentValue] = React.useState("");
  const [country, setCountry] = React.useState(false);
  const [countryValue, setCountryValue] = React.useState("");

  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <div className="grid lg:grid-cols-3 mt-10 border rounded-lg mx-5 min-h-[400px]">
          <div className="col-span-2 h-[400px]">
            <Map />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center space-x-2">
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
                <PopoverContent className="w-full" align="start">
                  <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>Not found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setContinentValue(
                                currentValue === continentValue
                                  ? ""
                                  : currentValue
                              );
                              setContinent(false);
                            }}
                            className="flex items-center"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                continentValue === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="truncate">{framework.label}</span>
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
                <PopoverContent className="w-full" align="start">
                  <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>Not found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setCountryValue(
                                currentValue === countryValue
                                  ? ""
                                  : currentValue
                              );
                              setCountry(false);
                            }}
                            className="flex items-center"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                countryValue === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="truncate">{framework.label}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-sky-100"></div>
                  <span className="text-sm">South</span>
                  <span className="text-sm text-sky-500 flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" />
                    43.29%
                  </span>
                </div>
                <span className="text-sm">250</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-100"></div>
                  <span className="text-sm">North</span>
                  <span className="text-sm text-green-500 flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" />
                    36.16%
                  </span>
                </div>
                <span className="text-sm">350</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-100"></div>
                  <span className="text-sm">East</span>
                  <span className="text-sm text-green-500 flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" />
                    36.16%
                  </span>
                </div>
                <span className="text-sm">350</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-sky-100"></div>
                  <span className="text-sm">West</span>
                  <span className="text-sm text-green-500 flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" />
                    36.16%
                  </span>
                </div>
                <span className="text-sm">350</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-100"></div>
                  <span className="text-sm">Kigali</span>
                  <span className="text-sm text-red-500 flex items-center gap-0.5">
                    <TrendingDown className="h-3 w-3" />
                    36.16%
                  </span>
                </div>
                <span className="text-sm">350</span>
              </div>
            </div>
          </div>
        </div>
        <Attendance />
      </div>
    </div>
  );
}

export default AttendanceReports;
