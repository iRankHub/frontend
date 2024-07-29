"use client";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Command, CommandInput } from "@/components/ui/command";
import { Switch } from "@/components/ui/switch";
import { SwitchSun } from "@/components/ui/switch-sun";
import { useAppState } from "@/context/global-context";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function TopBar() {
  const { sidebarOpen, setSidebarOpen } = useAppState();
  const [themeCheck, setThemeCheck] = useState(false);
  return (
    <div
      className={cn(
        "fixed top-0 max-w-[calc(100vw-20rem)] ml-80 h-20 z-10 bg-background shadow w-full flex items-center px-5 justify-between",
        !sidebarOpen && "max-w-[calc(100vw-106px)] ml-[106px]"
      )}
    >
      <div className="flex items-center gap-3">
        <Icons.menu
          className="text-lg font-extralight cursor-pointer text-foreground"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <Command className="rounded-lg w-96 border">
          <CommandInput placeholder="Type to search..." className="ring-0" />
        </Command>
      </div>
      <div className="flex items-center gap-4 mr-3">
        <SwitchSun className="bg-muted" checked={themeCheck} onCheckedChange={setThemeCheck} />
        <div className="flex items-center gap-4">
          <div className="relative bg-muted border rounded-full">
            <Icons.bell className="text-xl text-muted-foreground m-2" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex flex-col items-end leading-6">
              <h3 className="text-sm text-[#212B36] capitalize">
                Thomas Anree
              </h3>
              <span className="text-xs text-[#637381]">Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-11 h-11">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Icons.chevronDown size={20} className="text-[#637381]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
