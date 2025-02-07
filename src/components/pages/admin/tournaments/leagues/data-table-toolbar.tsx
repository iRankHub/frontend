import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { useUserStore } from "@/stores/auth/auth.store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createTournamentLeagueSchema } from "@/lib/validations/admin/tournaments/create-tournament-leagues.schema";
import { createTournamentLeague } from "@/core/tournament/leagues";
import { CreateTournamentLeague } from "@/types/tournaments/tournament-leagues";
import { League, LeagueType } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
// @ts-ignore
import { Provinces, Districts } from "rwanda";
import { Icons } from "@/components/icons";
import { useLeaguesStore } from "@/stores/admin/tournaments/leagues.store";
import { countriesPerContinent } from "@/lib/data";
import { cn } from "@/lib/utils";

type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchTerm: string;
  isLoading: boolean;
}

export function DataTableToolbar<TData>({
  table,
  searchTerm,
  isLoading,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const { addLeague } = useLeaguesStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();
  const [provinces, setProvinces] = useState<string[]>(Provinces());
  const [inputValue, setInputValue] = useState(searchTerm);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);

  const getCountriesPerContinent = (continents: string[]) => {
    let countries: string[] = [];
    continents.forEach((continent) => {
      // @ts-ignore
      const continentCountries = countriesPerContinent[continent];
      if (Array.isArray(continentCountries)) {
        countries = countries.concat(
          continentCountries.map((country) =>
            typeof country === "object" ? country.label : country
          )
        );
      }
    });
    return countries;
  };

  const form = useForm<TournamentLeagueInput>({
    resolver: zodResolver(createTournamentLeagueSchema),
    defaultValues: {
      name: "",
      league_type: "local",
    },
  });

  const createLeague = async (data: TournamentLeagueInput) => {
    if (!user) return;

    // league name can't only be numbers
    if (!isNaN(Number(data.name))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "League name can't only be numbers",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    if (data.league_type === "local") {
      if (selectedProvinces.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please select at least one province",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        return;
      }

      if (selectedDistricts.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please select at least one district",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        return;
      }
    } else {
      if (selectedContinents.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please select at least one continent",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        return;
      }

      if (selectedCountries.length === 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please select at least one country",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        return;
      }
    }

    const getLeagueType = (type: string) => {
      if (type === "local") {
        return LeagueType.LOCAL;
      } else {
        return LeagueType.INTERNATIONAL;
      }
    };

    const options: CreateTournamentLeague = {
      token: user.token,
      name: data.name,
      league_type: getLeagueType(data.league_type),
      local_details: {
        districtsList: selectedDistricts,
        provincesList: selectedProvinces,
      },
      international_details: {
        continentsList: selectedContinents,
        countriesList: selectedCountries,
      },
    };

    setLoading(true);
    await createTournamentLeague({ ...options })
      .then((res) => {
        setLoading(false);
        form.reset();
        addLeague(res.league as League.AsObject);

        // clear states
        setSelectedProvinces([]);
        setSelectedDistricts([]);

        toast({
          variant: "success",
          title: "Success",
          description: "League created successfully",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        setDialogOpen(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Update input value when searchTerm prop changes
  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const event = new CustomEvent('search-change', {
      detail: newValue
    });
    window.dispatchEvent(event);
  };

  const handleClearSearch = () => {
    setInputValue('');
    const event = new CustomEvent('search-change', {
      detail: ''
    });
    window.dispatchEvent(event);
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    const event = new CustomEvent('reset-table');
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full bg-brown p-4">
      {/* Main toolbar content */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
        {/* Left side with search and filters */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:gap-4 flex-1">
          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Input
              placeholder="Search leagues..."
              value={inputValue}
              onChange={handleInputChange}
              className={cn(
                "h-9 pr-8 w-full",
                isLoading && "opacity-50"
              )}
              disabled={isLoading}
            />
            {inputValue && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 hover:bg-transparent"
                disabled={isLoading}
              >
                <Cross2Icon className="h-4 w-4 text-white" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            {table.getColumn("leagueType") && (
              <DataTableFacetedFilter
                column={table.getColumn("leagueType")}
                title="League Type"
                options={[
                  { value: 0, label: "Local" },
                  { value: 1, label: "International" },
                ]}
              />
            )}
            {(isFiltered || inputValue) && (
              <Button
                variant="ghost"
                onClick={handleResetAll}
                className="h-9 px-3 text-white hover:bg-white/10"
                disabled={isLoading}
              >
                Reset
                <Cross2Icon className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Add League Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              data-onboarding-id="add-league-button"
              className="w-full md:w-auto text-white gap-2 text-sm font-medium h-9 hover:bg-white hover:text-foreground group"
            >
              <Icons.add className="w-4 h-4 text-white group-hover:text-foreground" />
              Add New League
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create League</DialogTitle>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={(...args) => void form.handleSubmit(createLeague)(...args)}
                className="space-y-6">
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                          <FormLabel className="md:w-24">League Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="E.g: Kigali Debate League"
                              className="flex-1"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="league_type"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                          <FormLabel className="md:w-24">League Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a league type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="local">Local</SelectItem>
                              <SelectItem value="international">International</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("league_type") === "local" && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <Label className="md:w-24">Province(s)</Label>
                        <MultiSelector
                          values={selectedProvinces}
                          onValuesChange={setSelectedProvinces}
                          loop
                          className="flex-1"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput placeholder="Select provinces" />
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {provinces.map((province) => (
                                <MultiSelectorItem key={province} value={province}>
                                  {province}
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                      </div>

                      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <Label className="md:w-24">District(s)</Label>
                        <MultiSelector
                          values={selectedDistricts}
                          onValuesChange={setSelectedDistricts}
                          loop
                          className="flex-1"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput placeholder="Select districts" />
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {Districts(selectedProvinces).map((district: string) => (
                                <MultiSelectorItem key={district} value={district}>
                                  {district}
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                      </div>
                    </div>
                  )}

                  {form.watch("league_type") === "international" && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <Label className="md:w-24">Continent(s)</Label>
                        <MultiSelector
                          values={selectedContinents}
                          onValuesChange={setSelectedContinents}
                          loop
                          className="flex-1"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput placeholder="Select continents" />
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {Object.keys(countriesPerContinent).map((continent) => (
                                <MultiSelectorItem key={continent} value={continent}>
                                  {continent}
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                      </div>

                      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <Label className="md:w-24">Country(s)</Label>
                        <MultiSelector
                          values={selectedCountries}
                          onValuesChange={setSelectedCountries}
                          loop
                          className="flex-1"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput placeholder="Select countries" />
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {getCountriesPerContinent(selectedContinents).map((country) => (
                                <MultiSelectorItem key={country} value={country}>
                                  {typeof country === "object"
                                    ? (country as { label: string }).label
                                    : country}
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                      </div>
                    </div>
                  )}
                </div>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={loading}
                  >
                    {loading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create League
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
