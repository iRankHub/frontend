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
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { updateSchoolProfile } from "@/core/users/users";

interface AccountFormProps {
  user: UserProfile.AsObject;
}

const schoolProfileSchema = z.object({
  schoolEmail: z.string().email("Invalid school email address"),
  contactPersonName: z.string().min(2, "Contact person name must be at least 2 characters"),
  contactEmail: z.string().email("Invalid contact email address"),
  phone: z.string().min(6, "Phone number must be at least 6 characters"),
});

type Inputs = z.infer<typeof schoolProfileSchema>;

function AccountForm({ user }: AccountFormProps) {
  const [loading, setLoading] = useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchema),
    defaultValues: {
      schoolEmail: user?.email || "",
      contactPersonName: user?.name || "",
      contactEmail: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setLoading(true);

    try {
      const newProfile = {
        token: storeUser.token,
        userID: user.userid,
        schoolEmail: data.schoolEmail,
        contactPersonName: data.contactPersonName,
        contactEmail: data.contactEmail,
        phone: data.phone,
        address: user.address,
        bio: user.bio,
        gender: user.gender,
        profilePicture: user.profilePicturePresignedUrl,
        schoolName: user.schooldetails?.schoolname,
        schoolType: user.schooldetails?.schooltype,
        contactPersonNationalId: "1234567890",
      };

      const response = await updateSchoolProfile(newProfile);

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
        <h3 className="text-xl text-white">Account</h3>
      </div>
      <div className="w-full bg-background px-5 md:px-20 py-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="schoolEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="school@example.com" 
                      {...field} 
                      disabled
                      className="disabled:opacity-100"
                    />
                  </FormControl>
                  <FormDescription>
                    Your school{`'`}s official email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPersonName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact person's name" {...field} />
                  </FormControl>
                  <FormDescription>
                    The name of the person responsible for managing this account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input placeholder="contact@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Email address for the contact person.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Contact phone number for the school.
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

export default AccountForm;
