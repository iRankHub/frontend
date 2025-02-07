import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SidePanel, { Panelheader } from "../layout/admin-panel/side-panel";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { useLeaguesStore } from "@/stores/admin/tournaments/leagues.store";
import {
  DeleteTournamentLeague,
  UpdateTournamentLeague,
} from "@/types/tournaments/tournament-leagues";
import {
  deleteTournamentLeague,
  updateTournamentLeague,
} from "@/core/tournament/leagues";
import { Label } from "../ui/label";
import { createTournamentLeagueSchema } from "@/lib/validations/admin/tournaments/create-tournament-leagues.schema";
import { Badge } from "../ui/badge";
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
} from "../ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
// @ts-ignore
import { Provinces, Districts } from "rwanda";
import { countriesPerContinent } from "@/lib/data";

interface LeagueCardProps {
  row: any;
  getColumnValue: (row: any, columnId: string) => string;
}

type TournamentLeagueInput = z.infer<typeof createTournamentLeagueSchema>;

const LeagueCard = ({ row, getColumnValue }: LeagueCardProps) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const { user } = useUserStore((state) => state);
  const [provinces, setProvinces] = React.useState<string[]>(Provinces());
  const [districts, setDisctricts] = React.useState<string[]>(Districts());
  const leagues = JSON.parse(row.original.details);
  const [selectedProvinces, setSelectedProvinces] = React.useState<string[]>(
    row.original.leagueType === 0 && leagues.provinces
  );
  const [selectedDistricts, setSelectedDistricts] = React.useState<string[]>(
    row.original.leagueType === 0 && leagues.districts
  );

  const [selectedCountries, setSelectedCountries] = React.useState<string[]>(
    row.original.leagueType === 1 && leagues.countries
  );
  const [selectedContinents, setSelectedContinents] = React.useState<string[]>(
    row.original.leagueType === 1 && leagues.continents
  );

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

  const {
    updateLeague,
    deleteLeague: debateLeagueStore,
    setLeagues,
  } = useLeaguesStore((state) => state);
  const { toast } = useToast();

  const leagueType = () => {
    switch (Number(getColumnValue(row, "leagueType"))) {
      case 0:
        return "Local";
      case 1:
        return "International";
      default:
        return "Local";
    }
  };

  const form = useForm<TournamentLeagueInput>({
    resolver: zodResolver(createTournamentLeagueSchema),
    defaultValues: {
      league_type: leagueType().toLocaleLowerCase(),
      name: getColumnValue(row, "name"),
    },
  });

  const onSubmit = async (data: TournamentLeagueInput) => {
    if (!user) return;

    const getLeagueType = (type: string) => {
      if (type === "local") {
        return LeagueType.LOCAL;
      } else {
        return LeagueType.INTERNATIONAL;
      }
    };

    console.log(
      selectedDistricts,
      selectedProvinces,
      selectedContinents,
      selectedCountries
    );

    const options: UpdateTournamentLeague = {
      token: user.token,
      name: data.name,
      league_id: Number(getColumnValue(row, "leagueId")),
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
    await updateTournamentLeague({ ...options })
      .then((res) => {
        setLoading(false);
        setIsEdit(false);

        updateLeague(options.league_id, res.league as League.AsObject);

        toast({
          variant: "success",
          title: "Success",
          description: "League updated successfully",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteLeague = async () => {
    if (!user) return;

    const options: DeleteTournamentLeague = {
      league_id: 1,
      token: user.token,
    };

    setDeleteLoading(true);
    await deleteTournamentLeague({
      ...options,
    })
      .then((res) => {
        if (res.success) {
          setIsDelete(false);
          setDialogOpen(false);
          setSheetOpen(false);
          debateLeagueStore(options.league_id);
          toast({
            variant: "success",
            title: "Success",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      })
      .catch((err) => {
        setDeleteLoading(false);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  return (
    <Card key={row.id} className="p-3 hover:shadow-lg">
      <CardTitle className="text-primary font-bold text-lg mb-2 flex items-center justify-between gap-3">
        <span className="truncate">{getColumnValue(row, "name")}</span>
        <Badge variant="outline" className="rounded-md bg-primary text-white">
          {leagueType()}
        </Badge>
      </CardTitle>
      <CardFooter className="flex items-end gap-4 justify-between p-0 h-auto">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 justify-end">
            <span className="text-muted-text text-sm dark:text-foreground">
              {leagueType() === "Local"
                ? leagues.provinces.length
                : leagues.continents.length}
            </span>
            <p className="text-sm">
              {leagueType() === "Local" ? <>Province(s)</> : <>Continent(s)</>}
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <span className="text-muted-text text-sm dark:text-foreground">
              {leagueType() === "Local"
                ? leagues.districts.length
                : leagues.countries.length}
            </span>
            <p className="text-sm">
              {leagueType() === "Local" ? <>District(s)</> : <>Country(s)</>}
            </p>
          </div>
        </div>
        <Sheet
          onOpenChange={() => {
            setIsEdit(false);
            setIsDelete(false);
            setSheetOpen(!sheetOpen);
          }}
          open={sheetOpen}
        >
          <SheetTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icons.info className="w-3.5 h-3.5 text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Info</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SheetTrigger>
          <SidePanel>
            <Panelheader>
              <div className="flex items-center gap-1 truncate">
                <h3 className="text-sm font-bold truncate max-w-48">
                  {getColumnValue(row, "name")}
                </h3>
                {!isEdit && (
                  <Button
                    type="button"
                    className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                    size="icon"
                    onClick={() => {
                      setIsEdit(true);
                      setIsDelete(false);
                    }}
                  >
                    <Icons.pencilLine className="w-4 h-4" />
                  </Button>
                )}
                <Dialog
                  onOpenChange={() => {
                    setIsEdit(false);
                    setIsDelete(false);
                    setDialogOpen(!dialogOpen);
                  }}
                  open={dialogOpen}
                >
                  {/* Delete dialog content remains the same */}
                </Dialog>
              </div>
            </Panelheader>

            <Form {...form}>
              <form
                className="w-full px-4 space-y-6"
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-darkBlue dark:text-foreground block">
                          League Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g: Kigali Debate League"
                            className="w-full placeholder:text-muted-text disabled:opacity-100"
                            {...field}
                            disabled={!isEdit}
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
                      <FormItem className="space-y-2">
                        <FormLabel className="text-darkBlue dark:text-foreground block">
                          League Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full disabled:opacity-100"
                              disabled={!isEdit}
                            >
                              <SelectValue placeholder="Select a league type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="local">Local</SelectItem>
                            <SelectItem value="international">International</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {row.original.leagueType === 0 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm block">Province(s)</Label>
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
                              disabled={!isEdit}
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

                      <div className="space-y-2">
                        <Label className="text-sm block">District(s)</Label>
                        <MultiSelector
                          values={selectedDistricts}
                          onValuesChange={setSelectedDistricts}
                          loop
                          className="w-full"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput
                              placeholder="Select your district"
                              className="placeholder:text-muted-text disabled:opacity-100"
                              disabled={!isEdit}
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
                      <div className="space-y-2">
                        <Label className="text-sm block text-darkBlue dark:text-foreground">
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
                              disabled={!isEdit}
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

                      <div className="space-y-2">
                        <Label className="text-sm block text-darkBlue dark:text-foreground">
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
                              disabled={!isEdit}
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

                {isEdit && (
                  <Button type="submit" size="sm" className="w-full hover:bg-primary">
                    Update League
                    {loading && (
                      <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
                    )}
                    <span className="sr-only">Update League</span>
                  </Button>
                )}
              </form>
            </Form>
          </SidePanel>
        </Sheet>
      </CardFooter>
    </Card>
  );
};

export default LeagueCard;
