import { Icons } from "@/components/icons";
import { DataTable } from "@/components/tables/data-table";
import { teams } from "@/components/tables/data/tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { columns } from "./columns";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/schools-panel/side-panel";
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
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

function Teams({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <div className="flex-1 flex items-center justify-between gap-3">
          <Input
            type="search"
            placeholder="Search school..."
            className="w-72 h-8"
          />

          <Sheet>
            <SheetTrigger>
              <Button
                type="button"
                className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
              >
                <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
                Add Teams
                <span className="sr-only">School Name</span>
              </Button>
            </SheetTrigger>
            <SidePanel>
              <Panelheader>
                <h3 className="text-lg text-primary font-bold">Add Team</h3>
              </Panelheader>
              <div className="flex flex-col justify-between">
                <div className="p-5 flex flex-col">
                  <TeamMember />
                  <TeamMember />
                  <TeamMember />
                </div>

                <div className="flex items-center gap-3 p-5">
                  <Button
                    type="submit"
                    variant={"default"}
                    size={"lg"}
                    className="w-full hover:bg-primary"
                  >
                    Continue
                    <span className="sr-only">Add team</span>
                  </Button>
                </div>
              </div>
            </SidePanel>
          </Sheet>
        </div>
      </div>
      <div className="w-full bg-background p-5">
        <DataTable data={teams} columns={columns} />
      </div>
    </div>
  );
}

export default Teams;

const frameworks = [
  {
    value: "Bideri Alec",
    label: "Alec",
  },
  {
    value: "Iman Koulibally",
    label: "Iman",
  },
  {
    value: "Joselyto",
    label: "Joselyto",
  },
];

const TeamMember = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full border-transparent border-b border-b-border justify-between mb-3"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select student..."}
          <Icons.chevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full border-transparent border-b border-b-border p-0 pb-5">
        <Command>
          <CommandInput placeholder="Search student..." />
          <CommandList>
            <CommandEmpty>No student found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
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
  );
};
