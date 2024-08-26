"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
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
import { PasswordInput } from "@/components/ui/password-Input";
import { Separator } from "@/components/ui/separator";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { getUserDetails } from "@/core/users/users";
import { UserDetails } from "@/lib/grpc/proto/user_management/users_pb";
import { schoolProfileSchemaStep3 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof schoolProfileSchemaStep3>;

function PasswordsForm() {
  const { toast } = useToast();
  const { user: storeUser } = useUserStore((state) => state);
  const [isPending, setIsPending] = React.useState(false);
  const [user, setUser] = React.useState<UserDetails.AsObject | null>(null);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchemaStep3),
  });

  const onSubmit = (data: Inputs) => {
    // setIsPending(true);
    // await signUp({
    //   firstName: data.contact_person_firstname,
    //   lastName: data.contact_person_lastname,
    //   address: data.address,
    //   email: data.email,
    //   password: data.password,
    //   userRole: UserRole.SCHOOL,
    //   schoolName: data.name,
    //   country: data.country,
    //   province: data.province_state,
    //   district: data.district_region,
    //   contactEmail: data.contact_person_email,
    //   schoolType: data.type,
    // })
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
    //     form.reset();
    //     router.push("/auth/school/login");
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
    //   });
  };

  useEffect(() => {
    if (!storeUser) return;
    const getUser = async () => {
      await getUserDetails({
        userID: storeUser.userId,
        token: storeUser.token,
      }).then((res) => {
        if (res.user) {
          setUser(res.user);
        }
      });
    };
    getUser().catch((err) => {
      toast({
        variant: "success",
        title: "Success",
        description: "Tournament created successfully",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    });
  }, [storeUser, toast]);

  if (!user) {
    return (
      <div className="grid place-content-center mt-auto h-full">loading...</div>
    );
  }
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

            <Dialog>
              <DialogTrigger
                type="button"
                className="max-w-52 w-full h-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Update Profile
                {isPending && (
                  <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                )}
                <span className="sr-only">Update Profile</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="font-semibold">Are you absolutely sure?</DialogHeader>
                <DialogDescription>
                  This action cannot be undone. This will permanently Update
                  your password. If you forget your password, you{"`"}ll need to
                  reset
                </DialogDescription>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Cancel
                    <span className="sr-only">Cancel</span>
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
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
