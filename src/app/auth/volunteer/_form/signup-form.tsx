"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { loginSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type Inputs = z.infer<typeof loginSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(3);
  const steps = [1, 2, 3, 4];

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
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
            <div className="w-3 h-3 bg-green rounded-full" />
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
    router.push("auth/student/login");
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
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darkBlue">
                      Student Id<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="ST-01334" {...field} />
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
                    <FormLabel className="text-darkBlue">
                      Password<b className="text-primary font-light"> *</b>
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
                  onClick={() => activeStep < 4 && setActiveStep(activeStep + 1)}
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
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
