"use client";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { getUserDetails } from "@/core/users/users";
import { countries } from "@/lib/data";
import { Districts, Provinces } from "@/lib/get-provinces-and-districts";
import {
  SchoolDetails,
  UserDetails,
} from "@/lib/grpc/proto/user_management/users_pb";
import { cn } from "@/lib/utils";
import { schoolProfileSchemaStep1 } from "@/lib/validations/admin/accounts/profile-update.schema";
import { useUserStore } from "@/stores/auth/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof schoolProfileSchemaStep1>;

function ProfileForm() {
  const { toast } = useToast();
  const { user: storeUser } = useUserStore((state) => state);
  const [isPending, setIsPending] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const [provinces, setProvinces] = React.useState<string[]>(Provinces());
  const [districts, setDisctricts] = React.useState<string[]>(Districts());
  const [school, setSchool] = React.useState<SchoolDetails.AsObject | null>(
    null
  );
  const [user, setUser] = React.useState<UserDetails.AsObject | null>(null);

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(schoolProfileSchemaStep1),
    defaultValues: {
      name: user?.name || "",
      country: "Rwanda",
      province_state: "Kigali",
      district_region: "Kicukiro",
      type: "Private",
    },
  });

  const onSubmit = (data: Inputs) => {
    setIsPending(true);

    // await signUp({
    //   firstName: data.contact_person_firstname,
    //   lastName: data.contact_person_lastname,
    //   address: data.address,
    //   email: data.email,
    //   password: data.password,
    //   userRole: UserRole.SCHOOL,
    //   schoolName: data.name,
    //   country: data.country,
    //   province: data.province_state,
    //   district: data.district_region,
    //   contactEmail: data.contact_person_email,
    //   schoolType: data.type,
    // })
    //   .then((res) => {
    //     toast({
    //       variant: "success",
    //       title: "Success",
    //       description: res.message,
    //       action: (
    //         <ToastAction altText="Close" className="bg-primary text-white">
    //           Close
    //         </ToastAction>
    //       ),
    //     });
    //     form.reset();
    //     router.push("/auth/school/login");
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     toast({
    //       variant: "destructive",
    //       title: "Error",
    //       description:
    //         "Something went wrong. Please check your credentials and try again later",
    //       action: (
    //         <ToastAction altText="Close" className="bg-primary text-white">
    //           Close
    //         </ToastAction>
    //       ),
    //     });
    //   })
    //   .finally(() => {
    //     setIsPending(false);
    //   });
  };

  useEffect(() => {
    if (!storeUser) return;
    const getUser = async () => {
      await getUserDetails({
        userID: storeUser.userId,
        token: storeUser.token,
      }).then((res) => {
        if (res.user) {
          setUser(res.user);
        }
      });
    };
    getUser().catch((err) => {
      toast({
        variant: "success",
        title: "Success",
        description: "Tournament created successfully",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    });
  }, [storeUser, toast]);

  if (!user) {
    return (
      <div className="grid place-content-center mt-auto h-full">loading...</div>
    );
  }
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-background">Profile</h3>
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
                  <FormLabel>School name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="school name"
                      className=""
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage className="font-bold" />
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
                  <FormDescription className="text-sm text-muted-foreground">
                    Change the country
                  </FormDescription>
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
                  <FormDescription className="text-sm text-muted-foreground">
                    Change the province
                  </FormDescription>
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
                                    form.setValue("district_region", district);
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
                  <FormDescription className="text-sm text-muted-foreground">
                    Change the district/state of the school
                  </FormDescription>
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
                    Change School Type
                    <b className="text-primary font-light"> *</b>
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
                  <FormDescription className="text-sm text-muted-foreground">
                    Change the type of the school
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Dialog>
              <DialogTrigger
                type="button"
                className="max-w-52 w-full h-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Update Profile
                {isPending && (
                  <div className="ml-2 w-3.5 h-3.5 rounded-full border-2 border-background border-r-0 animate-spin" />
                )}
                <span className="sr-only">Update Profile</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="font-semibold">
                  Are you absolutely sure?
                </DialogHeader>
                <DialogDescription>
                  This action cannot be undone. This will permanently update
                  your profile.
                </DialogDescription>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Cancel
                    <span className="sr-only">Cancel</span>
                  </Button>
                  <Button type="submit" variant="default">
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

export default ProfileForm;
