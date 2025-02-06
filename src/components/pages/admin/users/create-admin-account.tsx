import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-Input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { signUp } from "@/core/authentication/auth";
import { adminSchema } from "@/lib/validations/admin/accounts";
import { UserRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | "admin" | null;
  setSheetOpen: Dispatch<SetStateAction<boolean>>;
}

type Inputs = z.infer<typeof adminSchema>;

function CreateAdminAccount({ type, setSheetOpen }: CreateUserProps) {
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(adminSchema),
  });

  async function onSubmit(data: Inputs) {
    setIsPending(true);

    await signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      userRole: UserRole.ADMIN,
      gender: data.gender,
    })
      .then(() => {
        form.reset();
        setSheetOpen(false);
        toast({
          variant: "success",
          title: "Success",
          description: "Admin account created successfully",
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
      });
  }
  return (
    <ScrollArea className="p-5 h-full pb-20">
      <div className="w-full mb-3">
        <h3 className="text-foreground font-bold text-lg">Create an account</h3>
        <span className="text-sm text-muted-foreground">
          Enter into the below fields to create an account
        </span>
      </div>
      <Form {...form}>
        <form
          className="max-w-md w-full grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  First Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Iman" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Last Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Koulibally" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Email<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="we-koulibally@mail.com" {...field} />
                </FormControl>
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
                    <SelectTrigger>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Confirm Password<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} variant={"default"} size={"lg"}>
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Create Account
            <span className="sr-only">Create Account</span>
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}

export default CreateAdminAccount;
