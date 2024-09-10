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
import { PasswordInput } from "@/components/ui/password-Input";
import { Separator } from "@/components/ui/separator";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { schoolProfileSchemaStep3 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { UserRole } from "@/types";
import { UpdateUserProfile } from "@/types/user_management/users";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PasswordsFormProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof schoolProfileSchemaStep3>;

function PasswordsForm({ user }: PasswordsFormProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchemaStep3),
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    // setIsPending(true);

    // const NewProfile: UpdateUserProfile = {
    //   name: user.name,
    //   address: user.address,
    //   bio: user.bio,
    //   email: user.email,
    //   phone: user.phone,
    //   profilePicture: user.profilepicture,
    //   token: storeUser.token,
    //   userID: user.userid,
    //   gender: user.gender,
    //   password: data.new_password,
    // };

    // await updateUserProfile(NewProfile)
    //   .then((res) => {
    //     toast({
    //       variant: "success",
    //       title: "Success",
    //       description: res.message,
    //       action: (
    //         <ToastAction altText="Close" className="bg-primary text-white">
    //           Close
    //         </ToastAction>
    //       ),
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     toast({
    //       variant: "destructive",
    //       title: "Error",
    //       description:
    //         "Something went wrong. Please check your credentials and try again later",
    //       action: (
    //         <ToastAction altText="Close" className="bg-primary text-white">
    //           Close
    //         </ToastAction>
    //       ),
    //     });
    //   })
    //   .finally(() => {
    //     setIsPending(false);
    //     setDialogOpen(false);
    //   });
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-background">Passwords</h3>
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
        <Form {...form}>
          <form
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            className="flex flex-col gap-4"
          >
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
              name="new_password"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="**********" {...field} />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    Set up the new password
                  </FormDescription>
                  <FormMessage className="font-bold" />
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
                  your password. If you forget your password, you{"`"}ll need to
                  reset
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
      </div>
    </div>
  );
}

export default PasswordsForm;