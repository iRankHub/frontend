"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { twoFactorSchema } from "@/lib/validations/auth.schema";
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
import { forgotPassword, verifyTwoFactor } from "@/core/authentication/auth";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type Inputs = z.infer<typeof twoFactorSchema>;

const TwoFactorStep2 = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(twoFactorSchema),
  });

  async function onSubmit(data: Inputs) {
    try {
      setIsPending(true);
        // await verifyTwoFactor(data.code)
        //   .then((res) => {
        //     if (res.success) {
        //       form.reset();
        //       toast({
        //         variant: "success",
        //         title: "Success",
        //         description: "A password reset link has been sent to your email",
        //         action: (
        //           <ToastAction altText="Close" className="bg-primary text-white">
        //             Close
        //           </ToastAction>
        //         ),
        //       });
        //     } else {
        //       toast({
        //         variant: "destructive",
        //         title: "Error",
        //         description: "Something went wrong. Please try again later",
        //         action: (
        //           <ToastAction altText="Close" className="bg-primary text-white">
        //             Close
        //           </ToastAction>
        //         ),
        //       });
        //     }
        //   })
        //   .catch((err) => {
        //     toast({
        //       variant: "destructive",
        //       title: "Error",
        //       description:
        //         "Something went wrong. Please try again later or contact support",
        //       action: (
        //         <ToastAction altText="Close" className="bg-primary text-white">
        //           Close
        //         </ToastAction>
        //       ),
        //     });
        //   })
        //   .finally(() => {
        //     setIsPending(false);
        //   });
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
          name="code"
          render={({ field }) => (
            <FormItem className="grid place-content-center">
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
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
            Verify OTP
            <span className="sr-only">Verify OTP</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TwoFactorStep2;
