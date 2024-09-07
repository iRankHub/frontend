import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "../ui/use-toast";
import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
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
import {
  deleteTournamentFormat,
  updateTournamentFormat,
} from "@/core/tournament/formats";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SidePanel, { Panelheader } from "../layout/admin-panel/side-panel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";

interface FormatCardProps {
  row: any;
  getColumnValue: (row: any, columnId: string) => string;
}

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

const FormatCard = ({ row, getColumnValue }: FormatCardProps) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const { user } = useUserStore((state) => state);
  const { updateFormat: updateFormatStore, deleteFormat: deleteFormatStore } =
    useFormatsStore((state) => state);
  const { toast } = useToast();

  const form = useForm<TournamentFormatInput>({
    resolver: zodResolver(createTournamentFormatSchema),
    defaultValues: {
      description: getColumnValue(row, "description"),
      format_name: getColumnValue(row, "formatName"),
      speakers_per_team: Number(getColumnValue(row, "speakersPerTeam")),
    },
  });

  const updateFormat = async (data: TournamentFormatInput) => {
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
      format_id: Number(getColumnValue(row, "formatId")),
      format_name: data.format_name,
      description: data.description,
      speakers_per_team: Number(data.speakers_per_team),
      token: user.token,
    };

    setLoading(true);
    await updateTournamentFormat({ ...options })
      .then((res) => {
        form.reset();
        updateFormatStore(
          Number(getColumnValue(row, "formatId")),
          res.format as TournamentFormat.AsObject
        );
        setIsEdit(false);
        form.setValue("description", res.format?.description || "");
        form.setValue("format_name", res.format?.formatName || "");
        form.setValue("speakers_per_team", res.format?.speakersPerTeam || 1);
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
      format_id: Number(getColumnValue(row, "formatId")),
      token: user.token,
    };

    setDeleteLoading(true);
    await deleteTournamentFormat({
      ...options,
    })
      .then((res) => {
        if (res.success) {
          deleteFormatStore(Number(getColumnValue(row, "formatId")));

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
    <Card key={row.id} className="p-3 hover:shadow-lg">
      <CardTitle className="text-primary font-bold text-lg mb-2 truncate">
        {getColumnValue(row, "formatName")}
      </CardTitle>
      <CardDescription className="text-sm text-muted-text mb-3 dark:text-foreground line-clamp-2">
        {getColumnValue(row, "description")}
      </CardDescription>
      <CardFooter className="flex items-center gap-4 justify-between p-0 h-auto">
        <div className="flex items-center gap-3">
          <Icons.users className="text-primary w-3.5 h-3.5" />
          <span className="text-muted-text text-sm dark:text-foreground">
            {getColumnValue(row, "speakersPerTeam")} speakers per team
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
              <div className="flex items-center gap-1 truncate">
                <h3 className="text-sm font-bold truncate max-w-48">
                  {getColumnValue(row, "formatName")}
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
                      <FormLabel className="text-darkBlue dark:text-foreground">
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
                      <FormLabel className="text-darkBlue dark:text-foreground">
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
                      <FormLabel className="text-darkBlue dark:text-foreground">
                        Speakers per team
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="3 speakers"
                          {...field}
                          list="speakers"
                          min="1"
                          max="10"
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
      </CardFooter>
    </Card>
  );
};

export default FormatCard;
