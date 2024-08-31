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
import {
  schoolProfileSchemaStep2,
  volunteerProfileSchemaStep2,
} from "@/lib/validations/admin/accounts/profile-update.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { UpdateUserProfile } from "@/types/user_management/users";
import { UserRole } from "@/types";
import { updateUserProfile } from "@/core/users/users";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface AccountFormProps {
  user: UserProfile.AsObject;
}

type Inputs = z.infer<typeof volunteerProfileSchemaStep2>;

function AccountForm({ user }: AccountFormProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { user: storeUser } = useUserStore((state) => state);
  const { toast } = useToast();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(volunteerProfileSchemaStep2),
    defaultValues: {
      email: user?.email,
      name: user?.name,
      national_id: "",
      hasInternship: user.volunteerdetails?.hasinternship ? "yes" : "no",
      dob: new Date(),
      gender: user.gender,
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (!storeUser) return;
    setIsPending(true);

    const NewProfile: UpdateUserProfile = {
      name: user.name,
      email: user.email,
      token: storeUser.token,
      userID: user.userid,
      gender: data.gender,
      volunteerDetails: {
        hasinternship: data.hasInternship === "yes",
        role: String(user.volunteerdetails?.role),
        safeguardcertificate: user.volunteerdetails?.safeguardcertificate || "",
        graduateyear: Number(user.volunteerdetails?.graduateyear),
        isenrolledinuniversity: Boolean(user.volunteerdetails?.isenrolledinuniversity),
      },
      role: UserRole.VOLUNTEER,
    };

    await updateUserProfile(NewProfile)
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
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your username"
                      value={field.value}
                      onChange={field.onChange}
                      className="disabled:opacity-100"
                      disabled
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
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="school name"
                      className="disabled:opacity-100"
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
              name="national_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    National Id/Passport
                    <b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="12000..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hasInternship"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>
                    Internship
                    <b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormDescription className="text-sm text-muted-foreground">
                    Are you doing any internship ?
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col justify-start gap-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild className="max-w-xs w-full">
                      <FormControl className="w-full overflow-hidden">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-center break-words overflow-hidden font-normal",
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
                  <FormLabel>
                    Gender<b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="max-w-xs w-full">
                        <SelectValue placeholder="Select a gender..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
      </div>
    </div>
  );
}

export default AccountForm;
