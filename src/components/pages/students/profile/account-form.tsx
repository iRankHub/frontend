"use client";
import React from "react";
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
import { Input } from "@/components/ui/input";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { schoolProfileSchemaStep2 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { UpdateUserProfile } from "@/types/user_management/users";
import { UserRole } from "@/types";

interface AccountFormProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof schoolProfileSchemaStep2>;

function AccountForm({ user }: AccountFormProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchemaStep2),
    defaultValues: {
      email: user?.email,
      contact_person: user?.name,
      contact_person_email: user?.email,
      contact_person_number: user?.phone,
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setIsPending(true);

    const NewProfile: UpdateUserProfile = {
      name: data.contact_person,
      address: user.address,
      bio: user.bio,
      email: data.contact_person_email,
      phone: data.contact_person_number,
      profilePicture: user.profilePicturePresignedUrl,
      token: storeUser.token,
      userID: user.userid,
      gender: user.gender,
      role: UserRole.SCHOOL,
    };

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
        <h3 className="text-xl text-background">Account</h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        <Form {...form}>
          <form
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>School Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="school name"
                      className=""
                      value={field.value}
                      disabled
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is the email of the contact person name
                  </FormDescription>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_person"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Contact Person Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="School contact person name"
                      className=""
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is the name that will be displayed on your profile and
                    in emails.
                  </FormDescription>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_person_email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Contact Person Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter School contact person email"
                      className=""
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is the email of the contact person name
                  </FormDescription>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_person_number"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Contact phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter contact phone’s number"
                      className=""
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is the email of the contact person name
                  </FormDescription>
                  <FormMessage className="font-bold" />
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
                  This action cannot be undone. This will permanently update
                  your profile.
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

export default AccountForm;
