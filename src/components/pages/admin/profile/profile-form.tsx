"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
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
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import FileUpload from "../tournaments/create/file-upload";
import { updateAdminProfile } from "@/core/users/users";
import { useUserStore } from "@/stores/auth/auth.store";
import { ToastAction } from "@/components/ui/toast";
import { Icons } from "@/components/icons";

// Define the schema for the form
const profileSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
});

type ProfileFormInputs = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  user: UserProfile.AsObject;
}

interface ImageType {
  previewUrl: string;
  url: string;
}

function ProfileForm({ user }: ProfileFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { user: authUser, updateUsername } = useUserStore((state) => state);
  const [profileImage, setProfileImage] = useState<ImageType | null>(
    user.profilePicturePresignedUrl
      ? {
          previewUrl: user.profilePictureUrl,
          url: user.profilePictureUrl,
        }
      : null
  );

  const form = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user?.name || "",
    },
  });

  const onSubmit = async (data: ProfileFormInputs) => {
    try {
      if (!authUser) {
        return;
      }
      setLoading(true);
      const NewProfile = {
        token: authUser.token,
        userID: user.userid,
        name: data.username,
        gender: user.gender,
        address: user.address,
        bio: user.address,
        phone: user.phone,
        profilePicture: profileImage ? profileImage.url : undefined,
      };
      await updateAdminProfile(NewProfile)
        .then((res) => {
          updateUsername(data.username);
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
          setLoading(false);
        });
      toast({
        variant: "success",
        title: "Profile updated successfully",
        description: "Your profile information has been updated.",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } catch (error) {
      toast({
        title: "Error updating profile",
        description:
          "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-5 md:px-20 py-4 bg-brown">
        <h3 className="text-xl text-background">Profile</h3>
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
                  src={profileImage?.previewUrl || "/static/images/mic-speech.jpg"}
                  alt={user.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                {/* <div className="absolute bottom-3 right-4">
                  <Camera className="w-5 h-5 text-background dark:text-foreground" />
                </div> */}
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
              name="username"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="User name" {...field} />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size={"sm"}
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
