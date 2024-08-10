import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { signUp } from "@/core/authentication/auth";
import { countries } from "@/lib/data";
import { cn } from "@/lib/utils";
import { volunteerSchema } from "@/lib/validations/auth.schema";
import { UserRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | null;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

type Inputs = z.infer<typeof volunteerSchema>;

function CreateVolunteerAccount({ type, setSheetOpen }: CreateUserProps) {
  const [isPending, setIsPending] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(volunteerSchema),
  });

  async function onSubmit(data: Inputs) {
    await signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      userRole: UserRole.VOLUNTEER,
      dob: format(data.dob, "yyyy-MM-dd"),
      graduationYear: parseInt(data.graduation_year),
      roleInterestedIn: "Mentor",
    })
      .then((res) => {
        toast({
          variant: "success",
          title: "Success Message",
          description: "Success Description",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        form.reset();
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

  const handleCancel = () => {
    setSheetOpen(false)
  };

  type FieldName = keyof Inputs;

  const validateFormData = async (fields: string[]) => {
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    return output;
  };
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
          {activeStep === 1 && (
            <>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      First Name<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Riviera High School" {...field} />
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
                    <FormLabel className="capitalize">
                      Last Name<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Riviera High School" {...field} />
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
                    <FormLabel className="capitalize">
                      Volunteer Email
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="emma@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col relative">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full overflow-hidden">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-center break-words overflow-hidden font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        align="start"
                        sideOffset={5}
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown-buttons"
                          fromYear={1950}
                          toYear={2024}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1950-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Gender<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a gender..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="they/them">Them / Them</SelectItem>
                        <SelectItem value="none">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-5">
                <Button
                  type="button"
                  variant={"secondary"}
                  size={"lg"}
                  className="w-full"
                  onClick={handleCancel}
                >
                  Cancel
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button
                  type="button"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "firstName",
                      "lastName",
                      "email",
                      "dob",
                      "gender",
                    ]);
                    if (formErrors && activeStep < 4) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nationality
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Popover
                        open={openCountries}
                        onOpenChange={setOpenCountries}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? countries.find(
                                  (country) => country.name === field.value
                                )?.name
                              : "Select country..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>Country not Found.</CommandEmpty>
                            <CommandList>
                              <CommandGroup>
                                {countries.map((country, index) => (
                                  <CommandItem
                                    key={index}
                                    value={country.name}
                                    onSelect={() => {
                                      form.setValue("country", country.name);
                                      setOpenCountries(false);
                                    }}
                                  >
                                    {country.name}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        field.value === country.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="national_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      National Id/Passport
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="12000..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="current_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Current Address
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="st 24 Bullevard Hills" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact_person_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Email
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="emma@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-5">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="w-full"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button
                  type="button"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "nationality",
                      "national_id",
                      "current_address",
                      "contact_person_email",
                    ]);
                    if (formErrors && activeStep < 4) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
            </>
          )}
          {activeStep === 3 && (
            <>
              <FormField
                control={form.control}
                name="secondary_school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Secondary School
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Emma" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="enrolled"
                render={({ field }) => (
                  <FormItem className="space-y-3 mb-5">
                    <FormLabel>
                      Enrolled in university
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center space-x-28"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="graduation_year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Graduation Year
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a year..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Password
                      <b className="text-primary font-light"> *</b>
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
                    <FormLabel className="capitalize">
                      Confirm Password
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-5">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="w-full"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button
                  type="submit"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                >
                  Create Account
                  <span className="sr-only">Create Account</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </ScrollArea>
  );
}

export default CreateVolunteerAccount;
