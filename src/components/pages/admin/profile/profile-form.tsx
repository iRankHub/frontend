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
import { getUserProfile } from "@/core/users/users";
import { countries } from "@/lib/data";
import { Districts, Provinces } from "@/lib/get-provinces-and-districts";
import {
  SchoolDetails,
  UserProfile,
} from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import { adminProfile, schoolProfileSchemaStep1 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, CheckIcon, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FileUpload from "../users/file-upload";

type Inputs = z.infer<typeof adminProfile>;

function ProfileForm() {
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
    resolver: zodResolver(adminProfile),
    defaultValues: {
      username: user?.name || "",
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

  const handleUserProfile = (): string => {
    // check if user is not null and if the userProfile is not of type Uint8Array
    if (user.profilepicture instanceof Uint8Array) {
      // convert the Uint8Array to a string
      const blob = new Blob([user.profilepicture]);
      const url = URL.createObjectURL(blob);

      return url;
    }

    return user.profilepicture;
  };
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-background">Profile</h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        <Form {...form}>
          <form
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            className="flex flex-col gap-4"
          >
            <div className="w-full flex items-center gap-10">
              <div className="w-24 h-24 rounded-full relative cursor-pointer">
                <Image
                  src={
                    handleUserProfile().length > 0
                      ? handleUserProfile()
                      : "https://res.cloudinary.com/dmgv5azym/image/upload/v1701979624/jp5kql33vh3he0qsjnd7.jpg"
                  }
                  alt={user.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute bottom-3 right-4">
                  <Camera className="w-5 h-5 text-background dark:text-foreground" />
                </div>
              </div>
              <div>
                <h4>Picture</h4>
                <Dialog>
                  <DialogTrigger>
                    <div className="border px-3 py-2 border-border rounded-md my-1 flex items-center gap-3">
                      <h3 className="text-primary text-sm font-medium">
                        Choose file
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        No file selected
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Add a nice photo of yourself for your profile.
                    </p>
                  </DialogTrigger>
                  <FileUpload />
                </Dialog>
              </div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User name"
                      value={field.value}
                      onChange={field.onChange}
                      className="disabled:opacity-100"
                      disabled
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ProfileForm;
