import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Clock, Plus, Undo2 } from "lucide-react";
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
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FileUpload from "./file-upload";
import { createTournamentSchema } from "@/lib/validations/admin/tournaments/create-tournament.schema";
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
  League,
  TournamentFormat,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentFormats } from "@/core/tournament/formats";
import { School, UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { createTournament } from "@/core/tournament/create-tournament";
import { CreateTournamentType } from "@/types/tournaments/tournament";
import { TimePicker } from "@/components/ui/time-picker";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { getSchools } from "@/core/users/schools";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MotionManagement, { Motions } from './motion-management';

type Props = {
  selectedLeague: League.AsObject | null;
  coordinators: UserSummary.AsObject[];
};

type Inputs = z.infer<typeof createTournamentSchema>;

interface ImageType {
  previewUrl: string;
  url: string;
}

function TournamentForm({ selectedLeague, coordinators }: Props) {
  const [formats, setFormats] = useState<TournamentFormat.AsObject[]>([]);
  const [venues, setVenues] = useState<School.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [tournamentImage, setTournamentImage] = useState<ImageType | null>(
    null
  );
  const [motions, setMotions] = useState<Motions>({
    preliminary_motions: [],
    elimination_motions: []
  });
  const [isCustomLocation, setIsCustomLocation] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(createTournamentSchema),
    defaultValues: {
      fees_currency: "rwf",
      name: "",
      format: "",
      location: "",
      coordinator: "",
      no_of_elimination_judges: "",
      no_of_judges: "",
      preliminaries_end_at: "",
      preliminaries_start_from: "",
      fees: 0,
      startDate: undefined,
      endDate: undefined,
      startTime: undefined,
      endTime: undefined,
    },
  });

  const resetForm = () => {
    // Reset form values
    form.reset({
      fees_currency: "rwf",
      name: "",
      format: "",
      location: "",
      coordinator: "",
      no_of_elimination_judges: "",
      no_of_judges: "",
      preliminaries_end_at: "",
      preliminaries_start_from: "",
      fees: 0,
      startDate: undefined,
      endDate: undefined,
      startTime: undefined,
      endTime: undefined,
    });

    setMotions({
      preliminary_motions: [],
      elimination_motions: []
    });
    // Reset tournament image
    setTournamentImage(null);
  };
  async function onSubmit(data: Inputs) {
    if (!user) return;

    // check if a league is selected
    if (!selectedLeague) {
      toast({
        variant: "destructive",
        title: "League not selected",
        description: "Please select a league before creating a tournament.",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    const modifiedStartDate = (): string => {
      // expected format: 2023-07-15 09:00
      const date = new Date(data.startDate);
      const time = new Date(data.startTime);
      date.setHours(time.getHours());
      date.setMinutes(time.getMinutes());
      date.setSeconds(time.getSeconds());

      const formattedDate = format(date, "yyyy-MM-dd HH:mm");
      return formattedDate;
    };

    const modifiedEndDate = (): string => {
      // expected format: 2023-07-15 09:00
      const date = new Date(data.endDate);
      const time = new Date(data.endTime);
      date.setHours(time.getHours());
      date.setMinutes(time.getMinutes());
      date.setSeconds(time.getSeconds());

      const formattedDate = format(date, "yyyy-MM-dd HH:mm");
      return formattedDate;
    };

    const options: CreateTournamentType = {
      token: user.token,
      coordinator_id: Number(data.coordinator),
      start_date: modifiedStartDate(),
      end_date: modifiedEndDate(),
      format_id: Number(data.format),
      judges_per_debate_elimination: Number(data.no_of_elimination_judges),
      judges_per_debate_preliminary: Number(data.no_of_judges),
      league_id: Number(selectedLeague?.leagueId || 0),
      location: data.location,
      name: data.name,
      number_of_elimination_rounds: Number(data.preliminaries_end_at),
      number_of_preliminary_rounds: Number(data.preliminaries_start_from),
      tournament_fee: Number(data.fees),
      image_url: tournamentImage ? tournamentImage.url : null,
      motions: {
        preliminary_motions: motions.preliminary_motions,
        elimination_motions: motions.elimination_motions
      }
    };

    console.log(options)

    setLoading(true);
    await createTournament({ ...options })
      .then((res) => {
        res.tournament?.tournamentId;
        setLoading(false);
        form.reset({
          fees_currency: "rwf",
          name: "",
          format: "",
          location: "",
          coordinator: "",
          no_of_elimination_judges: "",
          no_of_judges: "",
          preliminaries_end_at: "",
          preliminaries_start_from: "",
          fees: 0,
          startDate: undefined,
          endDate: undefined,
          startTime: undefined,
          endTime: undefined,
        });

        // Reset tournament image
        setTournamentImage(null);

        setMotions({
          preliminary_motions: [],
          elimination_motions: []
        });

        toast({
          variant: "success",
          title: "Success",
          description: "Tournament created successfully",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });

        if (res.tournament) {
          router.push(`/admin/tournaments/list/${res.tournament.tournamentId}`);
        }
      })
      .catch((err) => {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "An error occurred while creating the tournament.",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentFormats({ ...data })
      .then((res) => {
        setFormats(res.formatsList);
      })
      .catch((err) => {
        console.error(err.message);
      });

    // fetch venues
    getSchools({
      token: user.token,
      pageSize: 100,
      page: 1,
    })
      .then((res) => {
        setVenues(res.schoolsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);

  const handleBack = () => {
    router.push("/admin/tournaments/list");
  };
  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
          {/* Tournament Header Container */}
          <div className="w-full bg-brown rounded-md h-60 sm:h-72 relative overflow-hidden">
            {/* Tournament Image */}
            {tournamentImage && (
              <div className="absolute inset-0">
                <Image
                  src={tournamentImage.previewUrl}
                  alt="Tournament cover"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end">
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 w-full">
                {/* Info Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-2">
                  {/* Date/Time */}
                  <div className="flex items-center gap-1 text-sm text-white font-medium">
                    <Icons.calendar className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span className="truncate">
                      {form.watch("startDate") && form.watch("endDate") ? (
                        <span className="whitespace-normal">
                          {format(form.watch("startDate"), "PPP")}
                          {format(form.watch("startDate"), "yyyy-MM-dd") ===
                            format(form.watch("endDate"), "yyyy-MM-dd") ? (
                            form.watch("startTime") && form.watch("endTime") ? (
                              <span className="whitespace-nowrap">
                                {" "}({format(form.watch("startTime"), "HH:mm")} -{" "}
                                {format(form.watch("endTime"), "HH:mm")})
                              </span>
                            ) : null
                          ) : (
                            <span className="whitespace-nowrap"> - {format(form.watch("endDate"), "PPP")}</span>
                          )}
                        </span>
                      ) : (
                        "Pick a Date"
                      )}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-white font-medium">
                    <Icons.mapPin className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span className="truncate">
                      {form.watch("location") ? form.watch("location") : "Location"}
                    </span>
                  </div>
                </div>

                {/* Tournament Name Input and Upload Button Container */}
                <div className="flex items-start justify-between gap-4">
                  {/* Tournament Name Input */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Your Tournament Name"
                            className="text-white placeholder:text-white text-lg sm:text-xl font-bold 
                           w-full max-w-2xl bg-transparent outline-none border-none 
                           focus-visible:outline-none focus-visible:border-none 
                           focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 p-0"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage className="py-1 font-bold absolute" />
                      </FormItem>
                    )}
                  />

                  {/* Upload Button */}
                  <Dialog>
                    <DialogTrigger className="rounded-full bg-primary cursor-pointer flex-shrink-0">
                      <Icons.imagePlus className="w-4 h-4 text-white m-2" />
                      <span className="sr-only">Upload Image</span>
                    </DialogTrigger>
                    <FileUpload
                      setTournamentImage={setTournamentImage}
                      folderType="tournaments"
                    />
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="w-full px-5">
              <h3 className="text-sm text-muted-foreground uppercase font-semibold">
                Tournament Details
              </h3>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 mt-3">
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
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
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
                              toDate={form.watch("endDate")}
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
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
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
                              fromDate={form.watch("startDate")}
                              initialFocus
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
                      <FormItem>
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
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
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
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          End Time<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
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
                      <div className="flex flex-col gap-2">
                        {!isCustomLocation ? (
                          <>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "w-full text-muted-foreground",
                                    field.value && "text-foreground"
                                  )}
                                  iconType={"location"}
                                >
                                  <SelectValue placeholder="Choose a venue" />
                                </SelectTrigger>
                                <SelectContent>
                                  {venues.map((venue) => (
                                    <SelectItem
                                      key={uuidv4()}
                                      value={String(venue.name)}
                                    >
                                      {venue.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <Button
                              type="button"
                              variant="ghost"
                              className="text-xs text-muted-foreground hover:text-primary"
                              onClick={() => setIsCustomLocation(true)}
                            >
                              <Plus className="w-3 h-3 mr-1" />
                              Add custom location
                            </Button>
                          </>
                        ) : (
                          <>
                            <FormControl>
                              <Input
                                placeholder="Enter location"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                            </FormControl>
                            <Button
                              type="button"
                              variant="ghost"
                              className="text-xs text-muted-foreground hover:text-primary"
                              onClick={() => {
                                setIsCustomLocation(false);
                                field.onChange(""); // Reset value when switching back
                              }}
                            >
                              <Undo2 className="w-3 h-3 mr-1" />
                              Use venue list
                            </Button>
                          </>
                        )}
                      </div>
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
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                          >
                            <SelectValue placeholder="Choose a coordinator" />
                          </SelectTrigger>
                          <SelectContent>
                            {coordinators.map((coordinator) => (
                              <SelectItem
                                key={coordinator.userid}
                                value={String(coordinator.userid)}
                              >
                                {coordinator.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                                  "w-full text-muted-foreground",
                                  field.value && "text-foreground"
                                )}
                                iconType={"collapsible"}
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
                              onChange={(e) => {
                                field.onChange(Number(e.target.value));
                              }}
                              type="number"
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
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            {formats.map((format) => (
                              <SelectItem
                                key={uuidv4()}
                                value={String(format.formatId)}
                              >
                                {format.formatName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Round 1</SelectItem>
                            <SelectItem value="2">Round 2</SelectItem>
                            <SelectItem value="3">Round 3</SelectItem>
                            <SelectItem value="4">Round 4</SelectItem>
                            <SelectItem value="5">Round 5</SelectItem>
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
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
                          >
                            <SelectValue placeholder="choose..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Final</SelectItem>
                            <SelectItem value="2">Semi Final</SelectItem>
                            <SelectItem value="3">Quarter Final</SelectItem>
                            <SelectItem value="4">Octal Final</SelectItem>
                            <SelectItem value="5">Round of 32</SelectItem>
                            <SelectItem value="6">Round of 64</SelectItem>
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
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
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
                          value={field.value}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full text-muted-foreground",
                              field.value && "text-foreground"
                            )}
                            iconType={"collapsible"}
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

              <div className="mt-10">
                <MotionManagement
                  preliminaryRounds={Number(form.watch("preliminaries_end_at") || 0)}
                  eliminationRounds={Number(form.watch("preliminaries_start_from") || 0)}
                  motions={motions}
                  setMotions={setMotions}
                />
              </div>

              <div className="flex items-center justify-between mt-5 gap-3">
                <Button
                  type="button"
                  variant={"outline"}
                  className="w-full"
                  onClick={handleBack}
                >
                  Cancel
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button type="submit" variant={"default"} className="w-full">
                  Create Tournament
                  {loading && (
                    <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">Create Tournament</span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default TournamentForm;
