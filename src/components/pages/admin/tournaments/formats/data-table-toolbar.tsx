"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { createTournamentFormatSchema } from "@/lib/validations/admin/tournaments/create-tournament-format.schema";
import { z } from "zod";
import { createTournamentFormat } from "@/core/tournament/formats";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";
import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchTerm: string;
  isLoading: boolean;
}

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

export function DataTableToolbar<TData>({
  table,
  searchTerm,
  isLoading,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { addSingleFormat } = useFormatsStore((state) => state);
  const [inputValue, setInputValue] = useState(searchTerm);

  const form = useForm<TournamentFormatInput>({
    resolver: zodResolver(createTournamentFormatSchema),
    defaultValues: {
      description: "",
      format_name: "",
    },
  });

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const event = new CustomEvent('search-change', {
      detail: newValue
    });
    window.dispatchEvent(event);
  };

  const handleClearSearch = () => {
    setInputValue('');
    const event = new CustomEvent('search-change', {
      detail: ''
    });
    window.dispatchEvent(event);
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    const event = new CustomEvent('reset-table');
    window.dispatchEvent(event);
  };

  const createFormat = async (data: TournamentFormatInput) => {
    if (!user) return;

    if (!isNaN(Number(data.format_name))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Format name can't only be numbers",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    // check if speakers per team is a number
    if (isNaN(Number(data.speakers_per_team))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Speakers per team must be a number",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    const options = {
      token: user.token,
      format_name: data.format_name,
      description: data.description,
      speakers_per_team: Number(data.speakers_per_team),
    };

    setLoading(true);
    await createTournamentFormat({ ...options })
      .then((res) => {
        setLoading(false);
        form.reset();
        addSingleFormat(res.format as TournamentFormat.AsObject);
        setDialogOpen(false);
        toast({
          variant: "success",
          title: "Success",
          description: "Tournament format created successfully",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        setLoading(false);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const speakersOptions = useMemo(() => {
    const column = table.getColumn("speakersPerTeam");
    if (!column) return [];

    const uniqueSpeakerCounts = Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("speakersPerTeam"))
      )
    );

    return uniqueSpeakerCounts
      .filter((value) => typeof value === "number")
      .sort((a, b) => (a as number) - (b as number))
      .map((value) => ({
        label: String(value) + " speakers",
        value: value as number,
      }));
  }, [table]);
  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between bg-brown flex-wrap px-5 py-3 gap-3">
      <div className="flex flex-1 flex-col sm:flex-row justify-end sm:justify-normal sm:items-center sm:space-x-3">
        <div className="flex items-center gap-2 w-full sm:w-[280px] mb-2 sm:mb-0">
          <Input
            placeholder="Search format..."
            value={inputValue}
            onChange={handleInputChange}
            className={cn("h-8 w-full", isLoading && "opacity-50")}
            disabled={isLoading}
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="h-8 px-2 text-white"
              disabled={isLoading}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        <div className="flex items-center">
          {table.getColumn("speakersPerTeam") && (
            <DataTableFacetedFilter
              column={table.getColumn("speakersPerTeam")}
              title="speakers"
              options={speakersOptions}
            />
          )}
          {(isFiltered || inputValue) && (
            <Button
              variant="ghost"
              onClick={handleResetAll}
              className="h-8 px-2 lg:px-3 text-white"
              disabled={isLoading}
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <Dialog onOpenChange={setDialogOpen} open={dialogOpen} modal>
        <DialogTrigger asChild>
          <Button
            type="button"
            data-onboarding-id="add-format-button"
            className="text-background dark:text-foreground dark:hover:text-background gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group mr-5"
          >
            <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground group-hover:dark:text-background" />
            Add New Format
          </Button>
        </DialogTrigger>        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Create Tournament Format
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Form {...form}>
              <form
                onSubmit={(...args) =>
                  void form.handleSubmit(createFormat)(...args)
                }
              >
                <FormField
                  control={form.control}
                  name="format_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darkBlue dark:text-foreground">
                        Format Name
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg. World Schools Debate"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darkBlue dark:text-foreground">
                        Description
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="speakers_per_team"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darkBlue dark:text-foreground">
                        Speakers per team
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="3 speakers"
                          {...field}
                          className="w-full"
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
                <DialogFooter className="w-full mt-3">
                  <Button
                    type="submit"
                    size={"sm"}
                    className="w-full hover:bg-primary"
                  >
                    Create Format
                    {loading && (
                      <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    <div className="sr-only">Create Format</div>
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
