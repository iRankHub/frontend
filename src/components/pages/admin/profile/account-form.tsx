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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { getUserProfile } from "@/core/users/users";
import { countries } from "@/lib/data";
import { Districts, Provinces } from "@/lib/get-provinces-and-districts";
import {
  SchoolDetails,
  UserProfile,
} from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import { schoolProfileSchemaStep2 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof schoolProfileSchemaStep2>;

function AccountForm() {
  const { toast } = useToast();
  const { user: storeUser } = useUserStore((state) => state);
  const [isPending, setIsPending] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const [provinces, setProvinces] = React.useState<string[]>(Provinces());
  const [districts, setDisctricts] = React.useState<string[]>(Districts());
  const [school, setSchool] = React.useState<SchoolDetails.AsObject | null>(
    null
  );
  const [user, setUser] = React.useState<UserProfile.AsObject | null>(null);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchemaStep2),
    defaultValues: {
      email: "testuser@mail.com",
      contact_person: "testuser",
      contact_person_email: "testuser@gmail.com",
      contact_person_number: "1234567890",
    },
  });

  const onSubmit = (data: Inputs) => {
    setIsPending(true);

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
      await getUserProfile({
        userID: storeUser.userId,
        token: storeUser.token,
      }).then((res) => {
        if (res.profile) {
          setUser(res.profile);
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
                <DialogHeader className="font-semibold">
                  Are you absolutely sure?
                </DialogHeader>
                <DialogDescription>
                  This action cannot be undone. This will permanently Update
                  your account .
                </DialogDescription>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Cancel
                    <span className="sr-only">Cancel</span>
                  </Button>
                  <Button type="submit" variant="default">
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
