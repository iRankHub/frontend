import React, { useEffect, useState } from "react";
import { LeagueCard } from "./Leagues";
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
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  League,
  LeagueType,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { v4 as uuidv4 } from "uuid";
import { ToastAction } from "@/components/ui/toast";
import { createTournamentLeague } from "@/core/tournament/leagues";
import { CreateTournamentLeague } from "@/types/tournaments/tournament-leagues";
import { createTournamentLeagueSchema } from "@/lib/validations/admin/tournaments/create-tournament-leagues.schema";
import { useToast } from "@/components/ui/use-toast";
import { Districts, Provinces } from "@/lib/get-provinces-and-districts";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { countriesPerContinent } from "@/lib/data";
import { z } from "zod";

type Props = {
  leagues: League.AsObject[];
  selectedLeague: League.AsObject | null;
  setSelectedLeague: React.Dispatch<
    React.SetStateAction<League.AsObject | null>
  >;
  setLeagues: React.Dispatch<React.SetStateAction<League.AsObject[]>>;
};

type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

function LeaguesMobile({
  leagues,
  selectedLeague,
  setSelectedLeague,
  setLeagues,
}: Props) {
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();
  const [provinces] = useState<string[]>(Provinces());
  const [filteredLeagues, setFilteredLeagues] = useState<League.AsObject[]>([]);
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

  useEffect(() => {
    setFilteredLeagues(leagues);
  }, [leagues]);

  const form = useForm<TournamentLeagueInput>({
    resolver: zodResolver(createTournamentLeagueSchema),
  });

  const createLeague = async (data: TournamentLeagueInput) => {
    if (!user) return;

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
        setLeagues((leagues) => [...leagues, res.league as League.AsObject]);
        setSelectedProvinces([]);
        setSelectedDistricts([]);
        setSelectedContinents([]);
        setSelectedCountries([]);

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

  const searchLeagues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setFilteredLeagues(leagues);
      return;
    }
    const searchedLeagues = leagues.filter((league) =>
      league.name.toLowerCase().includes(value)
    );
    setFilteredLeagues(searchedLeagues);
    setSelectedLeague(null);
  };

  return (
    <SidePanel panelHideOnbreakpoint="xl" className="overflow-auto">
      <Panelheader>
        <div className="w-full h-12 flex flex-row items-center justify-between px-3 pb-2">
          <h3 className="text-sm font-bold">Leagues</h3>
        </div>
      </Panelheader>
      <div className="w-full p-5">
        <div className="flex items-center gap-3 mt-2 h-auto">
          <div className="flex items-center border border-border dark:border-foreground rounded-md w-full px-2">
            <Icons.search className="text-muted-text dark:text-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search leagues"
              className="w-full h-8 text-sm placeholder:text-muted-text border-transparent ring-0 focus:ring-0 focus:border-transparent bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={searchLeagues}
            />
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <div className="bg-primary w-full rounded text-white text-sm flex items-center justify-center font-semibold h-8 dark:hover:bg-white hover:text-foreground hover:dark:text-background group mr-5">
                <Icons.add className="text-white w-4 h-4 dark:group-hover:text-foreground" />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg top-4 sm:top-[50%] translate-y-0 sm:-translate-y-[50%]">
              <DialogHeader>
                <DialogTitle className="text-base">Create League</DialogTitle>
              </DialogHeader>

              {/* Scrollable form area */}
              <div className="flex-1 overflow-y-auto min-h-0">
                <Form {...form}>
                  <form
                    className="space-y-4"
                    onSubmit={(...args) => void form.handleSubmit(createLeague)(...args)}
                  >
                    <div className="grid gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex flex-col gap-2">
                              <FormLabel className="text-darkBlue dark:text-foreground">
                                League Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="E.g: Kigali Debate League"
                                  className="w-full placeholder:text-muted-text"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="league_type"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex flex-col gap-2">
                              <FormLabel className="text-darkBlue dark:text-foreground">
                                League Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a league type..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="local">Local</SelectItem>
                                  <SelectItem value="international">International</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      {form.watch("league_type") === "local" && (
                        <div className="space-y-4">
                          <div className="flex flex-col gap-2">
                            <Label className="text-sm text-darkBlue dark:text-foreground">
                              Province(s)
                            </Label>
                            <MultiSelector
                              values={selectedProvinces}
                              onValuesChange={setSelectedProvinces}
                              loop
                              className="w-full"
                            >
                              <MultiSelectorTrigger>
                                <MultiSelectorInput
                                  placeholder="Select your province"
                                  className="placeholder:text-muted-text"
                                />
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

                          <div className="flex flex-col gap-2">
                            <Label className="text-sm text-darkBlue dark:text-foreground">
                              District(s)
                            </Label>
                            <MultiSelector
                              values={selectedDistricts}
                              onValuesChange={setSelectedDistricts}
                              loop
                              className="w-full"
                            >
                              <MultiSelectorTrigger>
                                <MultiSelectorInput
                                  placeholder="Select your district"
                                  className="placeholder:text-muted-text"
                                />
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
                          <div className="flex flex-col gap-2">
                            <Label className="text-sm text-darkBlue dark:text-foreground">
                              Continent(s)
                            </Label>
                            <MultiSelector
                              values={selectedContinents}
                              onValuesChange={setSelectedContinents}
                              loop
                              className="w-full"
                            >
                              <MultiSelectorTrigger>
                                <MultiSelectorInput
                                  placeholder="Select your continent"
                                  className="placeholder:text-muted-text"
                                />
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

                          <div className="flex flex-col gap-2">
                            <Label className="text-sm text-darkBlue dark:text-foreground">
                              Country(s)
                            </Label>
                            <MultiSelector
                              values={selectedCountries}
                              onValuesChange={setSelectedCountries}
                              loop
                              className="w-full"
                            >
                              <MultiSelectorTrigger>
                                <MultiSelectorInput
                                  placeholder="Select your country"
                                  className="placeholder:text-muted-text"
                                />
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

                    <DialogFooter className="pt-6">
                      <Button
                        type="submit"
                        className="w-full sm:w-auto"
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
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="w-full mt-1">
          <p className="text-muted-foreground text-xs italic font-medium">
            {filteredLeagues.length} records found
          </p>
          <ScrollArea className="w-full h-[calc(100vh_-_150px_-_56px)]">
            <div className="px-2">
              {filteredLeagues.map((league) => (
                <div key={uuidv4()} onClick={() => setSelectedLeague(league)}>
                  <LeagueCard league={league} selectedLeague={selectedLeague} />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </SidePanel>
  );
}

export default LeaguesMobile;
