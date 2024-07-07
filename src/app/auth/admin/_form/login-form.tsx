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

interface LoginFormProps {
  handleChange: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleChange }) => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {
    toast({
      variant: "success",
      title: "Success Message",
      description: "Success Description",
      action: <ToastAction altText="Close" className="bg-primary text-white">Close</ToastAction>,
    })
  }

  return (
    <Form {...form}>
      <form
        className="max-w-md w-full grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darkBlue">
                Admin Id<b className="text-primary font-light"> *</b>
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
        <div className=" mt-2 flex items-center justify-end gap-1">
          <Link
            href="/"
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

          <Button
            type="button"
            variant={"ghost"}
            size={"lg"}
            className="text-darkBlue bg-[#F3F9FA] hover:bg-[#F3F9FA]"
            onClick={handleChange}
          >
            <Icons.mail className="h-4 w-4 mx-4" aria-hidden="true" />
            Sign in with Email
          </Button>
          <div className="flex items-center gap-1 justify-center">
            <span className="text-lg text-darkBlue">Don{"'"}t have an account?</span>
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
