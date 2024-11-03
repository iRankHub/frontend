import React, { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Icons } from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Panelheader } from "@/components/layout/admin-panel/side-panel";
import SidePanel from "@/components/layout/admin-panel/side-panel";
import {
  DetailedRegistrationResponse,
  ListRegistrationItem,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useRegistrationStore } from "@/stores/admin/tournaments/billings.store";
import {
  updateTournamentRegistration,
  UpdateTournamentRegistrationProps,
} from "@/core/debates/billings/billings";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { PhoneInput } from "@/components/ui/phone-input";
import { formSchema } from "./billings.schema";
import {
  AmountInputWithCurrency,
  SchoolProfile,
  TeamsSection,
} from "./_components/billings";
import { getSchoolRegistration } from "@/core/tournament/list/billings";

// Types
export interface OptionsProps {
  registration: ListRegistrationItem.AsObject;
}

type FormData = z.infer<typeof formSchema>;
const TournamentRegistration = ({ registration }: OptionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [schoolRegistration, setSchoolRegistration] =
    useState<DetailedRegistrationResponse.AsObject | null>(null);
  const [isLoadingSchool, setIsLoadingSchool] = useState(true);

  const { user } = useUserStore();
  const { tournament_id, updateRegistration } = useRegistrationStore();
  const { toast } = useToast();

  React.useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        if (!user?.token || !tournament_id || !registration.schoolId) {
          throw new Error(
            "Missing required data for fetching school information"
          );
        }

        setIsLoadingSchool(true);
        const schoolData = await getSchoolRegistration({
          school_id: registration.schoolId,
          tournament_id,
          token: user.token,
        });

        setSchoolRegistration(schoolData);

        // Update form with school contact information
        if (schoolData) {
          form.setValue("supervisor_name", schoolData.contactPersonName || "", {
            shouldValidate: true,
          });
          form.setValue("supervisor_email", schoolData.contactEmail || "", {
            shouldValidate: true,
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            error instanceof Error
              ? error.message
              : "Failed to fetch school information",
        });
      } finally {
        setIsLoadingSchool(false);
      }
    };

    fetchSchoolData();
  }, [registration.schoolId, tournament_id, user?.token]);

  // Calculate amount per team from initial values
  const amountPerTeam =
    registration.totalAmount / registration.plannedTeamsCount;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      actual_teams_count: registration.actualTeamsCount,
      amount_to_be_paid: registration.totalAmount,
      amount_to_be_paid_currency:
        registration.currency === "USD" ? "USD" : "RWF",
      amount_received: 0,
      amount_received_currency: registration.currency === "USD" ? "USD" : "RWF",
      discount_percentage: 0,
      supervisor_name: "",
      supervisor_email: "",
    },
  });

  // Function to calculate final amount based on team count and discount
  const calculateAmountToBePaid = (
    teamCount: number,
    discountPercentage: number = 0
  ) => {
    const baseAmount = teamCount * amountPerTeam;
    const discountAmount = (baseAmount * discountPercentage) / 100;
    return baseAmount - discountAmount;
  };

  // Watch actual teams count for changes
  React.useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "actual_teams_count") {
        const teamCount = value.actual_teams_count;
        if (teamCount && teamCount > 0) {
          const newAmountToBePaid = calculateAmountToBePaid(
            teamCount,
            discount
          );
          form.setValue("amount_to_be_paid", newAmountToBePaid, {
            shouldValidate: true,
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form, discount, amountPerTeam]);

  const handleApplyDiscount = () => {
    try {
      const teamCount = form.getValues("actual_teams_count");
      if (teamCount <= 0) {
        throw new Error("Team count must be greater than 0");
      }

      const newAmountToBePaid = calculateAmountToBePaid(teamCount, discount);
      form.setValue("amount_to_be_paid", Number(newAmountToBePaid.toFixed(2)), {
        shouldValidate: true,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to apply discount. Please check team count.",
      });
    }
  };

  const validateForm = async () => {
    const values = form.getValues();
    if (values.actual_teams_count <= 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Actual teams count must be greater than 0",
      });
      return false;
    }

    // Amount received validation
    if (!values.amount_received || values.amount_received <= 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid amount received",
      });
      await form.trigger("amount_received"); // Trigger validation on the field
      return false;
    }

    // Validate amount received against amount to be paid
    if (values.amount_received > values.amount_to_be_paid) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Amount received cannot be greater than amount to be paid",
      });
      return false;
    }

    return await form.trigger();
  };

  const handleOpenConfirmDialog = async () => {
    try {
      const isValid = await form.trigger();
      if (isValid) {
        setDialogOpen(true);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to validate form. Please check your inputs.",
      });
    }
  };

  const onSubmit = async (values: FormData) => {
    try {
      if (!user?.token || !tournament_id) {
        throw new Error("Missing required authentication or tournament data");
      }

      setIsLoading(true);
      const data: UpdateTournamentRegistrationProps = {
        actual_paid_amount: values.amount_to_be_paid,
        actual_teams_count: values.actual_teams_count,
        discount_amount: values.discount_percentage ?? 0,
        payment_status: "paid",
        school_id: registration.schoolId,
        token: user.token,
        tournament_id,
      };

      const response = await updateTournamentRegistration(data);
      if (response) {
        updateRegistration(response.registrationId, response);
      }

      toast({
        variant: "success",
        title: "Success",
        description: "Registration updated successfully",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });

      setIsOpen(false);
      setDialogOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update registration";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const AmountReceivedField = () => {
    const form = useFormContext<FormData>();
    const error = form.formState.errors.amount_received;

    return (
      <div>
        <FormField
          control={form.control}
          name="amount_received"
          render={({ field: amountField }) => (
            <FormField
              control={form.control}
              name="amount_received_currency"
              render={({ field: currencyField }) => (
                <AmountInputWithCurrency
                  amountField={{
                    ...amountField,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      amountField.onChange(Number(e.target.value));
                    },
                  }}
                  currencyField={currencyField}
                  label="Amount received"
                  placeholder="Enter amount received..."
                />
              )}
            />
          )}
        />
        {error && (
          <div className="text-xs text-destructive mt-1">
            Amount must be greater than 0 and not exceed amount to be paid
          </div>
        )}
      </div>
    );
  };

  const getPaymentDifference = () => {
    const amountToBePaid = form.getValues("amount_to_be_paid");
    const amountReceived = form.getValues("amount_received");
    return amountToBePaid - amountReceived;
  };

  const renderDialogContent = () => {
    const difference = getPaymentDifference();
    const currency = form.getValues("amount_to_be_paid_currency");

    if (difference > 0) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-base text-foreground">
              Payment Discrepancy Warning
            </DialogTitle>
            <DialogDescription className="space-y-2 pt-3">
              <p className="text-foreground font-medium">
                The amount received is less than the amount to be paid:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  Amount to be paid: {form.getValues("amount_to_be_paid")}{" "}
                  {currency}
                </p>
                <p>
                  Amount received: {form.getValues("amount_received")}{" "}
                  {currency}
                </p>
                <p className="text-primary font-medium">
                  Difference: {difference.toFixed(2)} {currency}
                </p>
              </div>
              <p className="text-sm mt-4">
                Are you sure you want to proceed with marking this registration
                as paid despite the outstanding balance?
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full justify-end gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="max-w-32"
              onClick={() => setDialogOpen(false)}
              disabled={isLoading}
            >
              Go back
            </Button>
            <Button
              type="button"
              size="sm"
              variant="default"
              className="max-w-32 bg-primary hover:bg-amber-700"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Proceed anyway"
              )}
            </Button>
          </DialogFooter>
        </>
      );
    }

    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-base">Ready to finalize?</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            The payment amount matches the required amount. Click confirm to
            complete the process.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full justify-end gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="max-w-32"
            onClick={() => setDialogOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="sm"
            variant="default"
            className="max-w-32"
            onClick={form.handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </DialogFooter>
      </>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Sheet>
          <SheetTrigger>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="bg-transparent w-6 h-6 p-1 m-0"
            >
              <Icons.pencilLine className="w-4 h-4 text-primary" />
            </Button>
          </SheetTrigger>
          <SidePanel>
            <div className="flex flex-col h-full">
              <Panelheader className="font-semibold">
                Detail Summary
              </Panelheader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col h-[calc(100%-4rem)]"
                >
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-5 p-5">
                      <SchoolProfile school={schoolRegistration} />
                      <TeamsSection registration={registration} form={form} />

                      {/* Discount Section */}
                      <div className="w-full">
                        <h3 className="text-sm text-foreground font-semibold">
                          Discount
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          <Input
                            type="number"
                            placeholder="Enter discount %"
                            value={discount}
                            onChange={(e) =>
                              setDiscount(Number(e.target.value))
                            }
                            min="0"
                            max="100"
                          />
                          <Button
                            type="button"
                            onClick={handleApplyDiscount}
                            disabled={isLoading}
                          >
                            Apply
                          </Button>
                        </div>
                      </div>

                      {/* Amount Sections */}
                      <div>
                        <FormField
                          control={form.control}
                          name="amount_to_be_paid"
                          render={({ field: amountField }) => (
                            <FormField
                              control={form.control}
                              name="amount_to_be_paid_currency"
                              render={({ field: currencyField }) => (
                                <AmountInputWithCurrency
                                  amountField={amountField}
                                  currencyField={currencyField}
                                  label="Amount to be paid"
                                  placeholder="Enter amount..."
                                  disabled={true}
                                />
                              )}
                            />
                          )}
                        />
                      </div>

                      <AmountReceivedField />

                      {/* Contact Person Section */}
                      <div>
                        <h3 className="text-muted-foreground text-sm mb-3">
                          Contact person
                        </h3>
                        <Card className="w-full px-4 py-3 space-y-4">
                          <FormField
                            control={form.control}
                            name="supervisor_name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Supervisor name</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter supervisor name..."
                                    disabled
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="supervisor_email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Supervisor contact Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john.doe@gmail.com"
                                    disabled
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-auto p-3 border-t bg-background">
                    <Button
                      type="button"
                      size="lg"
                      variant="default"
                      className="w-full hover:bg-primary"
                      onClick={handleOpenConfirmDialog}
                      disabled={isLoading}
                    >
                      Mark As Paid
                      <span className="sr-only">Mark As Paid</span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </SidePanel>
        </Sheet>

        {/* Confirmation Dialog */}
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TournamentRegistration;
