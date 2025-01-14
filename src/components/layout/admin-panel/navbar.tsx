"use client";

import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";
import { useStore } from "zustand";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "./sidebar-toggle";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SidePanel, { Panelheader } from "./side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Notifications from "./notifications";
import { ThemeToggler } from "@/components/ui/switch-sun";
import { useNotificationStore } from "@/stores/notifications/notifications.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { markNotificationsAsRead } from "@/core/notifications";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const { notifications, setNotifications } = useNotificationStore();
  const { user } = useUserStore();
  const { toast } = useToast();

  const handleMarkAllAsRead = async () => {
    if (!user?.userId) return;

    try {
      await markNotificationsAsRead({ user_id: user.userId });
      setNotifications([]);
      toast({
        variant: "success",
        title: "Success",
        description: "All notifications have been marked as read",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error("Failed to mark notifications as read:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to mark notifications as read. Please try again.",
        action: (
          <ToastAction altText="Try again" className="bg-destructive text-white">
            Try again
          </ToastAction>
        ),
      });
    }
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center gap-10">
        <div className="flex items-center gap-4">
          <SheetMenu />
          <SidebarToggle
            isOpen={sidebar?.isOpen}
            setIsOpen={sidebar?.setIsOpen}
          />
        </div>
        <div className="flex flex-1 items-center space-x-3 justify-end">
          <ThemeToggler className="bg-muted dark:bg-[#272A2F]" />

          <Sheet>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SheetTrigger asChild>
                    <Button
                      className="relative rounded-full w-8 h-8 bg-background cursor-pointer"
                      variant="outline"
                      data-onboarding-id="notifications"
                      size="icon"
                    >
                      <sup className="bg-primary w-3.5 h-3.5 grid items-center absolute rounded-full text-[10px] font-bold top-0.5 -right-1.5 text-white">
                        {notifications.length}
                      </sup>
                      <Icons.bell className="w-[1.2rem] h-[1.2rem] text-muted-foreground m-1" />
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </SheetTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">Notifications</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <SidePanel>
              <Panelheader>
                <div className="w-full h-12 flex flex-row items-center justify-between px-3 pb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text- font-bold">Notifications</h3>
                    <span className="w-5 h-5 bg-primary rounded-full text-sm flex items-center justify-center text-white font-bold">
                      {notifications.length}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="text-sm"
                    onClick={handleMarkAllAsRead}
                    disabled={notifications.length === 0}
                  >
                    Mark all as read
                  </Button>
                </div>
              </Panelheader>
              <div className="w-full h-[calc(100%_-_70px)] flex flex-col">
                <Notifications />
              </div>
            </SidePanel>
          </Sheet>

          <UserNav />
        </div>
      </div>
    </header>
  );
}
