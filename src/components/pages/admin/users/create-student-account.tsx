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
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { StudentSchema } from "@/lib/validations/admin/accounts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateUserProps {
  type: "school" | "student" | "volunteer" | null;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

type Inputs = z.infer<typeof StudentSchema>;

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

function CreateStudentAccount({ type }: CreateUserProps) {
  const [isPending, setIsPending] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(StudentSchema),
  });

  async function onSubmit(data: Inputs) {}
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
                <FormLabel className="text-darkBlue">
                  First Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="ST-01334" {...field} />
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
                <FormLabel className="text-darkBlue">
                  Last Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="ST-01334" {...field} />
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
                <FormLabel className="text-darkBlue">
                  Email<b className="text-primary font-light"> *</b>
                </FormLabel>
                <FormControl>
                  <Input placeholder="ST-01334" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkBlue">
                  Last Name<b className="text-primary font-light"> *</b>
                </FormLabel>
                <br />
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command className="z-[60]">
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {framework.label}
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkBlue">
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
                <FormLabel className="text-darkBlue">
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

export default CreateStudentAccount;
