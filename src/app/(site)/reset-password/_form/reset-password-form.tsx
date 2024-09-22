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
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { resetPassword } from "@/core/authentication/auth";

type Inputs = z.infer<typeof resetPasswordSchema>;

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

  if (!token) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-10">
        <h3 className="text-3xl font-semibold text-foreground">
          Token Invalid.
        </h3>
        <p className="text-darkBlue text-lg my-3">
          The token provided is invalid or has expired. Please request a new
          one.
        </p>
        <Button
          variant="default"
          onClick={() => router.push("/auth/select")}
        >
          Request New Token
        </Button>
      </div>
    );
  }

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

  return (
    <Form {...form}>
      <form
        className="max-w-md w-full grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
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
              <FormLabel className="text-foreground">
                Confirm Password<b className="text-primary font-light"> *</b>
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
            type="button"
            variant={"secondary"}
            size={"lg"}
            className="w-full"
            onClick={() => router.push("/auth/select")}
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            disabled={isPending}
            variant={"default"}
            size={"lg"}
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
    </Form>
  );
};

export default ResetPasswordForm;
