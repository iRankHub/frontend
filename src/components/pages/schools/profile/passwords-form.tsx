"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { PasswordInput } from "@/components/ui/password-Input";
import { Separator } from "@/components/ui/separator";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { initiatePasswordReset, updatePassword } from "@/core/users/users";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { passwordResetSchema } from "@/lib/validations/admin/accounts";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PasswordsFormProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof passwordResetSchema>;

function PasswordsForm({ user }: PasswordsFormProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();
  const [passwordResetStep, setPasswordResetStep] = React.useState(1);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(passwordResetSchema),
  });

  const initiatePasswordResetStep1 = async () => {
    if (!storeUser) return;
    const passwordInitiation: {
      token: string;
      userID: number;
    } = {
      token: storeUser.token,
      userID: storeUser.userId,
    };

    await initiatePasswordReset(passwordInitiation)
      .then((res) => {
        setPasswordResetStep(2);
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
        setDialogOpen(false);
      });
  };

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setIsPending(true);

    const passwordInitiation: {
      token: string;
      userID: number;
      verificationCode: string;
      password: string;
    } = {
      token: storeUser.token,
      userID: storeUser.userId,
      verificationCode: data.code,
      password: data.password,
    };

    await updatePassword(passwordInitiation)
      .then((res) => {
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
        setDialogOpen(false);
      });
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-white">Passwords</h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        <div className="w-full leading-6 my-10">
          <h3 className="text-base font-semibold text-foreground">
            Change your password
          </h3>
          <span className="text-sm font-medium text-muted-foreground">
            Update your password settings. Set your preferred password.
          </span>
          <Separator className="my-4" />
        </div>
        {passwordResetStep === 1 ? (
          <Button
            type="button"
            variant="default"
            onClick={initiatePasswordResetStep1}
          >
            Initiate Password Reset
          </Button>
        ) : (
          <Form {...form}>
            <form
              onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="grid place-content-center">
                    <FormLabel>
                      Enter the 6-digit code sent to your email
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Password
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      This is your current password and must comply with our
                      security standards
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Re-type Password
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      Verify if you typed the same password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger className="max-w-52 w-full h-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                  Update Profile
                  {isPending && (
                    <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                  )}
                  <span className="sr-only">Update Profile</span>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="font-semibold">
                    Are you absolutely sure?
                  </DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently Update
                    your password. If you forget your password, you{"`"}ll need
                    to reset
                  </DialogDescription>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                      <span className="sr-only">Cancel</span>
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      onClick={() => {
                        form.trigger();
                        if (form.formState.isValid) {
                          onSubmit(form.getValues() as Inputs);
                        }
                      }}
                    >
                      Update
                      {isPending && (
                        <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                      )}
                      <span className="sr-only">Update</span>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}

export default PasswordsForm;
