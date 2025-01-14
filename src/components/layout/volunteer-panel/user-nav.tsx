"use client";

import Link from "next/link";
import { LayoutGrid, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { useUserStore } from "@/stores/auth/auth.store";
import { getUserProfile } from "@/core/users/users";
import { useEffect, useState } from "react";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { formatName } from "@/utils/split-name";

export function UserNav() {
  const { logout, user } = useUserStore((state) => state);
  const [currentUser, setCurrentUser] = useState<
    UserProfile.AsObject | undefined
  >(undefined);
  user
  useEffect(() => {
    if (!user) return;

    getUserProfile({
      userID: user.userId,
      token: user.token,
    })
      .then((res) => {
        setCurrentUser(res.profile);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user]);
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                data-onboarding-id="dashboard-volunteer-profile"
                variant="ghost" className="relative border-none p-2"
              >
                <div className="hidden md:flex flex-col items-end mr-2">
                  <h3 className="text-sm text-[#212B36] dark:text-foreground capitalize leading-4">
                    {user && user.name}
                  </h3>
                  <span className="text-xs text-[#637381]">Volunteer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={user?.picture ?? "/static/images/mic-speech.jpg"}
                    />
                    <AvatarFallback>
                      {currentUser ? formatName(currentUser?.name) : ""}
                    </AvatarFallback>
                  </Avatar>
                  <Icons.chevronDown size={16} className="text-[#637381]" />
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{currentUser?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {currentUser?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/volunteers/dashboard" className="flex items-center">
              <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/volunteers/profile" className="flex items-center">
              <User className="w-4 h-4 mr-3 text-muted-foreground" />
              Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer" onClick={logout}>
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
