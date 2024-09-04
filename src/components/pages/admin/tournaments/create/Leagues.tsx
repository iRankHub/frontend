import React, { useEffect, useState } from "react";
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
import { v4 as uuidv4 } from "uuid";
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  League,
  LeagueType,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { ToastAction } from "@/components/ui/toast";
import { createTournamentLeague } from "@/core/tournament/leagues";
import { CreateTournamentLeague } from "@/types/tournaments/tournament-leagues";
import { createTournamentLeagueSchema } from "@/lib/validations/admin/tournaments/create-tournament-leagues.schema";
import { z } from "zod";
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

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

type Props = {
  leagues: League.AsObject[];
  setLeagues: React.Dispatch<React.SetStateAction<League.AsObject[]>>;
  selectedLeague: League.AsObject | null;
  setSelectedLeague: React.Dispatch<
    React.SetStateAction<League.AsObject | null>
  >;
};
type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

function Leagues({
  leagues,
  setSelectedLeague,
  selectedLeague,
  setLeagues,
}: Props) {
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();
  const [provinces,] = useState<string[]>(Provinces());
  const [filteredLeagues, setFilteredLeagues] = useState<League.AsObject[]>([]);

  useEffect(() => {
    setFilteredLeagues(leagues);
  }, [leagues]);

  const form = useForm<TournamentLeagueInput>({
    resolver: zodResolver(createTournamentLeagueSchema),
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
    };

    setLoading(true);
    await createTournamentLeague({ ...options })
      .then((res) => {
        setLoading(false);
        form.reset();
        const newLeague = res.league as League.AsObject;
        setLeagues((prev) => [...prev, newLeague]);

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

  // filter function to search through leagues by name
  const searchLeagues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      console.log("called")
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
    <div className="hidden xl:inline w-full max-w-xs">
      <h3
        className={cn(
          "text-foreground font-semibold text-2xl tracking-wider",
          inter.className
        )}
      >
        Leagues
      </h3>
      <div className="flex items-center gap-3 mt-2 h-auto">
        <div className="flex items-center border border-border dark:border-foreground rounded-md w-full px-2">
          <Icons.search className="text-muted-text dark:text-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search leagues"
            className="w-full h-8 text-sm placeholder-text-muted-text border-transparent ring-0 focus:ring-0 focus:border-transparent bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={searchLeagues}
          />
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger>
            <Button
              type="button"
              className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground hover:dark:text-background group mr-5"
            >
              <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="league_type"
                    render={({ field }) => (
                      <FormItem className="w-full flex items-center gap-3">
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            <MultiSelectorItem key={province} value={province}>
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
      <div className="w-full mt-1">
        <p className="text-muted-foreground text-xs italic font-medium">
          {filteredLeagues.length} records found
        </p>
        <ScrollArea className="w-full h-[calc(100vh_-_300px)]">
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
  );
}

interface LeaguProps {
  league: League.AsObject;
  selectedLeague: League.AsObject | null;
}
export const LeagueCard = ({ league, selectedLeague }: LeaguProps) => {
  const leagueType = () => {
    switch (league.leagueType) {
      case 0:
        return "Local";
      case 1:
        return "International";
      default:
        return "Local";
    }
  };
  return (
    <Button
      type="button"
      variant={
        selectedLeague?.leagueId === league.leagueId ? "default" : "ghost"
      }
      className={cn(
        "w-full flex flex-col mt-4 items-start",
        selectedLeague?.leagueId === league.leagueId && "hover:bg-primary"
      )}
    >
      <span
        className={cn(
          "text-sm text-foreground font-medium leading-tight p-0 m-0",
          selectedLeague?.leagueId === league.leagueId && "text-white"
        )}
      >
        {league.name}
      </span>
      <span
        className={cn(
          "text-xs text-muted-foreground p-0 m-0 leading-tight",
          selectedLeague?.leagueId === league.leagueId && "text-white"
        )}
      >
        {leagueType()}
      </span>
    </Button>
  );
};

export default Leagues;
