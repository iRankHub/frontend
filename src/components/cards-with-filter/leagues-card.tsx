import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
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
import { createTournamentFormatSchema } from "@/lib/validations/admin/tournaments/create-tournament-format.schema";
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
import { cn } from "@/lib/utils";
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
// @ts-ignore
import { Provinces, Districts } from "rwanda";

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
  const [selectedProvinces, setSelectedProvinces] = React.useState<string[]>([
    ...leagues.provinces,
  ]);
  const [selectedDistricts, setSelectedDistricts] = React.useState<string[]>([
    ...leagues.districts,
  ]);
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
    const options: UpdateTournamentLeague = {
      token: user.token,
      name: data.name,
      league_id: Number(getColumnValue(row, "leagueId")),
      league_type: getLeagueType(data.league_type),
      local_details: {
        districtsList: selectedDistricts,
        provincesList: selectedProvinces,
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

  console.log(form.formState["errors"])

  return (
    <Card key={row.id} className="p-3 hover:shadow-lg">
      <CardTitle className="text-primary font-bold text-lg mb-2 flex items-center justify-between gap-3">
        {getColumnValue(row, "name")}
        <Badge variant="outline" className="rounded-md bg-primary text-white">
          {leagueType()}
        </Badge>
      </CardTitle>
      <CardFooter className="flex items-center gap-4 justify-between p-0 h-auto">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 justify-end">
            <span className="text-muted-text text-sm">
              {leagueType() === "Local"
                ? leagues.districts.length
                : leagues.provinces.length}
            </span>
            <p className="text-sm">Province(s)</p>
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <span className="text-muted-text text-sm">
              {leagueType() === "Local"
                ? leagues.districts.length
                : leagues.provinces.length}
            </span>
            <p className="text-sm">District(s)</p>
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
            <Icons.expand className="w-3.5 h-3.5 text-primary" />
          </SheetTrigger>
          <SidePanel>
            <Panelheader>
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-bold">
                  {getColumnValue(row, "name")}
                </h3>
                {!isEdit && (
                  <Button
                    type="button"
                    className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                    size={"icon"}
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
                  <DialogTrigger className="mt-0.5">
                    {!isDelete && (
                      <Button
                        type="button"
                        className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                        size={"icon"}
                        onClick={() => {
                          setIsEdit(false);
                          setIsDelete(true);
                        }}
                      >
                        <Icons.trash className="w-4 h-4" />
                      </Button>
                    )}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-base">
                        Are you absolutely sure?
                      </DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        This action cannot be undone. This will permanently
                        delete this tournament format and remove all related
                        data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-full justify-end">
                      <Button
                        type="submit"
                        size={"sm"}
                        variant={"outline"}
                        className="max-w-32"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size={"sm"}
                        variant={"destructive"}
                        className="max-w-32"
                        onClick={deleteLeague}
                      >
                        Delete
                        {deleteLoading && (
                          <Icons.spinner
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">Delete</span>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </Panelheader>
            <Form {...form}>
              <form
                className="max-w-md w-full grid gap-4 px-4"
                onSubmit={(...args) =>
                  void form.handleSubmit(onSubmit)(...args)
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
                      <FormItem className="w-full flex items-center gap-3">
                        <FormLabel className="mt-2 text-darkBlue">
                          League Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="flex-1"
                              disabled={!isEdit}
                            >
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
                    <Label htmlFor="type" className="text-sm min-w-[80px]">
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
                  <div className="w-full flex items-center gap-3">
                    <Label htmlFor="type" className="text-sm min-w-[80px]">
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
                          disabled={!isEdit}
                        />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {districts.map((district: string) => (
                            <MultiSelectorItem key={district} value={district}>
                              {district}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
                </div>
                {/* {form.formState["errors"].name && <p>{}</p>} */}
                {isEdit && (
                  <Button
                    type="submit"
                    size={"sm"}
                    className="w-full hover:bg-primary"

                  >
                    Update League
                    {loading && (
                      <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    <div className="sr-only">Update League</div>
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
