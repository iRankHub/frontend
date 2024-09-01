"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { Speaker, Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { createTeamSchema } from "@/lib/validations/admin/tournaments/create-team.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { getAllUsers, getStudents } from "@/core/users/users";
import { Student } from "@/lib/grpc/proto/user_management/users_pb";
import { CreateTeamType, UpdateTeamType } from "@/types/tournaments/teams";
import { createTournamentTeam, updateTournamentTeam } from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";
import DeleteTeam from "./delete-team";

export const columns: ColumnDef<Team.AsObject>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "speakersList",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No. of Speakers"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {(row.getValue("speakersList") as Speaker.AsObject[]).length}
          </span>
        </div>
      );
    },
    enableHiding: false,
    filterFn: (row, columnId, filterValue: string) => {
      let value = row.getValue(columnId) as string;
      if (typeof value === "number") value = String(value);
      return value?.toLowerCase().includes(filterValue);
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center gap-3">
          <UpdateTeamForm team={row.original} />
          <DeleteTeam team={row.original} />
        </div>
      );
    },
    enableHiding: false,
    maxSize: 20,
  },
];

interface TeamUserProps {
  team: Team.AsObject;
}

type TeamInput = z.infer<typeof createTeamSchema>;

const UpdateTeamForm = ({ team }: TeamUserProps) => {
  const { user } = useUserStore((state) => state);
  const [users, setUsers] = useState<Student.AsObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const {updateTeam: updateTeamStore} = useTeamsStore((state) => state);

  const form = useForm<TeamInput>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: team.name,
      speaker_1: String(team.speakersList[0].speakerId),
      speaker_2: String(team.speakersList[1].speakerId || ""),
      speaker_3: String(team.speakersList[2].speakerId || ""),
    },
  });

  const [selectedUsers, setSelectedUsers] = useState<{
    speaker_1: string | null;
    speaker_2: string | null;
    speaker_3: string | null;
  }>({
    speaker_1: String(team.speakersList[0].speakerId),
    speaker_2: String(team.speakersList[1].speakerId),
    speaker_3: String(team.speakersList[2].speakerId),
  });

  const updateTeam = async (data: TeamInput) => {
    if (!user) return;

    const options: UpdateTeamType = {
      name: data.name,
      speakers: [
        { speaker_id: Number(data.speaker_1) },
        { speaker_id: Number(data.speaker_2) },
        { speaker_id: Number(data.speaker_3) },
      ],
      team_id: team.teamId,
      token: user.token,
    };

    setLoading(true);
    await updateTournamentTeam(options)
        .then((res) => {
            form.reset();
            setSelectedUsers({
                speaker_1: null,
                speaker_2: null,
                speaker_3: null,
            });
            updateTeamStore(team.teamId, res);
            toast({
                title: "Team updated successfully",
                description: "Team has been updated successfully.",
                variant: "success",
            });
            setOpen(false);
        })
        .catch((err) => {
            console.error(err.message);
        })
        .finally(() => {
            setLoading(false);
        });
  };

  useEffect(() => {
    if (!user) return;
    const options: GetSchoolsType = {
      pageSize: 1000,
      page: 1,
      token: user.token,
    };
    getStudents({ ...options })
      .then((res) => {
        setUsers(res.studentsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);

  const handleUserSelect = (
    userId: string,
    fieldName: "speaker_1" | "speaker_2" | "speaker_3"
  ) => {
    const currentSelectedUser = form.getValues(fieldName);

    if (selectedUsers[fieldName] === userId) {
      setSelectedUsers((prev) => ({
        ...prev,
        [fieldName]: null,
      }));
      form.setValue(fieldName, "");
    } else {
      if (currentSelectedUser) {
        setSelectedUsers((prev) => ({
          ...prev,
          [fieldName]: null,
        }));
      }
      setSelectedUsers((prev) => ({
        ...prev,
        [fieldName]: userId,
      }));
      form.setValue(fieldName, userId);
    }
  };

  const renderSpeakerField = (
    fieldName: "speaker_1" | "speaker_2" | "speaker_3",
    label: string
  ) => (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-medium text-foreground">{label}</FormLabel>
          <Popover modal>
            <PopoverTrigger asChild disabled={!isUpdating}>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? users.find(
                        (user) => String(user.studentid) === field.value
                      )?.firstname +
                      " " +
                      users.find(
                        (user) => String(user.studentid) === field.value
                      )?.lastname
                    : "Select user"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search user..." />
                <CommandList>
                  <CommandEmpty>No speaker found.</CommandEmpty>
                  <CommandGroup>
                    {users.map((user) => (
                      <CommandItem
                        value={String(user.studentid)}
                        key={String(user.studentid)}
                        onSelect={() =>
                          handleUserSelect(String(user.studentid), fieldName)
                        }
                        disabled={
                          Object.values(selectedUsers).includes(
                            String(user.studentid)
                          ) && field.value !== String(user.studentid)
                        }
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            Object.values(selectedUsers).includes(
                              String(user.studentid)
                            )
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {user.firstname + " " + user.lastname}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="mr-3">
        <Button
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="w-full bg-transparent hover:bg-transparent m-0"
        >
          <Icons.view className="w-5 h-5 text-info" />
        </Button>
      </SheetTrigger>
      <SidePanel>
        <Panelheader>
          <div className="flex items-center gap-1">
            <h3 className="text-sm font-bold capitalize">{team.name}</h3>
            <Button
              type="button"
              className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
              size={"icon"}
              onClick={() => setIsUpdating(!isUpdating)}
            >
              <Icons.pencilLine className="w-4 h-4" />
            </Button>
          </div>
        </Panelheader>
        <Form {...form}>
          <form
            onSubmit={(...args) => void form.handleSubmit(updateTeam)(...args)}
            className="p-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darkBlue">
                    Team Name
                    <b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Dreamers teams" {...field} disabled={!isUpdating} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full mb-5">
              <h3 className="text-sm text-muted-foreground font-medium my-3">
                Team Members
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {renderSpeakerField("speaker_1", "1st Speaker")}
                {renderSpeakerField("speaker_2", "2nd Speaker")}
                {renderSpeakerField("speaker_3", "3rd Speaker")}
              </div>
            </div>
            {isUpdating && (
              <Button
                type="submit"
                size={"sm"}
                className="w-full hover:bg-primary"
                disabled={loading}
              >
                Update Team
                {loading && (
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                <div className="sr-only">Update Team</div>
              </Button>
            )}
          </form>
        </Form>
      </SidePanel>
    </Sheet>
  );
};
