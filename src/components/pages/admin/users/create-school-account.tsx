import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverContentWithNoPrimitivePortal,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { signUp } from "@/core/authentication/auth";
import { getCountries } from "@/core/users/users";
import { Country } from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import { schoolSchema } from "@/lib/validations/admin/accounts";
import { useUserStore } from "@/stores/auth/auth.store";
import { UserRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | null;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

type Inputs = z.infer<typeof schoolSchema>;

function CreateSchoolAccount({ type, setSheetOpen }: CreateUserProps) {
  const [isPending, setIsPending] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);
  const [countries, setCountries] = React.useState<Country.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolSchema),
  });

  useEffect(() => {
    if (!user) return;
    const options = {
      token: user.token,
    };
    getCountries(options)
      .then((res) => {
        setCountries(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);

  async function onSubmit(data: Inputs) {
    setIsPending(true);

    await signUp({
      firstName: "emma",
      lastName: "watson",
      address: "kk",
      email: data.email,
      password: data.password,
      userRole: UserRole.SCHOOL,
      schoolName: data.name,
      country: data.country,
      province: data.province_state,
      district: data.district_region,
      contactEmail: data.contact_person_email,
      schoolType: data.type,
      nationalId: "1232434234",
    })
      .then((res) => {
        form.reset();
        setSheetOpen(false);
        toast({
          variant: "success",
          title: "Success",
          description: "School account created successfully",
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

  const handleCancel = () => {
    setSheetOpen(false);
  };

  type FieldName = keyof Inputs;

  const validateFormData = async (fields: string[]) => {
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    return output;
  };

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
          {activeStep === 1 && (
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      School Name<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Riviera High School" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Type<b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a school type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Public">Public</SelectItem>
                        <SelectItem value="Private">Private</SelectItem>
                        <SelectItem value="International">
                          International
                        </SelectItem>
                        <SelectItem value="Government Aided">
                          Government-aided
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Choose Country
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Popover
                        open={openCountries}
                        onOpenChange={setOpenCountries}
                        modal
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? countries.find(
                                  (country) => country.name === field.value
                                )?.name
                              : "Select country..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContentWithNoPrimitivePortal className="w-full p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>School not Found.</CommandEmpty>
                            <CommandList>
                              <CommandGroup>
                                {countries.map((country, index) => (
                                  <CommandItem
                                    key={index}
                                    value={country.name}
                                    onSelect={() => {
                                      form.setValue("country", country.name);
                                      setOpenCountries(false);
                                    }}
                                  >
                                    {country.name}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        field.value === country.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContentWithNoPrimitivePortal>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="province_state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Province/State
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="your province/state" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district_region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      District/Region
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="your district" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-5 mt-10">
                <Button
                  type="button"
                  variant={"secondary"}
                  size={"lg"}
                  className="w-full"
                  onClick={handleCancel}
                >
                  Cancel
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button
                  type="button"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "name",
                      "type",
                      // "country",
                      "province_state",
                      "district_region",
                    ]);
                    if (formErrors && activeStep < 2) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <FormField
                control={form.control}
                name="contact_person"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Name
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Emma" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact_person_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Number
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="0788..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact_person_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Contact Person Email
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="emma@gmail.com" {...field} />
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
                    <FormLabel className="capitalize">
                      School Email
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="emma@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      Password
                      <b className="text-primary font-light"> *</b>
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
                    <FormLabel className="capitalize">
                      Confirm Password
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-5">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="w-full"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                  <span className="sr-only">Cancel</span>
                </Button>
                <Button
                  type="submit"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                >
                  Create Account
                  <span className="sr-only">Create Account</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </ScrollArea>
  );
}

export default CreateSchoolAccount;
