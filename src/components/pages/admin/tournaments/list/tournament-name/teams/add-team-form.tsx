import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { Icons } from "@/components/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
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
import { CreateTeamType } from "@/types/tournaments/teams";
import { createTournamentTeam } from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";

type TeamInput = z.infer<typeof createTeamSchema>;

function AddTeamForm() {
  const params = useParams<{ name: string }>();
  const { user } = useUserStore((state) => state);
  const {addTeam} = useTeamsStore((state) => state);
  const [users, setUsers] = useState<Student.AsObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {toast} = useToast();
  const form = useForm<TeamInput>({
    resolver: zodResolver(createTeamSchema),
  });
  const [selectedUsers, setSelectedUsers] = useState<{
    speaker_1: string | null;
    speaker_2: string | null;
    speaker_3: string | null;
  }>({
    speaker_1: null,
    speaker_2: null,
    speaker_3: null,
  });

  const createTeam = async (data: TeamInput) => {
    if (!user) return;

    const options: CreateTeamType = {
      name: data.name,
      speakers: [
        { speaker_id: Number(data.speaker_1) },
        { speaker_id: Number(data.speaker_2) },
        { speaker_id: Number(data.speaker_3) },
      ],
      tournament_id: Number(params.name),
      token: user.token,
    };

    setLoading(true);
    await createTournamentTeam(options)
        .then((res) => {
            form.reset();
            setSelectedUsers({
                speaker_1: null,
                speaker_2: null,
                speaker_3: null,
            });
            addTeam(res);
            toast({
                title: "Team created successfully",
                description: "Team has been created successfully.",
                variant: "success",
            });
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
            <PopoverTrigger asChild>
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
                    ? users.find((user) => String(user.studentid) === field.value)
                        ?.firstname + " " + users.find((user) => String(user.studentid) === field.value)?.lastname
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
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(createTeam)(...args)}
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
                <Input placeholder="Dreamers teams" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full mb-5">
          <h3 className="text-sm text-muted-foreground font-medium my-3">Team Members</h3>
          <div className="grid grid-cols-2 gap-2">
            {renderSpeakerField("speaker_1", "1st Speaker")}
            {renderSpeakerField("speaker_2", "2nd Speaker")}
            {renderSpeakerField("speaker_3", "3rd Speaker")}
          </div>
        </div>
        <Button type="submit" size={"sm"} className="w-full hover:bg-primary">
          Create Team
          {loading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          <div className="sr-only">Create Team</div>
        </Button>
      </form>
    </Form>
  );
}

export default AddTeamForm;
