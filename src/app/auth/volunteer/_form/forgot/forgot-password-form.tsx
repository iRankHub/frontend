import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { forgotPasswordSchema } from "@/lib/validations/auth.schema";
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
import { Icons } from "@/components/icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { forgotPassword } from "@/core/authentication/auth";

type Inputs = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = React.useCallback(async (data: Inputs) => {
    if (isPending) return;

    try {
      setIsPending(true);

      const res = await forgotPassword(data.email);

      if (res.success) {
        form.reset({ email: "" });
        toast({
          variant: "success",
          title: "Success",
          description: "A password reset link has been sent to your email",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white hover:bg-primary/90">
              Close
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again later",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white hover:bg-primary/90">
              Close
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      alert(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later or contact support" + " " + error,
        action: (
          <ToastAction altText="Close" className="bg-primary text-white hover:bg-primary/90">
            Close
          </ToastAction>
        ),
      });
    } finally {
      setIsPending(false);
    }
  }, [form, isPending, toast]);

  return (
    <Form {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-darkBlue text-sm font-medium">
                Email<b className="text-primary font-medium ml-0.5">*</b>
              </FormLabel>
              <FormDescription className="text-sm text-gray-500">
                You&apos;ll receive a link to reset your password
              </FormDescription>
              <FormControl>
                <Input
                  type="email"
                  placeholder="mark.coulibally@gmail.com"
                  className="h-11 px-4 rounded-md border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="w-full h-11 text-sm font-medium transition-colors hover:bg-gray-100"
            onClick={() => router.push("/auth/select")}
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            variant="default"
            size="lg"
            className="w-full h-11 text-sm font-medium bg-primary text-white transition-colors hover:bg-primary/90 disabled:bg-primary/70"
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Continue
            <span className="sr-only">Continue</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
