"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { updateUserProfile } from "@/core/users/users";
import { countries } from "@/lib/data";
import { Districts, Provinces } from "@/lib/get-provinces-and-districts";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import {
  schoolProfileSchemaStep1,
  twoFactorEnableSchema,
} from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { UserRole } from "@/types";
import { UpdateUserProfile } from "@/types/user_management/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, CheckIcon, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FileUpload from "../tournaments/tournament-name/file-upload";
import { PasswordInput } from "@/components/ui/password-Input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { handleTwoFactor } from "@/core/authentication/auth";

interface TwoFactorProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof twoFactorEnableSchema>;

function TwoFactor({ user }: TwoFactorProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = React.useState(
    user.twofactorenabled
  );
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(twoFactorEnableSchema),
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setIsPending(true);

    const req = {
      userID: user.userid,
      token: storeUser.token,
      disable: !isTwoFactorEnabled,
    };

    await handleTwoFactor(req)
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
        setIsTwoFactorEnabled(!isTwoFactorEnabled);
      })
      .catch(() => {
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
        <h3 className="text-xl text-background">Two Factor Authentication</h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        {user && (
          <div className="flex flex-col">
            <div className="w-full mt-5">
              <h3 className="text-sm">Two-Factor Authentication</h3>
              <span className="text-sm text-muted-foreground">
                Two-factor authentication adds an extra layer of security to
                your account. Once enabled, you will be required to enter a
                verification code sent to your email address when you sign in.
              </span>
            </div>
            <Separator className="my-10" />
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <h3 className="text-sm mb-2">Enable Two-Factor Authentication</h3>
              <DialogTrigger className="max-w-md flex items-center gap-3 text-sm text-muted-foreground">
                Switch to enable
                <Switch
                  size="small"
                  checked={isTwoFactorEnabled}
                  onCheckedChange={() => null}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="font-semibold">{isTwoFactorEnabled ? "Disable" : "Enable"} 2FA</DialogTitle>
                <DialogDescription>
                  Enter you password to confirm you want to enable two-factor
                  Authentication
                </DialogDescription>
                <Form {...form}>
                  <form
                    onSubmit={(...args) =>
                      void form.handleSubmit(onSubmit)(...args)
                    }
                  >
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <PasswordInput
                              placeholder="**********"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-sm text-muted-foreground">
                            This is your current password and must comply with
                            our security standards
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter className="mt-4">
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
                        {isTwoFactorEnabled ? "Disable" : "Enable"} 2FA
                        {isPending && (
                          <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                        )}
                        <span className="sr-only">{isTwoFactorEnabled ? "Disable" : "Enable"} 2FA</span>
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoFactor;
