"use client";

import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { updateSchoolProfile } from "@/core/users/users";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { UpdateSchoolProfile } from "@/types/user_management/users";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FileUpload from "../../admin/tournaments/create/file-upload";

interface ProfileFormProps {
  user: UserProfile.AsObject;
}

interface ImageType {
  previewUrl: string;
  url: string;
}

const schoolProfileSchema = z.object({
  name: z.string().min(2, "School name must be at least 2 characters"),
  country: z.string(),
  province_state: z.string(),
  district_region: z.string(),
  type: z.string(),
});

type Inputs = z.infer<typeof schoolProfileSchema>;

function ProfileForm({ user }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<ImageType | null>(null);
  const { user: storeUser, updateProfilePicture, updateUsername } = useUserStore((state) => state);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchema),
    defaultValues: {
      name: user?.schooldetails?.schoolname || "",
      country: user?.schooldetails?.country || "",
      province_state: user?.schooldetails?.province || "",
      district_region: user?.schooldetails?.district || "",
      type: user?.schooldetails?.schooltype || "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setLoading(true);

    try {
      const newProfile: UpdateSchoolProfile = {
        token: storeUser.token,
        userID: user.userid,
        schoolType: data.type,
        schoolName: data.name,
        profilePicture: profileImage ? profileImage.url : undefined,
      };

      const response = await updateSchoolProfile(newProfile);
      updateUsername(data.name);
      updateProfilePicture(response.profilePicturePresignedUrl)

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
      console.error(error);
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="w-full flex items-center gap-10">
              <div className="w-24 h-24 rounded-full relative cursor-pointer">
                <Image
                  src={profileImage?.previewUrl || user.profilePicturePresignedUrl || "/static/images/mic-speech.jpg"}
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School name</FormLabel>
                  <FormControl>
                    <Input placeholder="School name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your school{`'`}s display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Country" 
                      {...field} 
                      disabled
                      className="disabled:opacity-100 text-foreground"
                    />
                  </FormControl>
                  <FormDescription>
                    Your school{`'`}s country location
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="province_state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province/State</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Province/State" 
                      {...field} 
                      disabled
                      className="disabled:opacity-100 text-foreground"
                    />
                  </FormControl>
                  <FormDescription>
                    Your school{`'`}s province or state
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="district_region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District/Region</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="District/Region" 
                      {...field} 
                      disabled
                      className="disabled:opacity-100 text-foreground"
                    />
                  </FormControl>
                  <FormDescription>
                    Your school{`'`}s district or region
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a school type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Public">Public</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                      <SelectItem value="International">International</SelectItem>
                      <SelectItem value="Government Aided">Government-aided</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The type of your educational institution
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="max-w-36 md:w-auto"
              disabled={loading}
            >
              Update Profile
              {loading && (
                <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ProfileForm;
