"use client";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function TopBarStudents() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <div className="fixed top-0 max-w-[calc(100vw-20rem)] ml-80 h-20 z-10 bg-background shadow w-full flex items-center px-5 justify-between">
      <div className="flex items-center">
        <p className="font-primaryRegular text-muted-foreground text-sm">
          <strong className="font-bold mr-2">
            Do you know about the latest training program (Irank Pros).
          </strong>
          An overview is now Available...
        </p>
      </div>
      <div className="flex items-center px-5 gap-5">
        <div
          className="flex items-center bg-white rounded-md border border-border overflow-hidden px-2 w-64 h-10 cursor-text"
          onClick={() => setOpen(!open)}
        >
          <Icons.search size={15} className="text-muted-foreground" />
          <Input type="search" placeholder="Search" className="text-sm text-muted-foreground bg-white outline-none border-none ring-0" />
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Icons.bell className="text-3xl text-zinc-900" />
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5">
              <Link href={"/student/profile"}>
                <DropdownMenuItem className="hover:bg-primary hover:text-white cursor-pointer">
                  <Icons.user size={20} className="mr-2" />
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="hover:bg-primary hover:text-white cursor-pointer">
                <Icons.users size={20} className="mr-2" />
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary hover:text-white cursor-pointer">
                <Icons.users size={20} className="mr-2" />
                Subscription
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary hover:text-white cursor-pointer">
                <Icons.logout size={20} className="mr-2" />
                logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TopBarStudents;
