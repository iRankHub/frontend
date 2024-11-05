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
import { Icons } from "@/components/icons";
import {
  Popover,
  PopoverContent,
  PopoverContentWithNoPrimitivePortal,
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
import { School, Student } from "@/lib/grpc/proto/user_management/users_pb";
import { UpdateTeamType } from "@/types/tournaments/teams";
import { updateTournamentTeam } from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";
import { ToastAction } from "@/components/ui/toast";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { getStudents } from "@/core/users/users";
import { GetSchoolsType } from "@/types/user_management/schools";
import { getSchoolsNoAuth } from "@/core/users/schools";
import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";

// Update schema to include optional school
const updateTeamSchemaWithSchool = createTeamSchema.extend({
  school: z.string().optional(),
});

type TeamInput = z.infer<typeof updateTeamSchemaWithSchool>;

interface TeamUserProps {
  team: Team.AsObject;
}

const UpdateTeamForm = ({ team }: TeamUserProps) => {
  const { user } = useUserStore((state) => state);
  const [users, setUsers] = useState<Student.AsObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { updateTeam: updateTeamStore } = useTeamsStore((state) => state);

  // Pagination states for students
  const [studentPagination, setStudentPagination] = useState({
    page: 1,
    pageSize: 50,
    total: 0,
  });
  const [hasMoreStudents, setHasMoreStudents] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(false);

  // School states
  const [schools, setSchools] = useState<School.AsObject[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [loadingSchools, setLoadingSchools] = useState(false);
  const [schoolPagination, setSchoolPagination] = useState({
    page: 1,
    pageSize: 50,
    total: 0,
  });
  const [hasMoreSchools, setHasMoreSchools] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState<Student.AsObject[]>([]);

  const [openPopover, setOpenPopover] = useState<{
    speaker_1: boolean;
    speaker_2: boolean;
    speaker_3: boolean;
    school: boolean;
  }>({
    speaker_1: false,
    speaker_2: false,
    speaker_3: false,
    school: false,
  });

  const form = useForm<TeamInput>({
    resolver: zodResolver(updateTeamSchemaWithSchool),
    defaultValues: {
      name: team.name,
      speaker_1: String(team.speakersList[0].speakerId || ""),
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

  // Load schools
  const loadSchools = async (page: number) => {
    if (loadingSchools || (!hasMoreSchools && page > 1)) return;

    setLoadingSchools(true);
    try {
      const res = await getSchoolsNoAuth({
        page,
        pageSize: schoolPagination.pageSize,
      });

      if (page === 1) {
        setSchools(res.schoolsList);
      } else {
        setSchools((prev) => [...prev, ...res.schoolsList]);
      }

      setSchoolPagination((prev) => ({
        ...prev,
        page,
        total: res.totalcount,
      }));

      setHasMoreSchools(res.schoolsList.length === schoolPagination.pageSize);
    } catch (err) {
      console.error("Error fetching schools:", err);
      toast({
        title: "Error loading schools",
        description: "Failed to load schools. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingSchools(false);
    }
  };

  // Load students with pagination
  const loadStudents = async (page: number) => {
    if (!user || loadingStudents || (!hasMoreStudents && page > 1)) return;

    setLoadingStudents(true);
    const options: GetSchoolsType = {
      pageSize: studentPagination.pageSize,
      page,
      token: user.token,
    };

    try {
      const res = await getStudents({ ...options });

      if (page === 1) {
        setUsers(res.studentsList);
      } else {
        setUsers((prev) => [...prev, ...res.studentsList]);
      }

      setStudentPagination((prev) => ({
        ...prev,
        page,
        total: res.totalcount,
      }));

      setHasMoreStudents(
        res.studentsList.length === studentPagination.pageSize
      );
    } catch (err: any) {
      console.error(err.message);
      toast({
        title: "Error",
        description: "Failed to fetch students list",
        variant: "destructive",
      });
    } finally {
      setLoadingStudents(false);
    }
  };

  // Initial load
  useEffect(() => {
    if (open) {
      loadStudents(1);
      loadSchools(1);
    }
  }, [open]);

  // Filter students based on selected school
  useEffect(() => {
    if (selectedSchool) {
      const filtered = users.filter(
        (student) => student.schoolid === Number(selectedSchool)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [selectedSchool, users]);

  const handleSchoolSelect = (schoolId: string) => {
    setSelectedSchool(schoolId === selectedSchool ? null : schoolId);
    form.setValue("school", schoolId === selectedSchool ? undefined : schoolId);
    setOpenPopover((prev) => ({ ...prev, school: false }));
  };

  const updateTeam = async (data: TeamInput) => {
    if (!user) return;

    if (!/[^0-9]/.test(data.name)) {
      form.setError("name", {
        type: "manual",
        message: "Team name should contain at least one letter.",
      });
      return;
    }

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
        updateTeamStore(team.teamId, res);
        toast({
          title: "Team updated successfully",
          description: "Team has been updated successfully.",
          variant: "success",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        setOpen(false);
      })
      .catch((err) => {
        console.error(err.message);
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive",
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

  const handleUserSelect = (
    userId: string,
    fieldName: "speaker_1" | "speaker_2" | "speaker_3"
  ) => {
    setSelectedUsers((prev) => {
      const newSelectedUsers = { ...prev };
      if (prev[fieldName] === userId) {
        newSelectedUsers[fieldName] = null;
        form.setValue(fieldName, "");
      } else {
        Object.keys(newSelectedUsers).forEach((key) => {
          if (
            newSelectedUsers[key as keyof typeof newSelectedUsers] === userId
          ) {
            newSelectedUsers[key as keyof typeof newSelectedUsers] = null;
          }
        });
        newSelectedUsers[fieldName] = userId;
        form.setValue(fieldName, userId);
      }
      return newSelectedUsers;
    });
    setOpenPopover((prev) => ({ ...prev, [fieldName]: false }));
  };

  const RenderSchoolField = () => {
    return (
      <FormField
        control={form.control}
        name="school"
        render={({ field }) => (
          <FormItem className="flex flex-col my-5">
            <FormLabel className="font-medium text-darkBlue dark:text-foreground">
              Filter by School (Optional)
            </FormLabel>
            <Popover
              open={openPopover.school}
              onOpenChange={(open) =>
                setOpenPopover((prev) => ({ ...prev, school: open }))
              }
            >
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    disabled={!isUpdating}
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? schools.find(
                          (school) => String(school.schoolid) === field.value
                        )?.name || "Select school"
                      : "Select school"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContentWithNoPrimitivePortal className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search school..." />
                  <CommandList>
                    <CommandEmpty>No school found.</CommandEmpty>
                    <CommandGroup>
                      {schools.map((school) => (
                        <CommandItem
                          value={school.name}
                          key={String(school.schoolid)}
                          onSelect={() =>
                            handleSchoolSelect(String(school.schoolid))
                          }
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedSchool === String(school.schoolid)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {school.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    {hasMoreSchools && (
                      <div className="py-2 px-2 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => loadSchools(schoolPagination.page + 1)}
                          disabled={loadingSchools}
                          className="w-full"
                        >
                          {loadingSchools ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            "Load More Schools"
                          )}
                        </Button>
                      </div>
                    )}
                  </CommandList>
                </Command>
              </PopoverContentWithNoPrimitivePortal>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    );
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
          <Popover
            open={openPopover[fieldName]}
            onOpenChange={(open) =>
              setOpenPopover((prev) => ({ ...prev, [fieldName]: open }))
            }
          >
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={!isUpdating}
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? filteredUsers.find(
                        (user) => String(user.studentid) === field.value
                      )
                      ? // User found in filtered list
                        filteredUsers.find(
                          (user) => String(user.studentid) === field.value
                        )?.firstname +
                        " " +
                        filteredUsers.find(
                          (user) => String(user.studentid) === field.value
                        )?.lastname
                      : // User not found in filtered list (likely due to school filter)
                      selectedSchool
                      ? "No student selected"
                      : // Original user from the complete list
                        users.find(
                          (user) => String(user.studentid) === field.value
                        )?.firstname +
                          " " +
                          users.find(
                            (user) => String(user.studentid) === field.value
                          )?.lastname || "Select user"
                    : selectedSchool
                    ? "Select student from this school"
                    : "Select user"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            {/* Rest of the popover content remains the same */}
            <PopoverContentWithNoPrimitivePortal className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search user..." />
                <CommandList>
                  <CommandEmpty>No speaker found.</CommandEmpty>
                  <CommandGroup>
                    {filteredUsers.map((user) => (
                      <CommandItem
                        value={`${user.firstname} ${user.lastname}`}
                        key={String(user.studentid)}
                        onSelect={() => {
                          handleUserSelect(String(user.studentid), fieldName);
                        }}
                        disabled={
                          Object.values(selectedUsers).includes(
                            String(user.studentid)
                          ) &&
                          selectedUsers[fieldName] !== String(user.studentid)
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
                  {hasMoreStudents && (
                    <div className="py-2 px-2 text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => loadStudents(studentPagination.page + 1)}
                        disabled={loadingStudents}
                        className="w-full"
                      >
                        {loadingStudents ? (
                          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          "Load More Students"
                        )}
                      </Button>
                    </div>
                  )}
                </CommandList>
              </Command>
            </PopoverContentWithNoPrimitivePortal>
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
              onClick={() => {
                setIsUpdating(!isUpdating);
                // Reset school filter when switching to view mode
                if (!isUpdating) {
                  setSelectedSchool(null);
                  form.setValue("school", undefined);
                  setFilteredUsers(users);
                }
              }}
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
                  <FormLabel className="text-sm text-darkBlue dark:text-foreground font-medium my-3">
                    Team Name
                    <b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dreamers teams"
                      {...field}
                      disabled={!isUpdating}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* School filter field */}
            {isUpdating && RenderSchoolField()}

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
                {loading ? (
                  <>
                    <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Updating Team...
                  </>
                ) : (
                  <>
                    Update Team
                    <span className="sr-only">Update Team</span>
                  </>
                )}
              </Button>
            )}
          </form>
        </Form>
      </SidePanel>
    </Sheet>
  );
};

export default UpdateTeamForm;
