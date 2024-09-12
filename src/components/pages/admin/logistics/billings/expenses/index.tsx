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
import { z } from "zod";
import { expensesSchema } from "@/lib/validations/admin/logistics/expenses.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

type Inputs = z.infer<typeof expensesSchema>;

function Expenses({}: Props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const form = useForm<Inputs>({
    resolver: zodResolver(expensesSchema),
  });

  const onSubmit = async (values: Inputs) => {};
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
              name="food"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>food</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the amount for food"
                      value={field.value}
                      onChange={field.onChange}
                      className="disabled:opacity-100"
                      disabled
                    />
                  </FormControl>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transport"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Transport</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Amount used for transport"
                      className="disabled:opacity-100"
                      value={field.value}
                      disabled
                    />
                  </FormControl>
                  <FormMessage className="font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="per_diem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">Per diem</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount for per diem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="awarding_and_stationary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">Awarding and stationary</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount for awarding and stationary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalExpenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">Total expenses</FormLabel>
                  <FormControl>
                    <Input placeholder="RWF 400,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
            </Dialog> */}
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Expenses;
