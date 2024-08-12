"use client";

import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createTournamentFormatSchema } from "@/lib/validations/admin/tournaments/create-tournament-format.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserStore } from "@/stores/auth/auth.store";
import { ToastAction } from "@/components/ui/toast";
import { deleteTournamentFormat, updateTournamentFormat } from "@/core/tournament/formats";
import { useToast } from "@/components/ui/use-toast";

interface FormatCardProps {
  format: TournamentFormat.AsObject;
  setFormats: React.Dispatch<React.SetStateAction<TournamentFormat.AsObject[]>>;
}

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

function FormatCard({ format, setFormats }: FormatCardProps) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  const form = useForm<TournamentFormatInput>({
    resolver: zodResolver(createTournamentFormatSchema),
    defaultValues: {
      description: format.description,
      format_name: format.formatName,
      speakers_per_team: String(format.speakersPerTeam),
    },
  });

  const updateFormat = async (data: TournamentFormatInput) => {
    if (!user) return;

    const options = {
      format_id: format.formatId,
      format_name: data.format_name,
      description: data.description,
      speakers_per_team: Number(data.speakers_per_team),
      token: user.token,
    };

    setLoading(true);
    await updateTournamentFormat({ ...options })
      .then((res) => {
        setLoading(false);
        form.reset();
        setFormats((prev) => {
          const index = prev.findIndex(
            (format) => format.formatId === res.format?.formatId
          );
          if (index === -1) return prev;
          prev[index] = res.format as TournamentFormat.AsObject;
          return [...prev];
        });
        setIsEdit(false);
        form.setValue("description", res.format?.description || "");
        form.setValue("format_name", res.format?.formatName || "");
        form.setValue(
          "speakers_per_team",
          String(res.format?.speakersPerTeam) || "0"
        );
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteFormat = async () => {
    if (!user) return;

    const options = {
      format_id: format.formatId,
      token: user.token,
    };

    setDeleteLoading(true);
    await deleteTournamentFormat({
      ...options,
    })
      .then((res) => {
        if (res.success) {
          setFormats((prev) => {
            const index = prev.findIndex(
              (fm) => fm.formatId === format.formatId
            );

            if (index === -1) return prev;
            prev.splice(index, 1);
            return [...prev];
          });
          setIsDelete(false);
          setDialogOpen(false);    
          setSheetOpen(false);      
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
        console.error(err.message);
        setDeleteLoading(false);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  return (
    <>
      <div className="w-full border rounded-md border-gray-200 p-3 flex flex-col gap-4 cursor-pointer hover:shadow-lg">
        <span className="text-primary font-bold text-lg">
          {format.formatName}
        </span>
        <p className="text-sm text-muted-text">{format.description}</p>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Icons.users className="text-primary w-3.5 h-3.5" />
            <span className="text-muted-text text-sm">
              {format.speakersPerTeam}
            </span>
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
                  <h3 className="text-sm font-bold">{format.formatName}</h3>
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
                          onClick={deleteFormat}
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
                  className="grid gap-3 p-5"
                  onSubmit={(...args) =>
                    void form.handleSubmit(updateFormat)(...args)
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
                            className="disabled:opacity-100"
                            disabled={!isEdit}
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
                            disabled={!isEdit}
                            className="disabled:opacity-100"
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
                          <Input
                            placeholder="3 speakers"
                            {...field}
                            disabled={!isEdit}
                            className="disabled:opacity-100"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {isEdit && (
                    <Button
                      type="submit"
                      size={"sm"}
                      className="hover:bg-primary"
                    >
                      Save Changes
                      {loading && (
                        <Icons.spinner
                          className="mr-2 h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                      )}
                      <div className="sr-only">Save Changes</div>
                    </Button>
                  )}
                </form>
              </Form>
            </SidePanel>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default FormatCard;
