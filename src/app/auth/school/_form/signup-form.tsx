"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { schoolSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { countries } from "@/lib/data";

type Inputs = z.infer<typeof schoolSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = [1, 2, 3, 4];

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolSchema),
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
    // setIsPending(true);
    // try {
    //   signIn("credentials", {
    //     ...data,
    //     redirect: false,
    //   })
    //     .then((callback) => {
    //       if (callback?.error) {
    //         console.log(callback?.error);
    //         toast({
    //           title: "Error",
    //           description: callback?.error,
    //           variant: "destructive",
    //         });
    //       } else if (!callback?.error && callback?.ok) {
    //         toast({
    //           title: "Success",
    //           description: "Logged in successfully",
    //         });

    //         router.push("/admin");
    //       } else {
    //         console.log(callback?.error);
    //         toast({
    //           title: "Error",
    //           description: "Invalid Credentials",
    //           variant: "destructive",
    //         });
    //       }
    //     })
    //     .finally(() => setIsPending(false));
    // } catch (error) {
    //   setIsPending(true);
    //   toast({
    //     title: "Error",
    //     description: "Something went wrong. Try again later",
    //     variant: "destructive",
    //   });
    // }
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      School Name<b className="text-primary font-light"> *</b>
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
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Type<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a school type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="Private">Private</SelectItem>
                        <SelectItem value="international">
                          International
                        </SelectItem>
                        <SelectItem value="government-aid">
                          Government-aided
                        </SelectItem>
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
                    const formErrors = await validateFormData(["name", "type"]);
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Choose Country
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country..." />
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
              <FormField
                control={form.control}
                name="province_state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Province/State
                      <b className="text-primary font-light"> *</b>
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
                name="district_region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      District/Region
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Riviera High School" {...field} />
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
                    const formErrors = await validateFormData(["country", "province_state", "district_region"]);
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
          {activeStep === 3 && (
            <>
              <FormField
                control={form.control}
                name="contact_person"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Name
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
                name="contact_person_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Number
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="0788..." {...field} />
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
                    const formErrors = await validateFormData(["contact_person", "contact_person_number", "contact_person_email"]);
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
          {activeStep === 4 && (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      School Email
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
