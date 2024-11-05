"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { emailLoginSchema } from "@/lib/validations/auth.schema";
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
import { AuthStateUser, Roles, useUserStore } from "@/stores/auth/auth.store";
import { adminLogin } from "@/core/authentication/auth";

type Inputs = z.infer<typeof emailLoginSchema>;

const LoginFormEmail = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const { login: authLogin } = useUserStore((state) => state);

  const form = useForm<Inputs>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {
    setIsPending(true);
    try {
      const res = await adminLogin({ 
        emailOrId: data.email.trim(), 
        password: data.password 
      });
      
      if (res.success) {
        form.reset();
        if (res.userrole === "admin") {
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

          const role = Roles.ADMIN;
          const user: AuthStateUser = {
            userId: res.userid,
            name: res.username,
            token: res.token,
            status: "idle",
            requiredPasswordReset: res.requirePasswordReset,
            requireTwoFactor: res.requireTwoFactor,
          };
          authLogin(user, role);
          router.push("/admin/dashboard");
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Access Denied. Please login as an admin",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darkBlue">
                Admin Email<b className="text-primary font-light"> *</b>
              </FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  autoComplete="email"
                  placeholder="ava.wright@gmail.com" 
                  {...field} 
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
                  autoComplete="current-password"
                  placeholder="**********" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
      </form>
    </Form>
  );
};

export default LoginFormEmail;