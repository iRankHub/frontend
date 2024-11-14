"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { StudentLoginFormData, studentLoginSchema } from "@/lib/validations/auth.schema";
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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { studentLogin } from "@/core/authentication/auth";
import { AuthStateUser, Roles, useUserStore } from "@/stores/auth/auth.store";
import { getUserProfile } from "@/core/users/users";

const LoginForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const { login: authLogin } = useUserStore((state) => state);

  // react-hook-form
  const form = useForm<StudentLoginFormData>({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: {
      email_or_id: "",
      password: "",
    },
  });

  async function onSubmit(data: StudentLoginFormData) {
    // Check if form is valid
    const isValid = form.formState.isValid;
    if (!isValid) {
      // Trigger validation on all fields
      await form.trigger();
      return;
    }

    try {
      await studentLogin({
        emailOrId: data.email_or_id,
        password: data.password,
      })
        .then(async (res) => {
          if (res.success) {
            form.reset();
            if (res.status !== "pending") {
              toast({
                variant: "success",
                title: "Success",
                description: res.message,
                action: (
                  <ToastAction
                    altText="Close"
                    className="bg-primary text-white"
                  >
                    Close
                  </ToastAction>
                ),
              });

              let picture = undefined;

              const userProfileResponse = await getUserProfile({
                userID: res.userid,
                token: res.token,
              });

              picture = userProfileResponse.profile?.profilePicturePresignedUrl;

              const role = Roles.STUDENT;
              const user: AuthStateUser = {
                userId: res.userid,
                name: res.username,
                token: res.token,
                status: "idle",
                picture,
                requiredPasswordReset: res.requirePasswordReset,
                requireTwoFactor: res.requireTwoFactor,
              };

              if (res.requireTwoFactor) {
                router.push("/auth/2fa");
              } else {
                authLogin(user, role);
                router.push("/students/dashboard");
              }
            } else {
              toast({
                variant: "success",
                title: "Success",
                description:
                  "Your account is pending approval. You will be notified once your account is approved.",
                action: (
                  <ToastAction
                    altText="Close"
                    className="bg-primary text-white"
                  >
                    Close
                  </ToastAction>
                ),
              });
            }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = form.getValues();
    await onSubmit(formData);
  };

  return (
    <Form {...form}>
      <form
        className="max-w-md w-full grid gap-4"
        onSubmit={handleSubmit}
        method="POST"
      >
        <FormField
          control={form.control}
          name="email_or_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darkBlue">
                Email or Student Id<b className="text-primary font-light"> *</b>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="emma@mail.com or STUD000001"
                  {...field}
                  autoComplete="username"
                  type="text"
                />
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
                <PasswordInput
                  placeholder="**********"
                  {...field}
                  autoComplete="current-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-1">
          <Link
            href="/auth/forgot-password"
            className="text-base font-light text-blue hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Button disabled={isPending} variant={"default"} size={"lg"}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
          <span className="sr-only">Continue</span>
        </Button>
        <div className="w-full flex flex-col justify-center gap-4 mt-4">
          <div className="flex items-center">
            <div className="w-full border-t border-darkBlue"></div>
            <div className="text-darkBlue text-base px-3 py-1">OR</div>
            <div className="w-full border-t border-darkBlue"></div>
          </div>
          <div className="flex items-center gap-1 justify-center">
            <span className="text-lg text-darkBlue">
              Don{"'"}t have an account?
            </span>
            <Link
              href="/auth/student/signup"
              className="text-lg text-blue hover:underline"
            >
              Signup
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
