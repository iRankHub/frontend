"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { schoolSchema } from "@/lib/validations/auth.schema";
import { Button } from "@/components/ui/button";
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
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/ui/password-Input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { UserRole } from "@/types";
import { getCountriesNoAuth, signUp } from "@/core/authentication/auth";
// @ts-ignore
import { Provinces, Districts } from "rwanda";
import { Country } from "@/lib/grpc/proto/user_management/users_pb";

type Inputs = z.infer<typeof schoolSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const { toast } = useToast();
  const [activeStep, setActiveStep] = React.useState(1);
  const [provinces, setProvinces] = React.useState<string[]>(Provinces());
  const [districts, setDisctricts] = React.useState<string[]>(Districts());
  const steps = [1, 2, 3, 4];
  const [countries, setCountries] = React.useState<Country.AsObject[]>([]);

  React.useEffect(() => {
    getCountriesNoAuth().then((res) => {
      setCountries(res);
    });
  }, []);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolSchema),
  });

  async function onSubmit(data: Inputs) {
    setIsPending(true);

    await signUp({
      firstName: data.contact_person_firstname,
      lastName: data.contact_person_lastname,
      address: data.address,
      email: data.email,
      password: data.password,
      userRole: UserRole.SCHOOL,
      schoolName: data.name,
      country: data.country,
      province: data.province_state,
      district: data.district_region,
      contactEmail: data.contact_person_email,
      schoolType: data.type,
    })
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
        form.reset();
        router.push("/auth/school/login");
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

  const Step = ({
    number,
    isActive,
  }: {
    number: number;
    isActive: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-3">
        <span className="text-xs capitalize">step {number.toString()}</span>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-xs">
          {isActive || number < activeStep ? (
            <div className="w-4 h-4 bg-success-green rounded-full flex items-center justify-center">
              {number !== activeStep && (
                <Icons.check className="w-4 h-4 text-white" />
              )}
            </div>
          ) : (
            <p>{number.toString()}</p>
          )}
        </div>
      </div>
    );
  };

  const Dots = () => {
    return (
      <div className="flex space-x-1">
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
      </div>
    );
  };

  const handleCancel = () => {
    router.push("/auth/school/login");
  };

  type FieldName = keyof Inputs;

  const validateFormData = async (fields: string[]) => {
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    return output;
  };

  return (
    <div className="w-full">
      {/* tab section */}
      <div className="w-full mb-10">
        <p className="text-sm  text-black/50 mb-4">
          step {activeStep} of {steps.length} completed
        </p>
        <div className="flex items-center justify-between space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <Step number={step} isActive={step === activeStep} />
              {index < steps.length - 1 && <Dots />}
            </React.Fragment>
          ))}
        </div>
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
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      School Address
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="kk 4234st" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-5">
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
                      "address",
                    ]);
                    if (formErrors && activeStep < 4) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/school/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
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
                        <PopoverContent className="w-full p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>Country not Found.</CommandEmpty>
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
                        </PopoverContent>
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
                    <FormLabel>
                      Province/State
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Popover>
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
                              ? provinces.find(
                                  (province) => province === field.value
                                )
                              : "Select province/state..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search province..." />
                            <CommandEmpty>Province not Found.</CommandEmpty>
                            <CommandList>
                              <CommandGroup>
                                {provinces.map((province, index) => (
                                  <CommandItem
                                    key={index}
                                    value={province}
                                    onSelect={() => {
                                      form.setValue("province_state", province);
                                      setDisctricts(Districts(province));
                                    }}
                                  >
                                    {province}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        field.value === province
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
                    <FormLabel>
                      District/Region
                      <b className="text-primary font-light"> *</b>
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Popover>
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
                              ? districts.find(
                                  (district) => district === field.value
                                )
                              : "Select province/state..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search province..." />
                            <CommandEmpty>
                              District/Region not Found.
                            </CommandEmpty>
                            <CommandList>
                              <CommandGroup>
                                {districts.map((district, index) => (
                                  <CommandItem
                                    key={index}
                                    value={district}
                                    onSelect={() => {
                                      form.setValue(
                                        "district_region",
                                        district
                                      );
                                    }}
                                  >
                                    {district}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        field.value === district
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
                  type="button"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "country",
                      "province_state",
                      "district_region",
                    ]);
                    if (formErrors && activeStep < 4) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/school/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
          {activeStep === 3 && (
            <>
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="contact_person_firstname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="capitalize">
                        Contact Person First Name
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
                  name="contact_person_lastname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="capitalize">
                        Contact Person Last Name
                        <b className="text-primary font-light"> *</b>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="darsen" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
                  type="button"
                  variant={"default"}
                  size={"lg"}
                  className="w-full"
                  onClick={async () => {
                    const formErrors = await validateFormData([
                      "contact_person",
                      "contact_person_number",
                      "contact_person_email",
                    ]);
                    if (formErrors && activeStep < 4) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                >
                  Continue
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/school/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
          {activeStep === 4 && (
            <>
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
                <Button variant={"default"} size={"lg"} className="w-full">
                  Continue
                  {isPending && (
                    <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                  )}
                  <span className="sr-only">Continue</span>
                </Button>
              </div>
              <div className="w-full flex flex-col justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-lg text-darkBlue">
                    Already have an account?
                  </span>
                  <Link
                    href="/auth/school/login"
                    className="text-lg text-blue hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
