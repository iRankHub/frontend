"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import LeagueCard from "./league-card";
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
import {
  createTournamentLeague,
  tournamentLeagues,
} from "@/core/tournament/leagues";
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

type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

function Leagues({}) {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [leagues, setLeagues] = useState<League.AsObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  const form = useForm<TournamentLeagueInput>({
    resolver: zodResolver(createTournamentLeagueSchema),
  });

  const createLeague = async (data: TournamentLeagueInput) => {
    if (!user) return;

    if (provinces.length === 0) {
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

    if (districts.length === 0) {
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
        districtsList: districts,
        provincesList: provinces,
      },
    };

    setLoading(true);
    await createTournamentLeague({ ...options })
      .then((res) => {
        setLoading(false);
        // form.reset();
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
        console.log(res.league);
        // setDialogOpen(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentLeagues({ ...data })
      .then((res) => {
        setLeagues(res.leaguesList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name..."
            className="w-72 h-8"
          />
          <Button
            type="submit"
            className="border border-dashed border-white gap-2 h-8 font-semibold hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            League Type
          </Button>
        </form>
        <Dialog>
          <DialogTrigger>
            <Button
              type="button"
              className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground group"
            >
              <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
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
                      <FormItem className="w-full flex items-center gap-3">
                        <FormLabel className="mt-2 text-darkBlue">
                          League Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g: Kigali Debate League"
                            className="flex-1 placeholder:text-muted-text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="league_type"
                    render={({ field }) => (
                      <FormItem className="w-full flex items-center gap-3">
                        <FormLabel className="mt-2 text-darkBlue">
                          League Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="flex-1">
                              <SelectValue placeholder="Select a school type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="local">Local</SelectItem>
                            <SelectItem value="international">
                              International
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="w-full flex items-center gap-3">
                    <Label htmlFor="type" className="text-sm min-w-[80px]">
                      Province(s)
                    </Label>
                    <MultiSelector
                      values={provinces}
                      onValuesChange={setProvinces}
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
                          <MultiSelectorItem value={"South"}>
                            South
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"East"}>
                            East
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Kigali"}>
                            Kigali City
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"West"}>
                            West
                          </MultiSelectorItem>
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <Label htmlFor="type" className="text-sm min-w-[80px]">
                      District(s)
                    </Label>
                    <MultiSelector
                      values={districts}
                      onValuesChange={setDistricts}
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
                          <MultiSelectorItem value={"Rulindo"}>
                            Rulindo
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Nyanza"}>
                            Nyanza
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Kicukiro"}>
                            Kicukiro
                          </MultiSelectorItem>
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
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
      <div className="w-full bg-background p-8 grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
          {leagues.map((league) => (
            <LeagueCard
              key={league.leagueId}
              league={league}
              setLeagues={setLeagues}
            />
          ))}
        </div>
        <Button
          type="button"
          size={"sm"}
          className="max-w-auto mx-auto ring-0 border-none outline-none text-primary dark:text-white mt-10 bg-transparent underline"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default Leagues;
