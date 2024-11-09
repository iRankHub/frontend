"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { twoFactorSchema } from "@/lib/validations/auth.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { verifyTwoFactor } from "@/core/authentication/auth";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthStateUser, Roles, useUserStore } from "@/stores/auth/auth.store";
import { getUserProfile } from "@/core/users/users";

type Inputs = z.infer<typeof twoFactorSchema>;

const TwoFactorStep2 = () => {
  const router = useRouter();
  const pathname = useSearchParams();
  const email = pathname.get("email");
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();
  const { login: authLogin } = useUserStore((state) => state);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(twoFactorSchema),
  });

  async function onSubmit(data: Inputs) {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Email not found. Please try again later",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });

      router.push("/auth/2fa");
      return;
    }
    try {
      setIsPending(true);
      await verifyTwoFactor({ email, otp: data.code })
        .then(async (res) => {
          if (res.success) {
            form.reset();
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

            if (res.status !== "pending") {
              const role = getRole(res.userrole);

              if (!role) {
                toast({
                  variant: "destructive",
                  title: "Error",
                  description: "Something went wrong. Please try again later",
                  action: (
                    <ToastAction
                      altText="Close"
                      className="bg-primary text-white"
                    >
                      Close
                    </ToastAction>
                  ),
                });
                return;
              }

              let picture = undefined;
              const userProfileResponse = await getUserProfile({
                userID: res.userid,
                token: res.token,
              });

              picture = userProfileResponse.profile?.profilePicturePresignedUrl;

              const user: AuthStateUser = {
                userId: res.userid,
                name: res.username,
                token: res.token,
                status: "idle",
                picture,
                requiredPasswordReset: res.requirePasswordReset,
                requireTwoFactor: res.requireTwoFactor,
              };

              authLogin(user, role);
              handleNavigationByRole(role);
            }
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

  const getRole = (role: string) => {
    switch (role) {
      case "admin":
        return Roles.ADMIN;
      case "student":
        return Roles.STUDENT;
      case "school":
        return Roles.SCHOOL;
      case "volunteer":
        return Roles.VOLUNTEER;
      default:
        return null;
    }
  };

  const handleNavigationByRole = (role: string) => {
    switch (role) {
      case "admin":
        router.push("/admin/dashboard");
        break;
      case "student":
        router.push("/students/dashboard");
        break;
      case "school":
        router.push("/schools/dashboard");
        break;
      case "volunteer":
        router.push("/volunteers/dashboard");
        break;
      default:
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
  };
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
