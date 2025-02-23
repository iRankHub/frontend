import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-Input";
import {
  Popover,
  PopoverContentWithNoPrimitivePortal,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { signUp } from "@/core/authentication/auth";
import { getSchoolsNoAuth } from "@/core/users/schools";
import { School } from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import { StudentSchema } from "@/lib/validations/admin/accounts";
import { UserRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | "admin" | null;
  setSheetOpen: Dispatch<SetStateAction<boolean>>;
}

type Inputs = z.infer<typeof StudentSchema>;

function CreateStudentAccount({ type, setSheetOpen }: CreateUserProps) {
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const [schools, setSchools] = React.useState<School.AsObject[]>([]);
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  React.useEffect(() => {
    getSchoolsNoAuth({
      pageSize: 100,
      page: 1,
    })
      .then((res) => {
        setSchools(res.schoolsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(StudentSchema),
  });

  async function onSubmit(data: Inputs) {
    setIsPending(true);

    await signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      userRole: UserRole.STUDENT,
      dob: "2004-04-04",
      grade: "Grade-4",
      schoolId: Number(data.school),
    })
      .then((res) => {
        form.reset();
        setSheetOpen(false);
        toast({
          variant: "success",
          title: "Success",
          description: "Student account created successfully",
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
          variant: "destructive",
          title: "Error",
          description:
            "Something went wrong. Please check your credentials and try again later",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      })
      .finally(() => {
        setIsPending(false);
      });
  }
  return (
    <ScrollArea className="p-5 h-full pb-20">
      <div className="w-full mb-3">
        <h3 className="text-foreground font-bold text-lg">Create an account</h3>
        <span className="text-sm text-muted-foreground">
          Enter into the below fields to create an account
        </span>
      </div>
      <Form {...form}>
        <form
          className="max-w-md w-full grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  First Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Iman" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Last Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Koulibally" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Email<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="we-koulibally@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Select School<b className="text-primary font-light"> *</b>
                </FormLabel>
                <br />
                {/* <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select school..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem value={String(school.schoolid)} key={school.schoolid}>
                        {school.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select> */}
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen} modal>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {field.value
                          ? schools.find(
                            (school) =>
                              String(school.schoolid) === field.value
                          )?.name
                          : "Select school..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContentWithNoPrimitivePortal className="p-0 ">
                      <Command className="">
                        <CommandInput
                          placeholder="Search schools..."
                          onValueChange={(value) => setSearchQuery(value)}
                        />
                        <CommandList>
                          <CommandEmpty>No schools found.</CommandEmpty>
                          <CommandGroup className="cursor-pointer">
                            {filteredSchools.map((school) => (
                              <CommandItem
                                key={school.schoolid}
                                onSelect={() => {
                                  form.setValue("school", String(school.schoolid));
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value === String(school.schoolid)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {school.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContentWithNoPrimitivePortal>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Confirm Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} variant={"default"} size={"lg"}>
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Create Account
            <span className="sr-only">Create Account</span>
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}

export default CreateStudentAccount;
