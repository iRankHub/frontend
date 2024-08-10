import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import FormatCard from "./format-card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  createTournamentFormat,
  tournamentFormats,
} from "@/core/tournament/formats";
import {
  ListTournamentFormatsResponse,
  TournamentFormat,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { createTournamentFormatSchema } from "@/lib/validations/admin/create-tournament-format.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

function Formats({}) {
  const [formats, setFormats] = useState<TournamentFormat.AsObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);

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
        setFormats((prev) => [
          ...prev,
          res.format as TournamentFormat.AsObject,
        ]);
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

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentFormats({ ...data })
      .then((res) => {
        console.log(res.formatsList);
        setFormats(res.formatsList);
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
            Speakers
          </Button>
        </form>
        <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
          <DialogTrigger>
            <Button
              type="button"
              className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground group"
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
      <div className="w-full bg-background p-8 grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
          {formats.map((format) => (
            <FormatCard key={format.formatId} format={format} setFormats={setFormats} />
          ))}
        </div>
        <Button
          type="button"
          className="ring-0 border-none outline-none text-primary mt-10 p-0 bg-primary/80 underline"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default Formats;
