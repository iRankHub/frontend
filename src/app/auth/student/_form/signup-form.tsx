"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { StudentSchema } from "@/lib/validations/auth";
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
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { countries } from "@/lib/data";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

type Inputs = z.infer<typeof StudentSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = [1, 2, 3];

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(StudentSchema),
  });

  function onSubmit(data: Inputs) {
    console.log(data);
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
            <div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
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
                  className="w-full"
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
                    href="/auth/student/signup"
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
                        {countries.map((country) => (
                          <SelectItem value={country.name} key={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
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
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "dob",
                      "school",
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
                    href="/auth/student/signup"
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
                <Button variant={"default"} size={"lg"} className="w-full">
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              {activeStep <= 1 && (
                <div className="w-full flex flex-col justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1 justify-center">
                    <span className="text-lg text-darkBlue">
                      Already have an account?
                    </span>
                    <Link
                      href="/auth/school/signup"
                      className="text-lg text-blue hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
