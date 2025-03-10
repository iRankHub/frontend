import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Clock, Plus, Trash2, Undo2 } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FileUpload from "./file-upload";
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
  TournamentFormat,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentFormats } from "@/core/tournament/formats";
import { School, UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { getSchools } from "@/core/users/schools";
import {
  DeleteTournamentType,
  UpdateTournamentType,
} from "@/types/tournaments/tournament";
import { TimePicker } from "@/components/ui/time-picker";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { deleteTournament, updateTournament } from "@/core/tournament/list";
import { useRouter } from "next/navigation";
import { getVolunteersAndAdmins } from "@/core/users/users";
import Image from "next/image";
import MotionManagement, { Motion, Motions } from "../../create/motion-management";

type Props = {
  tournament: Tournament.AsObject;
};

type Inputs = z.infer<typeof UpdateTournamentSchema>;

interface ImageType {
  previewUrl: string;
  url: string;
}

function TournamentUpdateForm({ tournament }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formats, setFormats] = useState<TournamentFormat.AsObject[]>([]);
  const [venues, setVenues] = useState<School.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isCustomLocation, setIsCustomLocation] = useState(false);
  const [coordinators, setCoordinators] = React.useState<
    UserSummary.AsObject[]
  >([]);
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
  const router = useRouter();
  const { toast } = useToast();
  const [tournamentImage, setTournamentImage] = useState<ImageType | null>(
    null
  );

  useEffect(() => {
    if (!user) return;

    const options = {
      pageSize: 100,
      page: 1,
      token: user.token,
    };
    getVolunteersAndAdmins({ ...options }).then((res) => {
      const coordinator = res.usersList.find(
        (user) => user.name === tournament.coordinatorName
      );
      setCoordinators(res.usersList);
    });
  }, [user, tournament]);

  // useEffect to force re-render when coordinatorId changes
  useEffect(() => { }, [user]);

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
      coordinator: String(tournament.coordinatorId),
    },
  });

  async function onSubmit(data: Inputs) {
    if (!user) return;

    if (!isNaN(Number(data.name))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Tournament name can't only be numbers",
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

    const options: UpdateTournamentType = {
      tournament_id: tournament.tournamentId,
      token: user.token,
      start_date: modifiedStartDate(),
      end_date: modifiedEndDate(),
      format_id: Number(data.format),
      coordinator_id: Number(data.coordinator),
      judges_per_debate_elimination: Number(data.no_of_elimination_judges),
      judges_per_debate_preliminary: Number(data.no_of_judges),
      league_id: tournament.leagueId,
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

    setLoading(true);
    await updateTournament({ ...options })
      .then(() => {
        setLoading(false);

        toast({
          variant: "success",
          title: "Success",
          description: "Tournament updated successfully",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message,
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

  const handleDeleteTournament = async () => {
    if (!user) return;

    const options: DeleteTournamentType = {
      tournament_id: tournament.tournamentId,
      token: user.token,
    };

    setDeleteLoading(true);
    await deleteTournament({
      ...options,
    })
      .then((res) => {
        if (res.success) {
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

          router.push("/admin/tournaments/list");
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

  useEffect(() => {
    const startDate = form.watch("startDate");
    const endDate = form.watch("endDate");

    // Only reset if we have both dates and start date is after end date
    if (startDate && endDate && startDate > endDate) {
      // Reset end date to start date
      form.setValue("endDate", startDate);
      // Reset end time to start time
      form.setValue("endTime", form.watch("startTime"));
    }
  }, [form.watch("startDate")]);

  useEffect(() => {
    const currentLocation = form.watch("location");
    const locationExists = venues.some(
      (venue) => venue.name === currentLocation
    );

    // If location doesn't exist and not empty, set to custom mode
    if (currentLocation && !locationExists && !isCustomLocation) {
      setIsCustomLocation(true);
    }
  }, [form.watch("location"), venues, isCustomLocation]);

  const tournImage = tournament.imageUrl;

  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
          <div className="w-full bg-brown rounded-md h-60 relative overflow-hidden">
            {(tournamentImage || tournImage) && (
              <div className="w-full h-full">
                <Image
                  src={
                    tournamentImage ? tournamentImage.previewUrl : tournImage
                  }
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
                        {format(form.watch("startDate"), "PPP")}
                        {/* Check if dates are the same */}
                        {format(form.watch("startDate"), "yyyy-MM-dd") ===
                          format(form.watch("endDate"), "yyyy-MM-dd") ? (
                          // If same day, show time difference
                          form.watch("startTime") && form.watch("endTime") ? (
                            <span>
                              {" "}
                              ({format(form.watch("startTime"), "HH:mm")} -{" "}
                              {format(form.watch("endTime"), "HH:mm")})
                            </span>
                          ) : null
                        ) : (
                          // If different days, show full end date
                          <span> - {format(form.watch("endDate"), "PPP")}</span>
                        )}
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
              <div className="p-5 flex items-center gap-3">
                {isEditing && (
                  <Dialog>
                    <DialogTrigger className="rounded-full bg-primary cursor-pointer">
                      <Icons.imagePlus className="w-[1rem] h-[1rem] text-white m-2" />
                      <span className="sr-only">Image</span>
                    </DialogTrigger>
                    <FileUpload
                      setTournamentImage={setTournamentImage}
                      folderType="tournaments"
                    />
                  </Dialog>
                )}
                <Button
                  type="button"
                  className={cn(
                    "rounded-full w-8 h-8 bg-primary cursor-pointer hover:bg-background group",
                    isEditing && "hidden"
                  )}
                  size="icon"
                  onClick={() => setIsEditing(true)}
                >
                  <Icons.pencilLine className="w-[1rem] h-[1rem] text-white m-1 group-hover:text-primary" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                  <DialogTrigger>
                    <Button
                      type="button"
                      className="rounded-full w-8 h-8 bg-primary cursor-pointer hover:bg-background group"
                      size="icon"
                    >
                      <Trash2 className="w-[1rem] h-[1rem] text-white m-1 group-hover:text-primary" />
                      <span className="sr-only">Delete</span>
                    </Button>
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
                    <DialogFooter className="w-full flex-row gap-3 justify-center">
                      <Button
                        type="submit"
                        size={"sm"}
                        variant={"outline"}
                        className="max-w-32"
                        onClick={() => setDeleteOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size={"sm"}
                        variant={"destructive"}
                        className="max-w-32"
                        onClick={handleDeleteTournament}
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
                              disabled={!isEditing}
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
                              fromDate={form.watch("startDate") || new Date()}
                              disabled={!isEditing}
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
                                disabled={!isEditing}
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
                                disabled={!isEditing}
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
                                defaultValue={field.value}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "w-full text-muted-foreground disabled:opacity-100",
                                    field.value && "text-foreground"
                                  )}
                                  iconType={"location"}
                                  disabled={!isEditing}
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
                            {isEditing && (
                              <Button
                                type="button"
                                variant="ghost"
                                className="text-xs text-muted-foreground hover:text-primary"
                                onClick={() => setIsCustomLocation(true)}
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                Add custom location
                              </Button>
                            )}
                          </>
                        ) : (
                          <>
                            <FormControl>
                              <Input
                                placeholder="Enter location"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                className="disabled:opacity-100"
                                disabled={!isEditing}
                              />
                            </FormControl>
                            {isEditing && (
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
                            )}
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

              <div className="mt-10">
                <MotionManagement
                  preliminaryRounds={Number(form.watch("preliminaries_end_at") || 0)}
                  eliminationRounds={Number(form.watch("preliminaries_start_from") || 0)}
                  motions={motions}
                  setMotions={setMotions}
                  disabled={!isEditing}
                />
              </div>

              {isEditing && (
                <div className="flex items-center justify-between mt-5 gap-3">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="w-full"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                    <span className="sr-only">Cancel</span>
                  </Button>
                  <Button
                    type="submit"
                    variant={"default"}
                    className="w-full hover:bg-primary"
                  >
                    Update Tournament
                    {loading && (
                      <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">Update Tournament</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default TournamentUpdateForm;
