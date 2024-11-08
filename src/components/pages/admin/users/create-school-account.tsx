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
import {
  Popover,
  PopoverContent,
  PopoverContentWithNoPrimitivePortal,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-Input";
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
import { useUserStore } from "@/stores/auth/auth.store";
import { UserRole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// @ts-ignore
import { Provinces, Districts } from "rwanda";
import { countriesPerContinent } from "@/lib/data";
import { cn } from "@/lib/utils";
import { schoolSchema } from "@/lib/validations/admin/accounts";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | "admin" | null;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

type Inputs = z.infer<typeof schoolSchema>;

function CreateSchoolAccount({ type, setSheetOpen }: CreateUserProps) {
  const [isPending, setIsPending] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const { toast } = useToast();
  const { user } = useUserStore((state) => state);

  // Popover states
  const [openPopover, setOpenPopover] = useState({
    continent: false,
    country: false,
    province: false,
    district: false,
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(schoolSchema),
    defaultValues: {
      locationType: "local",
      country: "Rwanda",
    },
  });

  const locationType = form.watch("locationType");
  const selectedContinent = form.watch("continent");
  const selectedProvince = form.watch("province_state");

  const getCountriesForContinent = (continent: string): string[] => {
    // @ts-ignore
    const continentCountries = countriesPerContinent[continent] || [];
    return continentCountries.map((country: any) =>
      typeof country === "object" ? country.label : country
    );
  };

  const getAvailableDistricts = () => {
    return selectedProvince ? Districts(selectedProvince) : [];
  };

  async function onSubmit(data: Inputs) {
    setIsPending(true);

    const address =
      data.locationType === "local"
        ? `${data.district_region}, ${data.province_state}`
        : `${data.continent}, ${data.country}`;

    await signUp({
      firstName: data.contact_person.split(" ")[0],
      lastName: data.contact_person.split(" ")[1] || "",
      address,
      email: data.email,
      password: data.password,
      userRole: UserRole.SCHOOL,
      schoolName: data.name,
      country: data.country,
      province:
        data.locationType === "local" ? data.province_state : data.continent,
      district:
        data.locationType === "local" ? data.district_region : data.country,
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

  const ContinentSelect = ({ field }: { field: any }) => (
    <Popover
      open={openPopover.continent}
      onOpenChange={(open) =>
        setOpenPopover((prev) => ({ ...prev, continent: open }))
      }
    >
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value || "Select continent"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContentWithNoPrimitivePortal className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search continent..." />
          <CommandList>
            <CommandEmpty>No continent found.</CommandEmpty>
            <CommandGroup>
              {Object.keys(countriesPerContinent).map((continent) => (
                <CommandItem
                  key={continent}
                  value={continent}
                  onSelect={() => {
                    form.setValue("continent", continent);
                    // Reset country when continent changes
                    form.setValue("country", "");
                    setOpenPopover((prev) => ({ ...prev, continent: false }));
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value === continent ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {continent}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContentWithNoPrimitivePortal>
    </Popover>
  );

  const CountrySelect = ({ field }: { field: any }) => (
    <Popover
      open={openPopover.country}
      onOpenChange={(open) =>
        setOpenPopover((prev) => ({ ...prev, country: open }))
      }
    >
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            disabled={!selectedContinent}
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value || "Select country"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContentWithNoPrimitivePortal className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {selectedContinent &&
                getCountriesForContinent(selectedContinent).map((country) => (
                  <CommandItem
                    key={country}
                    value={country}
                    onSelect={() => {
                      form.setValue("country", country);
                      setOpenPopover((prev) => ({ ...prev, country: false }));
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        field.value === country ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {country}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContentWithNoPrimitivePortal>
    </Popover>
  );

  const ProvinceSelect = ({ field }: { field: any }) => (
    <Popover
      open={openPopover.province}
      onOpenChange={(open) =>
        setOpenPopover((prev) => ({ ...prev, province: open }))
      }
    >
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value || "Select province"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContentWithNoPrimitivePortal className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search province..." />
          <CommandList>
            <CommandEmpty>No province found.</CommandEmpty>
            <CommandGroup>
              {Provinces().map((province: string) => (
                <CommandItem
                  key={province}
                  value={province}
                  onSelect={() => {
                    form.setValue("province_state", province);
                    // Reset district when province changes
                    form.setValue("district_region", "");
                    setOpenPopover((prev) => ({ ...prev, province: false }));
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value === province ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {province}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContentWithNoPrimitivePortal>
    </Popover>
  );

  const DistrictSelect = ({ field }: { field: any }) => (
    <Popover
      open={openPopover.district}
      onOpenChange={(open) =>
        setOpenPopover((prev) => ({ ...prev, district: open }))
      }
    >
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            disabled={!selectedProvince}
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value || "Select district"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContentWithNoPrimitivePortal className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search district..." />
          <CommandList>
            <CommandEmpty>No district found.</CommandEmpty>
            <CommandGroup>
              {getAvailableDistricts().map((district: string) => (
                <CommandItem
                  key={district}
                  value={district}
                  onSelect={() => {
                    form.setValue("district_region", district);
                    setOpenPopover((prev) => ({ ...prev, district: false }));
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value === district ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {district}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContentWithNoPrimitivePortal>
    </Popover>
  );

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
                name="locationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School Location Type</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        if (value === "local") {
                          form.setValue("country", "Rwanda");
                          form.setValue("continent", "");
                        } else {
                          form.setValue("province_state", "");
                          form.setValue("district_region", "");
                          form.setValue("country", "");
                        }
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="local">Local</SelectItem>
                        <SelectItem value="international">
                          International
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {locationType === "international" ? (
                <>
                  <FormField
                    control={form.control}
                    name="continent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Continent<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <ContinentSelect field={field} />
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
                          Country<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <CountrySelect field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <>
                  <FormField
                    control={form.control}
                    name="province_state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Province<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <ProvinceSelect field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="district_region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          District<b className="text-primary font-light"> *</b>
                        </FormLabel>
                        <DistrictSelect field={field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

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
                    const basicFields = ["name", "type", "locationType"];

                    // Add location fields based on selected type
                    const locationType = form.watch("locationType");
                    const fieldsToValidate = [...basicFields];

                    if (locationType === "international") {
                      fieldsToValidate.push("continent", "country");
                    } else if (locationType === "local") {
                      fieldsToValidate.push(
                        "province_state",
                        "district_region"
                      );
                    }

                    const isValid = await validateFormData(fieldsToValidate);
                    if (isValid) {
                      // Changed this condition
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
