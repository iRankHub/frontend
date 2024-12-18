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
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { updateStudentsProfile } from "@/core/users/users";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface AccountFormProps {
  user: UserProfile.AsObject;
}

const accountSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string(),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string(),
});

type Inputs = z.infer<typeof accountSchema>;

function AccountForm({ user }: AccountFormProps) {
  const [loading, setLoading] = useState(false);
  const { user: storeUser, updateUsername } = useUserStore((state) => state);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      role: "Student",
      dateOfBirth: user?.studentdetails?.dateofbirth
        ? new Date(user?.studentdetails?.dateofbirth)
        : new Date(),
      gender: user?.gender || "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setLoading(true);

    try {
      const [firstName, lastName] = data.name.split(" ");
      const formattedDate = data.dateOfBirth.toISOString().split("T")[0];

      const newProfile = {
        token: storeUser.token,
        userID: user.userid,
        firstName: firstName || "",
        lastName: lastName || "",
        gender: data.gender,
        email: data.email,
        grade: user.studentdetails?.grade,
        dateOfBirth: formattedDate,
        address: user.address,
        bio: user.bio,
        profilePicture: user.profilePicturePresignedUrl,
        phone: user.phone,
      };

      const response = await updateStudentsProfile(newProfile);
      updateUsername(data.name);
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name that will be displayed on your profile and
                    in emails.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      disabled
                      className="disabled:opacity-100"
                    />
                  </FormControl>
                  <FormDescription>
                    Your email address is used for notifications and sign-in.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="p-0"
                      align="start"
                      sideOffset={5}
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        captionLayout="dropdown-buttons"
                        fromYear={1950}
                        toYear={2024}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1950-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This is your gender and is only private to you.
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
              Update Account
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
