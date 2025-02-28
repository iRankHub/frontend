import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { UpdateTournamentSchema } from "@/lib/validations/admin/tournaments/create-tournament.schema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tournament,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentFormat } from "@/core/tournament/formats";
import { TimePicker } from "@/components/ui/time-picker";
import Image from "next/image";
import MotionManagement, { Motion, Motions } from "@/components/pages/admin/tournaments/create/motion-management";

type Props = {
  tournament: Tournament.AsObject;
};

type Inputs = z.infer<typeof UpdateTournamentSchema>;

function TournamentUpdateForm({ tournament }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formatName, setFormatName] = useState<string>("");
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [motions, setMotions] = useState<Motions>(() => {
    // Map preliminary motions
    const preliminary_motions: Motion[] = tournament.motions?.preliminaryMotionsList?.map(motion => ({
      text: motion.text,
      info_slide: motion.infoSlide,
      round_number: motion.roundNumber
    })) || [];

    // Map elimination motions
    const elimination_motions: Motion[] = tournament.motions?.eliminationMotionsList?.map(motion => ({
      text: motion.text,
      info_slide: motion.infoSlide,
      round_number: motion.roundNumber
    })) || [];

    return {
      preliminary_motions,
      elimination_motions
    };
  });

  const formatStartDate = (): string => {
    // format return from api: 2023-07-15 09:00
    // parse to local format: 2023-07-15T09:00:00
    const [date, time] = tournament.startDate.split(" ");

    const fullDate = `${date}T${time}:00`;
    return fullDate;
  };

  const formatEndDate = (): string => {
    // format return from api: 2023-07-15 09:00
    // parse to local format: 2023-07-15T09:00:00
    const [date, time] = tournament.endDate.split(" ");

    const fullDate = `${date}T${time}:00`;
    return fullDate;
  };

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(UpdateTournamentSchema),
    defaultValues: {
      fees_currency: "rwf",
      fees: tournament.tournamentFee,
      format: String(tournament.formatId),
      location: tournament.location,
      name: tournament.name,
      no_of_elimination_judges: String(tournament.judgesPerDebateElimination),
      no_of_judges: String(tournament.judgesPerDebatePreliminary),
      preliminaries_end_at: String(tournament.numberOfEliminationRounds),
      preliminaries_start_from: String(tournament.numberOfPreliminaryRounds),
      startDate: new Date(formatStartDate()),
      startTime: new Date(formatStartDate()),
      endDate: new Date(formatEndDate()),
      endTime: new Date(formatEndDate()),
      coordinator: tournament.coordinatorName,
    },
  });

  useEffect(() => {
    if (!user) return;
    const data = {
      format_id: tournament.formatId,
      token: user.token,
    };
    getTournamentFormat(data)
      .then((res) => {
        if (res) {
          setFormatName(String(res.formatName));
          form.setValue("format", String(res.formatName));
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user, tournament.formatId, form]);

  const tournImage = tournament.imageUrl;
  return (
    <div className="p-5">
      <Form {...form}>
        <form>
          <div className="w-full bg-brown rounded-md h-60 relative overflow-hidden">
            {tournImage && (
              <div className="w-full h-full">
                <Image
                  src={tournImage}
                  alt="Tournament Image"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="w-full px-5 absolute h-full bg-black/30 top-0 bottom-0 right-0 flex items-end">
              <div className="flex-1">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1 text-sm text-white font-medium">
                    <Icons.calendar className="w-3.5 h-3.5 text-white" />
                    {form.watch("startDate") && form.watch("endDate") ? (
                      <span>
                        {format(form.watch("startDate"), "PPP")} -{" "}
                        {format(form.watch("endDate"), "PPP")}
                      </span>
                    ) : (
                      "Pick a Date"
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white font-medium">
                    <Icons.mapPin className="w-3.5 h-3.5 text-white" />
                    {form.watch("location")
                      ? form.watch("location")
                      : "Location"}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormControl>
                        <Input
                          placeholder="Your Tournament Name"
                          className="text-white placeholder:text-white text-xl font-bold w-72 mt-1 bg-transparent outline-none border-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 p-0 disabled:opacity-100"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage className="font-bold" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="w-full px-5">
              <h3 className="text-sm text-muted-foreground uppercase font-semibold">
                Tournament Details
              </h3>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-3">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Start Date<b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal disabled:opacity-100",
                                !field.value && "text-muted-foreground"
                              )}
                              disabled={!isEditing}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              fromDate={new Date()}
                              toDate={new Date(form.watch("endDate"))}
                              disabled
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        End Date<b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal disabled:opacity-100",
                                !field.value && "text-muted-foreground"
                              )}
                              disabled
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              fromDate={new Date(form.watch("endDate"))}
                              disabled
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-foreground font-medium">
                          Start Time
                          <b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal disabled:opacity-100",
                                  !field.value && "text-muted-foreground"
                                )}
                                disabled
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "HH:mm")
                                ) : (
                                  <span>Pick a Time</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-3">
                              <TimePicker
                                setDate={field.onChange}
                                date={field.value}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-foreground font-medium">
                          End Time<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild className="w-full">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal disabled:opacity-100 disabled:cursor-not-allowed",
                                  !field.value && "text-muted-foreground"
                                )}
                                disabled
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "HH:mm")
                                ) : (
                                  <span>Pick a Time</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-3">
                              <TimePicker
                                setDate={field.onChange}
                                date={field.value}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-3">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Tournament Location
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Kigali Convention Center"
                          className="disabled:opacity-100"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coordinator"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Tournament Coordinator
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Kigali Convention Center"
                          className="disabled:opacity-100"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full">
                  <FormLabel className="text-foreground font-medium">
                    Tournament Fees
                  </FormLabel>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <FormField
                      control={form.control}
                      name="fees_currency"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger
                                className={cn(
                                  "w-full text-muted-foreground disabled:opacity-100",
                                  field.value && "text-foreground"
                                )}
                                iconType={"collapsible"}
                                disabled={!isEditing}
                              >
                                <SelectValue placeholder="choose a value" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rwf">RWF</SelectItem>
                                <SelectItem value="usd">USD</SelectItem>
                                <SelectItem value="euro">EURO</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fees"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Input
                              placeholder="50000"
                              value={Number(field.value)}
                              className="disabled:opacity-100"
                              onChange={(e) => {
                                field.onChange(Number(e.target.value));
                              }}
                              type="number"
                              disabled={!isEditing}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-sm text-muted-foreground uppercase font-semibold mt-10">
                Debate Details
              </h3>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-3">
                <FormField
                  control={form.control}
                  name="format"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Format
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Kigali Convention Center"
                          className="disabled:opacity-100"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preliminaries_end_at"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Preliminaries end at...
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground disabled:opacity-100",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                            disabled={!isEditing}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Round 1</SelectItem>
                            <SelectItem value="2">Round 2</SelectItem>
                            <SelectItem value="3">Round 3</SelectItem>
                            <SelectItem value="4">Round 4</SelectItem>
                            <SelectItem value="5">Round 5</SelectItem>
                            <SelectItem value="6">Round 6</SelectItem>
                            <SelectItem value="7">Round 7</SelectItem>
                            <SelectItem value="8">Round 8</SelectItem>
                            <SelectItem value="9">Round 9</SelectItem>
                            <SelectItem value="10">Round 10</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preliminaries_start_from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Eliminations starts from...
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground disabled:opacity-100",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                            disabled={!isEditing}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Round 1</SelectItem>
                            <SelectItem value="2">Round 2</SelectItem>
                            <SelectItem value="3">Round 3</SelectItem>
                            <SelectItem value="4">Round 4</SelectItem>
                            <SelectItem value="5">Round 5</SelectItem>
                            <SelectItem value="6">Round 6</SelectItem>
                            <SelectItem value="7">Round 7</SelectItem>
                            <SelectItem value="8">Round 8</SelectItem>
                            <SelectItem value="9">Round 9</SelectItem>
                            <SelectItem value="10">Round 10</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-8 mt-3">
                <FormField
                  control={form.control}
                  name="no_of_judges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Number of Preliminary Judges
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground disabled:opacity-100",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                            disabled={!isEditing}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Per Debate</SelectItem>
                            <SelectItem value="2">2 Per Debate</SelectItem>
                            <SelectItem value="3">3 Per Debate</SelectItem>
                            <SelectItem value="4">4 Per Debate</SelectItem>
                            <SelectItem value="5">5 Per Debate</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="no_of_elimination_judges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Number of Elimination Judges
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground disabled:opacity-100",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                            disabled={!isEditing}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Per Debate</SelectItem>
                            <SelectItem value="2">2 Per Debate</SelectItem>
                            <SelectItem value="3">3 Per Debate</SelectItem>
                            <SelectItem value="4">4 Per Debate</SelectItem>
                            <SelectItem value="5">5 Per Debate</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Motion Management Component - View Only Mode */}
              <div className="mt-10">
                <MotionManagement
                  preliminaryRounds={Number(form.watch("preliminaries_end_at") || 0)}
                  eliminationRounds={Number(form.watch("preliminaries_start_from") || 0)}
                  motions={motions}
                  mode="view"
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default TournamentUpdateForm;
