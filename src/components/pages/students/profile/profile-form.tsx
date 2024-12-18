"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { updateStudentsProfile } from "@/core/users/users";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import FileUpload from "../../admin/tournaments/create/file-upload";

interface ProfileFormProps {
  user: UserProfile.AsObject;
}

interface ImageType {
  previewUrl: string;
  url: string;
}

const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  bio: z.string().max(500, "Bio must be less than 500 characters"),
});

type Inputs = z.infer<typeof profileSchema>;

function ProfileForm({ user }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<ImageType | null>(null);
  const {
    user: storeUser,
    updateUsername,
    updateProfilePicture,
  } = useUserStore((state) => state);
  const { toast } = useToast();

  useEffect(() => {
    if (user.profilePicturePresignedUrl) {
      setProfileImage({
        previewUrl: user.profilePicturePresignedUrl,
        url: user.profilePicturePresignedUrl,
      });
    }
  }, [user]);

  const form = useForm<Inputs>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.name?.split(" ")[0] || "",
      lastName: user.name?.split(" ")[1] || "",
      bio: user.bio || "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;

    setLoading(true);
    try {
      const fullName = `${data.firstName} ${data.lastName}`.trim();

      const newProfile = {
        token: storeUser.token,
        userID: user.userid,
        firstName: data.firstName,
        lastName: data.lastName,
        bio: data.bio,
        profilePicture: profileImage?.url,
        address: user.address,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
        grade: user.studentdetails?.grade,
        dateOfBirth: user.studentdetails?.dateofbirth,
      };

      const response = await updateStudentsProfile(newProfile);

      updateUsername(fullName);
      updateProfilePicture(response.profilePicturePresignedUrl);

      toast({
        variant: "success",
        title: "Success",
        description: response.message,
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } catch (error) {
      console.log(error);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-5 md:px-20 py-4 bg-brown">
        <h3 className="text-xl text-white">Profile</h3>
      </div>
      <div className="w-full bg-background px-5 md:px-20 py-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="w-full flex items-center gap-10">
              <div className="w-24 h-24 rounded-full relative cursor-pointer">
                <Image
                  src={
                    profileImage?.previewUrl || "/static/images/mic-speech.jpg"
                  }
                  alt={user.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
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
                        {profileImage ? "Image selected" : "No file selected"}
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <FileUpload
                      setTournamentImage={setProfileImage}
                      folderType="profile"
                    />
                  </DialogContent>
                </Dialog>
                <p className="text-sm text-muted-foreground font-medium">
                  Add a nice photo of yourself for your profile.
                </p>
              </div>
            </div>

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Brief description about yourself
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="sm"
              className="max-w-36 md:w-auto"
              disabled={loading}
            >
              Update Profile
              {loading && (
                <Icons.spinner
                  className="ml-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ProfileForm;
