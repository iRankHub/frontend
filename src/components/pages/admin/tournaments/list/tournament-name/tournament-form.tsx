"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailLoginSchema } from "@/lib/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Trash2 } from "lucide-react";
import React from "react";
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
import { createTournamentSchema } from "@/lib/validations/admin/create-tournament.schema";
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

type Inputs = z.infer<typeof createTournamentSchema>;

function TournamentForm({}: Props) {
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      fees_currency: "rwf",
    },
  });

  async function onSubmit(data: Inputs) {}

  return (
    <div className="p-5">
      <div className="w-full bg-brown rounded-md h-60 p-5 flex flex-col md:flex-row justify-end md:items-end">
        <div className="mb-3 md:mb-0 md:flex-1">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.calendar className="w-3.5 h-3.5 text-white" />
              Pick a Date
            </div>
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.mapPin className="w-3.5 h-3.5 text-white" />
              Location
            </div>
          </div>
          <Input
            placeholder="Your Tournament Name"
            className="text-white placeholder:text-white text-xl font-bold w-72 mt-1 bg-transparent outline-none border-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 p-0"
          />
        </div>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-full w-8 h-8 bg-primary cursor-pointer"
                size="icon"
              >
                <Icons.imagePlus className="w-[1rem] h-[1rem] text-white m-1" />
                <span className="sr-only">Image</span>
              </Button>
            </DialogTrigger>
            <FileUpload />
          </Dialog>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Icons.pencilLine className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Trash2 className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </div>
      <div className="mt-10 w-full">
        <Form {...form}>
          <form
            className="px-5 w-full"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
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
                        Start Time<b className="text-primary font-light"> *</b>
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
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                          <SelectItem value="light">
                            Riviera High School
                          </SelectItem>
                          <SelectItem value="dark">
                            Saint paul international School
                          </SelectItem>
                          <SelectItem value="system">
                            Bienvenu High School
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                          <SelectValue placeholder="Choose a venue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Hakidu</SelectItem>
                          <SelectItem value="dark">Guy 2</SelectItem>
                          <SelectItem value="system">Guy 3</SelectItem>
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
                <div className="grid grid-cols-3 gap-2">
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
                            value={field.value}
                            onChange={field.onChange}
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
                name="no_of_elimination_judges"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Tournament Location
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
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
                          <SelectValue placeholder="choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">WSDC</SelectItem>
                          <SelectItem value="dark">
                            Saint paul international School
                          </SelectItem>
                          <SelectItem value="system">
                            Bienvenu High School
                          </SelectItem>
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
                            "w-full text-muted-foreground",
                            field.value && "text-foreground"
                          )}
                          iconType={"collapsible"}
                        >
                          <SelectValue placeholder="choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="round 1">Round 1</SelectItem>
                          <SelectItem value="round 2">Round 2</SelectItem>
                          <SelectItem value="round 3">Round 3</SelectItem>
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
                            "w-full text-muted-foreground",
                            field.value && "text-foreground"
                          )}
                          iconType={"collapsible"}
                        >
                          <SelectValue placeholder="choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Quarter-finals (8)">
                            Quarter-finals (8)
                          </SelectItem>
                          <SelectItem value="Semi-finals (8)">
                            Semi-finals
                          </SelectItem>
                          <SelectItem value="entry">Entry-finals</SelectItem>
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
                            "w-full text-muted-foreground",
                            field.value && "text-foreground"
                          )}
                          iconType={"collapsible"}
                        >
                          <SelectValue placeholder="choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 per debate">
                            1 Per Debate
                          </SelectItem>
                          <SelectItem value="2 per debate">
                            2 Per Debate
                          </SelectItem>
                          <SelectItem value="3 per debate">
                            3 Per Debate
                          </SelectItem>
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
                            "w-full text-muted-foreground",
                            field.value && "text-foreground"
                          )}
                          iconType={"collapsible"}
                        >
                          <SelectValue placeholder="choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 per debate">
                            1 Per Debate
                          </SelectItem>
                          <SelectItem value="2 per debate">
                            2 Per Debate
                          </SelectItem>
                          <SelectItem value="3 per debate">
                            3 Per Debate
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-between mt-5 gap-3">
              <Button type="button" variant={"outline"} className="w-full">
                Cancel
                <span className="sr-only">Cancel</span>
              </Button>
              <Button type="button" variant={"default"} className="w-full">
                Update Tournament
                <span className="sr-only">Update Tournament</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default TournamentForm;
