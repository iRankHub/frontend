import React, { useEffect, useState, useMemo } from "react";
import { Attendance } from "./charts/attendence-chart";
import { Check, ChevronsUpDown } from "lucide-react";
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
import { continents, countriesPerContinent } from "@/lib/data";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetAttendanceReportsType } from "@/types/analytics";
import {
  AttendanceReportResponse,
  DateRange,
} from "@/lib/grpc/proto/analytics/analytics_pb";
import { GetAttendanceReports } from "@/core/analytics";
import { EmptyStats, StatsItem } from "./helpers/ItemSkeleton";
import { StatsItemSkeleton } from "./helpers/ItemSkeleton";

type AttendanceReportsProps = {
  tournamentId?: number;
  selectedYear: number;
};

const AttendanceReports: React.FC<AttendanceReportsProps> = ({
  tournamentId,
  selectedYear
}) => {
  const [continent, setContinent] = React.useState<boolean>(false);
  const [continentValue, setContinentValue] = React.useState<string>("Africa");
  const [country, setCountry] = React.useState<boolean>(false);
  const [countryValue, setCountryValue] = React.useState<string>("Rwanda");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    "Rwanda",
  ]);
  const [locationData, setLocationData] =
    useState<AttendanceReportResponse.AsObject | null>(null);
  const [categoryData, setCategoryData] =
    useState<AttendanceReportResponse.AsObject | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserStore();

  // Memoize the locations data to prevent unnecessary re-renders
  const mapLocations = useMemo(() => {
    if (!locationData?.locationAttendanceList?.length) {
      return [];
    }
    
    return locationData.locationAttendanceList.map((item) => ({
      location: item.location,
      school_count: item.schoolCount,
      location_type: item.locationType as "province" | "country",
    }));
  }, [locationData]);

  const cleanStates = () => {
    setLocationData(null);
    setCategoryData(null);
  };

  const availableCountries =
    countriesPerContinent[
      continentValue as keyof typeof countriesPerContinent
    ] || [];

  const handleContinentChange = (value: string) => {
    setContinentValue(value);
    const newCountries =
      countriesPerContinent[value as keyof typeof countriesPerContinent] || [];
    if (!newCountries.find((c) => c.value === countryValue)) {
      const newCountry = newCountries[0]?.value || "";
      setCountryValue(newCountry);
      setSelectedCountries([newCountry]);
    }
  };

  const handleCountryChange = (value: string) => {
    setCountryValue(value);
    setSelectedCountries([value]);
  };

  const fetchAttendanceReports = async () => {
    setIsLoading(true);
    try {
      const dateRange = new DateRange();
      dateRange.setStartDate(`${selectedYear}-01-01`);
      dateRange.setEndDate(`${selectedYear}-12-31`);

      const locationOptions: GetAttendanceReportsType = {
        countries: selectedCountries,
        date_range: dateRange,
        report_type: "location",
        token: user?.token || "",
        tournament_id: tournamentId,
      };

      const categoryOptions: GetAttendanceReportsType = {
        countries: selectedCountries,
        date_range: dateRange,
        report_type: "category",
        token: user?.token || "",
        tournament_id: tournamentId,
      };

      const [locationResponse, categoryResponse] = await Promise.all([
        GetAttendanceReports(locationOptions),
        GetAttendanceReports(categoryOptions),
      ]);

      // Set the data regardless of whether it's empty or not
      // This ensures the components get updated with empty arrays when needed
      setLocationData(locationResponse || { locationAttendanceList: [] });
      setCategoryData(categoryResponse || { categoryAttendanceList: [] });
      
    } catch (error) {
      cleanStates();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user || !user.token) {
      cleanStates();
      return;
    }
    
    // Debounce the fetch to prevent rapid re-renders
    const timeoutId = setTimeout(() => {
      fetchAttendanceReports();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [tournamentId, user, selectedCountries, selectedYear]);

  const getStatsItems = () => {
    if (!locationData?.locationAttendanceList?.length) return [];

    return locationData.locationAttendanceList.map((item) => {
      let color: "sky" | "green" | "red";
      if (item.percentageChange > 0) {
        color = "green";
      } else if (item.percentageChange < 0) {
        color = "red";
      } else {
        color = "sky";
      }

      const trending: "up" | "down" =
        item.percentageChange >= 0 ? "up" : "down";

      return {
        region: item.location,
        trend: item.percentageChange,
        value: item.schoolCount,
        color,
        trending,
      };
    });
  };

  const statsItems = getStatsItems();
  const hasData = statsItems.length > 0;

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-5">
        {/* Map and Stats Container */}
        <div className="border rounded-lg">
          <div className="flex flex-col xl:flex-row w-full relative">
            {/* Map Section - 60% on desktop */}
            <div className="w-full xl:w-[60%] h-[400px] p-4 relative">
              <h3 className="font-bold text-xl mb-2">Attendance by location</h3>
              <div className="absolute inset-4 top-14">
                <Map
                  locations={mapLocations}
                  selectedCountry={countryValue}
                />
              </div>
            </div>

            {/* Vertical Border */}
            <div className="hidden xl:block absolute right-[40%] top-0 bottom-0 w-px bg-muted dark:bg-muted-foreground" />

            {/* Stats Section - 40% on desktop */}
            <div className="w-full xl:w-[40%] p-4 flex flex-col gap-4">
              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <Popover open={continent} onOpenChange={setContinent}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full"
                      >
                        <span className="truncate flex-1 text-left">
                          {continentValue}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-full" align="start">
                      <Command className="w-full">
                        <CommandInput
                          placeholder="Search continent..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No continent found.</CommandEmpty>
                          <CommandGroup>
                            {continents.map((c) => (
                              <CommandItem
                                key={c.value}
                                value={c.value}
                                onSelect={(currentValue) => {
                                  handleContinentChange(currentValue);
                                  setContinent(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    continentValue === c.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {c.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="w-full">
                  <Popover open={country} onOpenChange={setCountry}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full"
                      >
                        <span className="truncate flex-1 text-left">
                          {countryValue
                            ? availableCountries.find(
                                (c) => c.value === countryValue
                              )?.label
                            : "Select country"}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-full" align="start">
                      <Command className="w-full">
                        <CommandInput
                          placeholder="Search country..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {availableCountries.map((c) => (
                              <CommandItem
                                key={c.value}
                                value={c.value}
                                onSelect={(currentValue) => {
                                  handleCountryChange(currentValue);
                                  setCountry(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    countryValue === c.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {c.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isLoading ? (
                  <>
                    <StatsItemSkeleton />
                    <StatsItemSkeleton />
                    <StatsItemSkeleton />
                    <StatsItemSkeleton />
                    <StatsItemSkeleton />
                  </>
                ) : !hasData ? (
                  <EmptyStats />
                ) : (
                  statsItems.map((item, index) => (
                    <StatsItem
                      key={index}
                      region={item.region}
                      trend={item.trend}
                      value={item.value}
                      color={item.color}
                      trending={item.trending}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="w-full">
          <Attendance data={categoryData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
