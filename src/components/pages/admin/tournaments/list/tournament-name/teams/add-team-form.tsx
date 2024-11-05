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
import { CreateTeamType } from "@/types/tournaments/teams";
import { createTournamentTeam } from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";
import { ToastAction } from "@/components/ui/toast";
import { getSchoolsNoAuth } from "@/core/users/schools";

// Update schema to include optional school
const createTeamSchemaWithSchool = createTeamSchema.extend({
  school: z.string().optional(),
});

type TeamInput = z.infer<typeof createTeamSchemaWithSchool>;

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

interface AddTeamFormProps {
  availableStudents: Student.AsObject[];
  setAllStudents: React.Dispatch<React.SetStateAction<Student.AsObject[]>>;
  pagination: Pagination;
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
}

function AddTeamForm({
  availableStudents,
  setAllStudents,
  pagination,
  onLoadMore,
  hasMore,
  loading,
}: AddTeamFormProps) {
  const params = useParams<{ name: string }>();
  const { user } = useUserStore((state) => state);
  const { addTeam } = useTeamsStore((state) => state);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const [schools, setSchools] = useState<School.AsObject[]>([]);
  const [loadingSchools, setLoadingSchools] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [filteredStudents, setFilteredStudents] =
    useState<Student.AsObject[]>(availableStudents);
  const [schoolPagination, setSchoolPagination] = useState({
    page: 1,
    pageSize: 50,
    total: 0,
  });
  const [hasMoreSchools, setHasMoreSchools] = useState(true);

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
    resolver: zodResolver(createTeamSchemaWithSchool),
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

  // Initial load of schools
  useEffect(() => {
    loadSchools(1);
  }, []);

  // Filter students based on selected school
  useEffect(() => {
    if (selectedSchool) {
      const filtered = availableStudents.filter(
        (student) => student.schoolid === Number(selectedSchool)
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(availableStudents);
    }
  }, [selectedSchool, availableStudents]);

  const handleSchoolSelect = (schoolId: string) => {
    setSelectedSchool(schoolId === selectedSchool ? null : schoolId);
    form.setValue("school", schoolId === selectedSchool ? undefined : schoolId);
    setOpenPopover((prev) => ({ ...prev, school: false }));
  };

  const createTeam = async (data: TeamInput) => {
    if (!user) return;

    if (!/[^0-9]/.test(data.name)) {
      form.setError("name", {
        type: "manual",
        message: "Team name should contain at least one letter.",
      });
      return;
    }

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

    setIsSubmitting(true);
    await createTournamentTeam(options)
      .then((res) => {
        form.reset();
        form.setValue("name", "");
        setSelectedUsers({
          speaker_1: null,
          speaker_2: null,
          speaker_3: null,
        });
        setSelectedSchool(null);
        addTeam(res);

        const usedStudentIds = [
          Number(data.speaker_1),
          Number(data.speaker_2),
          Number(data.speaker_3),
        ];
        const updatedStudents = availableStudents.filter(
          (student) => !usedStudentIds.includes(student.studentid)
        );
        setAllStudents(updatedStudents);

        toast({
          title: "Team created successfully",
          description: "Team has been created successfully.",
          variant: "success",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
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
        setIsSubmitting(false);
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

  const RenderSpeakerField = (
    fieldName: "speaker_1" | "speaker_2" | "speaker_3",
    label: string
  ) => {
    return (
      <FormField
        control={form.control}
        name={fieldName}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="font-medium text-darkBlue dark:text-foreground">
              {label}
            </FormLabel>
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
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? filteredStudents.find(
                          (user) => String(user.studentid) === field.value
                        )?.firstname +
                        " " +
                        filteredStudents.find(
                          (user) => String(user.studentid) === field.value
                        )?.lastname
                      : "Select user"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContentWithNoPrimitivePortal className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search user..." />
                  <CommandList>
                    <CommandEmpty>No speaker found.</CommandEmpty>
                    <CommandGroup>
                      {filteredStudents.map((user) => (
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
                    {hasMore && (
                      <div className="py-2 px-2 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={onLoadMore}
                          disabled={loading}
                          className="w-full"
                        >
                          {loading ? (
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
  };

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
              <FormLabel className="text-darkBlue dark:text-foreground">
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

        {/* School filter field */}
        {RenderSchoolField()}

        <div className="w-full mb-5">
          <h3 className="text-sm text-darkBlue dark:text-foreground font-medium my-3">
            Team Members
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {RenderSpeakerField("speaker_1", "1st Speaker")}
            {RenderSpeakerField("speaker_2", "2nd Speaker")}
            {RenderSpeakerField("speaker_3", "3rd Speaker")}
          </div>
        </div>
        <Button
          type="submit"
          size="sm"
          className="w-full hover:bg-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Creating Team...
            </>
          ) : (
            <>
              Create Team
              <span className="sr-only">Create Team</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default AddTeamForm;
