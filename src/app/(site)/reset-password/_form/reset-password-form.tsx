"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { resetPasswordSchema } from "@/lib/validations/auth.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { resetPassword } from "@/core/authentication/auth";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";

type Inputs = z.infer<typeof resetPasswordSchema>;

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
});

const ResetPasswordForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const token = searchParams.get("token");

  async function onSubmit(data: Inputs) {
    if (!token) return;
    try {
      if (data.password !== data.confirm_password) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords do not match. Please try again",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        return;
      }
      setIsPending(true);
      await resetPassword({ token, password: data.confirm_password })
        .then((res) => {
          if (res.success) {
            form.reset();
            toast({
              variant: "success",
              title: "Success",
              description: "Password reset successful. You can now login",
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
            router.push("/auth/select");
          } else {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Something went wrong. Please try again later",
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
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Fail Message",
        description: "Something went wrong. Check your credentials",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    }
  }

  if (!token) {
    return (
      <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
          Token Invalid
        </h3>
        <p className="text-darkBlue text-center text-base md:text-lg my-3 max-w-sm">
          The token provided is invalid or has expired. Please request a new one.
        </p>
        <Button
          variant="default"
          onClick={() => router.push("/auth/select")}
          className="mt-4"
        >
          Request New Token
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className="relative w-40 h-40 md:w-60 md:h-60 mb-6">
          <Image
            src="/static/images/logo-big.png"
            alt="IDebate Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 mb-5 w-full">
          <h3 className="font-semibold text-[#0C1421] text-lg md:text-xl text-center lg:text-left">
            🔏 Set New Password
          </h3>
          <p className={cn("text-sm md:text-base text-darkBlue text-center lg:text-left", rubik)}>
            Enter your new password below to regain access to your account.
          </p>
        </div>

        <form
          className="w-full max-w-sm lg:max-w-md space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">
                  New Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="**********"
                    {...field}
                    className="w-full"
                  />
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
                <FormLabel className="text-foreground">
                  Confirm Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="**********"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 pt-2">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => router.push("/auth/select")}
            >
              Cancel
              <span className="sr-only">Cancel</span>
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              variant="default"
              size="lg"
              className="w-full hover:bg-primary"
            >
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Continue
              <span className="sr-only">Continue</span>
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
