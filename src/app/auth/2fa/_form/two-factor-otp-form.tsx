"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { forgotPasswordSchema } from "@/lib/validations/auth.schema";
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
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  forgotPassword,
  generateTwoFactorOTP,
} from "@/core/authentication/auth";

type Inputs = z.infer<typeof forgotPasswordSchema>;

const TwoFactorOTPForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onSubmit(data: Inputs) {
    try {
      setIsPending(true);
      await generateTwoFactorOTP({ email: data.email })
        .then((res) => {
          if (res.success) {
            form.reset();
            toast({
              variant: "success",
              title: "Success",
              description:
                "A one-time verification code has been sent to your email",
              action: (
                <ToastAction altText="Close" className="bg-primary text-white">
                  Close
                </ToastAction>
              ),
            });
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
          console.error("Error:", err);
          toast({
            variant: "destructive",
            title: "Error",
            description:
              "Something went wrong. Please try again later or contact support",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darkBlue">
                Email<b className="text-primary font-light"> *</b>
              </FormLabel>
              <FormControl>
                <Input placeholder="mark.coulibally@gmail.com" {...field} />
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

export default TwoFactorOTPForm;
