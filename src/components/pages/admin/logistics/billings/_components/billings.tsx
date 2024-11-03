import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { z } from "zod";
import {
  DetailedRegistrationResponse,
  ListRegistrationItem,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { OptionsProps } from "../tournament-registration";
import { formSchema } from "../billings.schema";
import { cn } from "@/lib/utils";

interface SchoolProfileProps {
  school: DetailedRegistrationResponse.AsObject | null;
}

export const SchoolProfile = ({ school }: SchoolProfileProps) => {
  if (!school) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h3 className="text-muted-foreground text-sm mb-3">School Profile</h3>
      <Card className="w-full px-4 py-5">
        <p className="text-foreground text-sm mb-2">
          School name: {school.schoolName}
        </p>
        <p className="text-foreground text-sm mb-2">
          School email: {school.schoolEmail}
        </p>
        <p className="text-foreground text-sm mb-2">
          Country: {school.country}
        </p>
        <p className="text-foreground text-sm mb-2">
          Province: {school.province}
        </p>
        <p className="text-foreground text-sm mb-2">
          District: {school.district}
        </p>
      </Card>
    </div>
  );
};

type FormData = z.infer<typeof formSchema>;
export const TeamsSection = ({
  registration,
  form,
}: {
  registration: ListRegistrationItem.AsObject;
  form: ReturnType<typeof useForm<FormData>>;
}) => (
  <div>
    <h3 className="text-muted-foreground text-sm mb-3">Teams</h3>
    <Card className="w-full px-4 py-5 space-y-4">
      <FormItem>
        <FormLabel>Planned Teams</FormLabel>
        <FormControl>
          <Input
            type="number"
            value={registration.plannedTeamsCount}
            disabled
            className="bg-muted/70 dark:bg-muted/30"
          />
        </FormControl>
      </FormItem>

      <FormField
        control={form.control}
        name="actual_teams_count"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Actual Teams</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Enter actual teams..."
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Card>
  </div>
);

const CURRENCY_OPTIONS = [
  { label: "USD", value: "USD" },
  { label: "RWF", value: "RWF" },
] as const;

export const AmountInputWithCurrency = ({
  amountField,
  currencyField,
  label,
  placeholder,
  disabled = false,
}: {
  amountField: any;
  currencyField: any;
  label: string;
  placeholder: string;
  disabled?: boolean;
}) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <div className="flex gap-2">
      <FormControl>
        <Input
          type="number"
          placeholder={placeholder}
          {...amountField}
          className={cn(
            "flex-1",
            disabled ? "bg-muted/70 dark:bg-muted/30" : ""
          )}
          disabled={disabled}
        />
      </FormControl>
      <Select
        value={currencyField.value}
        onValueChange={currencyField.onChange}
        disabled={disabled}
      >
        <FormControl>
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {CURRENCY_OPTIONS.map((currency) => (
            <SelectItem key={currency.value} value={currency.value}>
              {currency.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <FormMessage />
  </FormItem>
);
