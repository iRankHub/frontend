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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  updateVolunteerProfile,
} from "@/core/users/users";
import {
  School,
  UserProfile,
} from "@/lib/grpc/proto/user_management/users_pb";
import { volunteerProfileSchemaStep1 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { UpdateVolunteerProfile } from "@/types/user_management/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";
import FileUpload from "../tournaments/tournament-name/file-upload";
import { splitName } from "@/utils/split-name";
import { getSchoolsNoAuth } from "@/core/users/schools";

interface ProfileFormProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof volunteerProfileSchemaStep1>;

function ProfileForm({ user }: ProfileFormProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();
  const [schools, setSchools] = React.useState<School.AsObject[]>([]);

  React.useEffect(() => {
    getSchoolsNoAuth({
      pageSize: 200,
      page: 1,
    })
      .then((res) => {
        setSchools(res.schoolsList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(volunteerProfileSchemaStep1),
    defaultValues: {
      first_name: splitName(user?.name).first_name,
      last_name: splitName(user?.name).last_name,
      school_id: String(1),
      graduation_year: String(user?.volunteerdetails?.graduateyear),
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setIsPending(true);

    const NewProfile: UpdateVolunteerProfile = {
      token: storeUser.token,
      userID: user.userid,
      email: user.email,
      phone: user.phone,
      address: user.address,
      bio: user.bio,
      gender: user.gender,
      profilePicture: user.profilepicture,
      firstName: data.first_name,
      lastName: data.last_name,
      graduateYear: Number(data.graduation_year),
      hasInternship: user.volunteerdetails?.hasinternship || false,
      isEnrolledInUniversity: user.volunteerdetails?.isenrolledinuniversity || false,
      nationalID: 1234567899,
      role: user.volunteerdetails?.role,
    };

    await updateVolunteerProfile(NewProfile)
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

        // force page to reload
        window.location.reload();
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
        {user && (
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
                name="first_name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </FormDescription>
                    <FormMessage className="font-bold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </FormDescription>
                    <FormMessage className="font-bold" />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="school_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Choose School
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select school..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem
                            value={String(school.schoolid)}
                            key={school.schoolid}
                          >
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-sm text-muted-foreground">
                      Your school will change , after verification from the
                      school.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="graduation_year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Graduation Year
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a year..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-sm text-muted-foreground">
                      Choose and change your graduation year
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
        )}
      </div>
    </div>
  );
}

export default ProfileForm;
