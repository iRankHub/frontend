"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { StudentSchema } from "@/lib/validations/auth.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { UserRole } from "@/types";
import { signUp } from "@/core/authentication/auth";
import { getSchoolsNoAuth } from "@/core/users/schools";
import { School } from "@/lib/grpc/proto/user_management/users_pb";

type Inputs = z.infer<typeof StudentSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = [1, 2, 3];
  const [schools, setSchools] = React.useState<School.AsObject[]>([]);

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
      dob: format(data.dob, "yyyy-MM-dd"),
      grade: data.grade,
      schoolId: Number(data.school),
    })
      .then((res) => {
        if (res.success) {
          toast({
            variant: "success",
            title: "Success",
            description: "Signup successful. Please wait for approval",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
          form.reset();
          router.push("/auth/student/login");
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

  const Step = ({
    number,
    isActive,
  }: {
    number: number;
    isActive: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-3">
        <span className="text-xs capitalize">step {number.toString()}</span>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-xs">
          {isActive || number < activeStep ? (
            <div className="w-4 h-4 bg-success-green rounded-full flex items-center justify-center">
              {number !== activeStep && (
                <Icons.check className="w-4 h-4 text-white" />
              )}
            </div>
          ) : (
            <p>{number.toString()}</p>
          )}
        </div>
      </div>
    );
  };

  const Dots = () => {
    return (
      <div className="flex space-x-1">
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
      </div>
    );
  };

  const handleCancel = () => {
    router.push("/auth/school/login");
  };

  type FieldName = keyof Inputs;

  const validateFormData = async (fields: string[]) => {
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    return output;
  };

  return (
    <div className="w-full">
      {/* tab section */}
      <div className="w-full mb-10">
        <p className="text-sm  text-black/50 mb-4">
          step {activeStep} of {steps.length} completed
        </p>
        <div className="flex items-center justify-between space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <Step number={step} isActive={step === activeStep} />
              {index < steps.length - 1 && <Dots />}
            </React.Fragment>
          ))}
        </div>
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
                      <Input placeholder="Emma" {...field} />
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
                      <Input placeholder="Theresa" {...field} />
                    </FormControl>
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
                  className="w-full hover:bg-primary"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "firstName",
                      "lastName",
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
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/student/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col relative">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
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
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Choose School
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
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
                          <SelectItem
                            value={String(school.schoolid)}
                            key={school.schoolid}
                          >
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Grade
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Grade 1">Grade 1</SelectItem>
                        <SelectItem value="Grade 2">Grade 2</SelectItem>
                        <SelectItem value="Grade 3">Grade 3</SelectItem>
                        <SelectItem value="Grade 4">Grade 4</SelectItem>
                        <SelectItem value="Grade 5">Grade 5</SelectItem>
                        <SelectItem value="Grade 6">Grade 6</SelectItem>
                        <SelectItem value="Grade 7">Grade 7</SelectItem>
                        <SelectItem value="Grade 8">Grade 8</SelectItem>
                        <SelectItem value="Grade 9">Grade 9</SelectItem>
                        <SelectItem value="Grade 10">Grade 10</SelectItem>
                        <SelectItem value="Grade 11">Grade 11</SelectItem>
                        <SelectItem value="Grade 12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
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
                  className="w-full hover:bg-primary"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "dob",
                      "school",
                      "grade",
                    ]);
                    if (formErrors && activeStep < 3) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/student/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
          {activeStep === 3 && (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Student Email
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
                  variant={"default"}
                  size={"lg"}
                  className="w-full hover:bg-primary"
                >
                  Register
                  {isPending && (
                    <div className="w-4 h-4 ml-2 rounded-full animate-spin border-white border-2 border-r-0" />
                  )}
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/student/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
