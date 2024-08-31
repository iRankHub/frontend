"use client";

import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { userRoles } from "@/components/tables/data/data";
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
import { useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { createTournamentFormatSchema } from "@/lib/validations/admin/tournaments/create-tournament-format.schema";
import { z } from "zod";
import { createTournamentFormat } from "@/core/tournament/formats";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";
import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Icons } from "@/components/icons";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { addSingleFormat } = useFormatsStore((state) => state);

  const form = useForm<TournamentFormatInput>({
    resolver: zodResolver(createTournamentFormatSchema),
    defaultValues: {
      description: "",
      format_name: "",
    },
  });

  const createFormat = async (data: TournamentFormatInput) => {
    if (!user) return;

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
  return (
    <div className="w-full rounded-t-md overflow-hidden flex items-center justify-between bg-brown">
      <div className="flex flex-1 items-center space-x-3 p-5 py-4">
        <Input
          placeholder="Search name..."
          value={(table.getColumn("formatName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("formatName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[280px]"
        />
        {table.getColumn("speakers") && (
          <DataTableFacetedFilter
            column={table.getColumn("speakers")}
            title="speakers"
            options={userRoles}
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
      <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
        <DialogTrigger>
          <Button
            type="button"
            className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground group mr-5"
          >
            <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Add New Format
          </Button>
        </DialogTrigger>
        <DialogContent>
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
                      <FormLabel className="text-darkBlue">
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
                      <FormLabel className="text-darkBlue">
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
                      <FormLabel className="text-darkBlue">
                        Speakers per team
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="3 speakers" {...field} />
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
