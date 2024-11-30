import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectTriggerNoDropdownIcon,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialReports from "./financial-reports";
import AttendanceReports from "./attendance-reports";
import PerformanceStats from "./PerformanceStats";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { searchTournament } from "@/core/tournament/list";
import { useUserStore } from "@/stores/auth/auth.store";
import { TournamentSearchResult } from "@/lib/grpc/proto/tournament_management/tournament_pb";

interface Tournament {
  id: number;
  name: string;
  date?: string;
  location?: string;
}

function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTournament, setSelectedTournament] =
    useState<TournamentSearchResult.AsObject | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [tournaments, setTournaments] = useState<
    TournamentSearchResult.AsObject[]
  >([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { user } = useUserStore((state) => state);

  // Generate array of last 10 years
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return year;
  });

  // Debounce the search query with a 300ms delay
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Function to search tournaments
  const searchTournaments = useCallback(
    async (query: string) => {
      if (!query) {
        setTournaments([]);
        return;
      }

      if (!user || !user.token) return;

      setIsSearching(true);
      try {
        const options = {
          token: user.token,
          query,
        };
        const response = await searchTournament(options);
        setTournaments(response.tournamentsList);
      } catch (error) {
        setTournaments([]);
      } finally {
        setIsSearching(false);
      }
    },
    [user]
  );

  // Effect to trigger search when debounced value changes
  useEffect(() => {
    searchTournaments(debouncedSearch);
  }, [debouncedSearch, searchTournaments]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTournamentSelect = (
    tournament: TournamentSearchResult.AsObject
  ) => {
    setSelectedTournament(tournament);
    setSearchQuery(tournament.name);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full mt-5 rounded-md bg-background pb-10">
      <header className="w-full rounded-t-md bg-brown pr-5 flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-3 p-5 py-4">
          <div ref={searchContainerRef} className="relative">
            <div className="relative">
              <Input
                placeholder="Search tournament..."
                className="h-8 w-[150px] lg:w-[280px] pr-8"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
              />
              {isSearching ? (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <Icons.search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              )}
            </div>

            {/* Search Results Dropdown */}
            {isDropdownOpen && searchQuery && (
              <div className="absolute z-50 w-full mt-1 bg-popover rounded-md border shadow-md">
                {tournaments.length === 0 ? (
                  <div className="px-2 py-3 text-sm text-muted-foreground text-center">
                    {isSearching ? "Searching..." : "No tournaments found"}
                  </div>
                ) : (
                  <div className="max-h-[200px] overflow-y-auto">
                    {tournaments.map((tournament) => (
                      <button
                        key={tournament.tournamentId}
                        onClick={() => handleTournamentSelect(tournament)}
                        className={cn(
                          "w-full px-2 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground flex items-center justify-between",
                          "border-b last:border-b-0"
                        )}
                      >
                        <span>{tournament.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Year Selector */}
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(parseInt(value))}
          >
            <SelectTriggerNoDropdownIcon className="m-0 p-0 border-0 bg-transparent w-auto h-auto [&>span]:hidden">
              <Button type="button" size="sm">
                <Icons.addCircle size={18} className="text-white mr-1" />
                {selectedYear}
              </Button>
            </SelectTriggerNoDropdownIcon>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button type="button" className="h-8">
          <Icons.downlaod className="h-5 w-5 mr-2" />
          Download
        </Button>
      </header>
      <Tabs defaultValue="financial" className="mt-4 mx-auto w-full">
        <TabsList className="max-w-96 mx-5">
          <TabsTrigger
            value="financial"
            className="data-[state=active]:text-white"
          >
            Financial
          </TabsTrigger>
          <TabsTrigger
            value="attendance"
            className="data-[state=active]:text-white"
          >
            Attendance
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="data-[state=active]:text-white"
          >
            Performance
          </TabsTrigger>
        </TabsList>
        <TabsContent value="financial" className="w-full h-full">
          <FinancialReports
            tournamentId={selectedTournament?.tournamentId}
            selectedYear={selectedYear}
          />
        </TabsContent>
        <TabsContent value="attendance" className="w-full h-full">
          <AttendanceReports
            tournamentId={selectedTournament?.tournamentId}
            selectedYear={selectedYear}
          />
        </TabsContent>
        <TabsContent value="performance" className="w-full h-full">
          <PerformanceStats />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Reports;
