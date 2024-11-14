"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { SchoolLoginFormData, schoolLoginSchema } from "@/lib/validations/auth.schema";
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
import { AuthStateUser, Roles, useUserStore } from "@/stores/auth/auth.store";
import { schoolLogin } from "@/core/authentication/auth";
import { getUserProfile } from "@/core/users/users";

const LoginForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const { login: authLogin } = useUserStore((state) => state);

  const form = useForm<SchoolLoginFormData>({
    resolver: zodResolver(schoolLoginSchema),
    defaultValues: {
      email_or_id: "",
      password: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(data: SchoolLoginFormData) {
    // Check if form is valid
    const isValid = form.formState.isValid;
    if (!isValid) {
      // Trigger validation on all fields
      await form.trigger();
      return;
    }

    setIsPending(true);

    try {
      const res = await schoolLogin({ 
        emailOrId: data.email_or_id.trim(), 
        password: data.password 
      });

      if (res.success) {
        form.reset();
        if (res.status !== "pending") {
          toast({
            variant: "success",
            title: "Success",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
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

          const role = Roles.SCHOOL;
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
            router.push("/schools/dashboard");
          }
        } else {
          toast({
            variant: "success",
            title: "Success",
            description:
              "Your account is pending approval. You will be notified once your account is approved.",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
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
    } catch (err) {
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
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="max-w-md w-full grid gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          control={form.control}
          name="email_or_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darkBlue">
                Email or School ID<b className="text-primary font-light"> *</b>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="example@email.com or XXX-XX-XX-XX-00000" 
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
        <div className="mt-2 flex items-center justify-end gap-1">
          <Link
            href="/auth/forgot-password"
            className="text-base font-light text-blue hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Button 
          type="submit"
          disabled={isPending} 
          variant={"default"} 
          size={"lg"}
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
              href="/auth/school/signup"
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
