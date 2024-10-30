import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { expensesSchema } from "@/lib/validations/admin/logistics/expenses.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createTournamentExpenses,
  updateExpenses,
  getTournamentExpenses,
} from "@/core/debates/billings/expenses";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/auth/auth.store";
import AppLoader from "@/lib/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  tournament_id: string;
};

type Inputs = z.infer<typeof expensesSchema>;

const CURRENCIES = [
  { label: "Rwandan Franc", value: "RWF" },
  { label: "US Dollar", value: "USD" },
] as const;

function Expenses({ tournament_id }: Props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasExistingExpenses, setHasExistingExpenses] = React.useState(false);
  const user = useUserStore((state) => state.user);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(expensesSchema),
    defaultValues: {
      awarding_expense: 0,
      food_expense: 0,
      notes: "",
      other_expenses: 0,
      per_diem_expense: 0,
      stationary_expense: 0,
      transport_expense: 0,
      currency: "RWF",
    },
  });

  React.useEffect(() => {
    const fetchExpenses = async () => {
      if (!user) return;

      try {
        const expenses = await getTournamentExpenses({
          token: user.token,
          tournament_id: Number(tournament_id),
        });

        console.log(expenses)

        if (expenses) {
          setHasExistingExpenses(true);
          form.reset({
            awarding_expense: expenses.awardingExpense,
            food_expense: expenses.foodExpense,
            notes: expenses.notes,
            other_expenses: expenses.otherExpenses,
            per_diem_expense: expenses.perDiemExpense,
            stationary_expense: expenses.stationaryExpense,
            transport_expense: expenses.transportExpense,
            currency: "RWF",
          });
        }
      } catch (error) {
        // If we get a "not found" error, we'll assume there are no expenses yet
        setHasExistingExpenses(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpenses();
  }, [tournament_id, user, form]);

  const onSubmit = async (values: Inputs) => {
    if (!user) return;

    try {
      setIsPending(true);
      const expenseData = {
        awarding_expense: values.awarding_expense,
        food_expense: values.food_expense,
        notes: values.notes ?? "",
        other_expenses: values.other_expenses,
        per_diem_expense: values.per_diem_expense,
        stationary_expense: values.stationary_expense,
        transport_expense: values.transport_expense,
        token: user.token,
        tournament_id: Number(tournament_id),
      };

      if (hasExistingExpenses) {
        await updateExpenses({ ...expenseData, currency: values.currency });
      } else {
        await createTournamentExpenses(expenseData);
      }

      setDialogOpen(false);
      toast({
        variant: "success",
        title: "Success",
        description: `Expenses ${
          hasExistingExpenses ? "updated" : "recorded"
        } successfully!`,
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to ${
          hasExistingExpenses ? "update" : "record"
        } expenses. Please try again.`,
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleRecordClick = async () => {
    const result = await form.trigger();
    if (!result) {
      // Get all errors
      const errors = form.formState.errors;

      // Create error message
      let errorMessage = "Please check the following:";
      Object.entries(errors).forEach(([field, error]) => {
        if (error?.message) {
          errorMessage += `\n• ${error.message}`;
        }
      });

      // Show error toast
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: errorMessage,
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    // If validation passes, open the dialog
    setDialogOpen(true);
  };

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-white">Expenses</h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="food_expense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Expense</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter food expense amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transport_expense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transport Expense</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter transport expense amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="per_diem_expense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Per Diem Expense</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter per diem amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="awarding_expense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Awarding Expense</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter awarding expense amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stationary_expense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stationary Expense</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter stationary expense amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="other_expenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Expenses</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter other expenses amount"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter additional notes or comments about the expenses..."
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CURRENCIES.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="max-w-52"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRecordClick();
                  }}
                >
                  {hasExistingExpenses ? "Update" : "Record"} Expense
                  {isPending && (
                    <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="font-semibold">
                  Confirm {hasExistingExpenses ? "Update" : "Record"}
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to{" "}
                  {hasExistingExpenses ? "update" : "record"} these expenses?
                  You can always update later.
                </DialogDescription>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    variant="default"
                    onClick={() => {
                      if (form.formState.isValid) {
                        onSubmit(form.getValues());
                      }
                    }}
                    disabled={isPending}
                  >
                    Confirm
                    {isPending && (
                      <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                    )}
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

export default Expenses;
