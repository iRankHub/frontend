"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { userRoles } from "@/components/tables/data/data";
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
import {
  League,
  LeagueType,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
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

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

export function DataTableToolbar<TData>({
  table,
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

  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between bg-brown flex-wrap px-5 py-3 gap-3">
      <div className="flex flex-1 flex-col sm:flex-row justify-end sm:justify-normal sm:items-center sm:space-x-3">
        <Input
          placeholder="Search leagues..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[200px] sm:w-full lg:w-[280px] mb-2 sm:mb-0"
        />
        <div className="flex items-center">
          {table.getColumn("leagueType") && (
            <DataTableFacetedFilter
              column={table.getColumn("leagueType")}
              title="League Type"
              options={[
                // @ts-ignore
                { value: 0, label: "Local" },
                // @ts-ignore
                { value: 1, label: "International" },
              ]}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3 text-white"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger>
          <Button
            type="button"
            className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground hover:dark:text-background group mr-5"
          >
            <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
            Add New League
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">Create League</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              className="max-w-md w-full grid gap-4"
              onSubmit={(...args) =>
                void form.handleSubmit(createLeague)(...args)
              }
            >
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-3">
                        <FormLabel className="mt-2 text-darkBlue dark:text-foreground">
                          League Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g: Kigali Debate League"
                            className="flex-1 placeholder:text-muted-text"
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
                      <div className="flex items-center gap-3">
                        <FormLabel className="mt-2 text-darkBlue dark:text-foreground">
                          League Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="flex-1">
                              <SelectValue placeholder="Select a league type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="local">Local</SelectItem>
                            <SelectItem value="international">
                              International
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("league_type") === "local" && (
                  <>
                    <div className="w-full flex items-center gap-3">
                      <Label
                        htmlFor="type"
                        className="text-sm min-w-[80px] text-darkBlue dark:text-foreground"
                      >
                        Province(s)
                      </Label>
                      <MultiSelector
                        values={selectedProvinces}
                        onValuesChange={setSelectedProvinces}
                        loop
                        className="flex-1"
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
                              <MultiSelectorItem
                                key={province}
                                value={province}
                              >
                                {province}
                              </MultiSelectorItem>
                            ))}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </div>
                    <div className="w-full flex items-center gap-3">
                      <Label
                        htmlFor="type"
                        className="text-sm min-w-[80px] text-darkBlue dark:text-foreground"
                      >
                        District(s)
                      </Label>
                      <MultiSelector
                        values={selectedDistricts}
                        onValuesChange={setSelectedDistricts}
                        loop
                        className="flex-1"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput
                            placeholder="Select your district"
                            className="placeholder:text-muted-text"
                          />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {Districts(selectedProvinces).map(
                              (district: string) => (
                                <MultiSelectorItem
                                  key={district}
                                  value={district}
                                >
                                  {district}
                                </MultiSelectorItem>
                              )
                            )}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </div>
                  </>
                )}

                {form.watch("league_type") === "international" && (
                  <div className="w-full flex items-center gap-3">
                    <Label
                      htmlFor="type"
                      className="text-sm min-w-[80px] text-darkBlue dark:text-foreground"
                    >
                      Continent(s)
                    </Label>
                    <MultiSelector
                      values={selectedContinents}
                      onValuesChange={setSelectedContinents}
                      loop
                      className="flex-1"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput
                          placeholder="Select your continent"
                          className="placeholder:text-muted-text"
                        />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {Object.keys(countriesPerContinent).map(
                            (continent) => (
                              <MultiSelectorItem
                                key={continent}
                                value={continent}
                              >
                                {continent}
                              </MultiSelectorItem>
                            )
                          )}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
                )}

                {form.watch("league_type") === "international" && (
                  <div className="w-full flex items-center gap-3">
                    <Label
                      htmlFor="type"
                      className="text-sm min-w-[80px] text-darkBlue dark:text-foreground"
                    >
                      Country(s)
                    </Label>
                    <MultiSelector
                      values={selectedCountries}
                      onValuesChange={setSelectedCountries}
                      loop
                      className="flex-1"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput
                          placeholder="Select your country"
                          className="placeholder:text-muted-text"
                        />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {getCountriesPerContinent(selectedContinents).map(
                            (country) => (
                              <MultiSelectorItem key={country} value={country}>
                                {typeof country === "object"
                                  ? (country as { label: string }).label
                                  : country}
                              </MultiSelectorItem>
                            )
                          )}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                    <FormMessage />
                  </div>
                )}
              </div>
              <DialogFooter className="w-full">
                <Button
                  type="submit"
                  size={"sm"}
                  className="w-full hover:bg-primary"
                >
                  Create League
                  {loading && (
                    <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  <div className="sr-only">Create League</div>
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
