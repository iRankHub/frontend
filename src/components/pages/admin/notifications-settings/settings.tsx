"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { twoFactorEnableSchema } from "@/lib/validations/admin/accounts/profile-update.schema";
import React from "react";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface NotificationSettingsProps {
  role: "students" | "schools" | "volunteers";
}

type Inputs = z.infer<typeof twoFactorEnableSchema>;

function Settings({ role }: NotificationSettingsProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const [isCreateNotificationEnabled, setIsCreateNotificationEnabled] =
    React.useState(false);
  const [isUpdateNotificationEnabled, setIsUpdateNotificationEnabled] =
    React.useState(false);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 px-20 py-4 bg-brown">
        <h3 className="text-xl text-background dark:text-foreground">
          Manage Notification Settings
        </h3>
      </div>
      <div className="w-full bg-background px-20 py-5">
        <div className="flex flex-col">
          <h3 className="text-primary text-xl">Tournament Creation</h3>
          <Separator className="my-5" />
          <div className="w-full">
            <h3 className="text-sm mb-2">Enable Tournament Notification</h3>
            <div className="max-w-md flex items-center gap-3 text-sm text-muted-foreground">
              Switch to enable
              <Switch
                size="small"
                checked={isCreateNotificationEnabled}
                onCheckedChange={() =>
                  setIsCreateNotificationEnabled(!isCreateNotificationEnabled)
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <h3 className="text-primary text-xl">Tournament Update</h3>
          <Separator className="my-5" />
          <div className="w-full">
            <h3 className="text-sm mb-2">Enable Tournament Notification</h3>
            <div className="max-w-md flex items-center gap-3 text-sm text-muted-foreground">
              Switch to enable
              <Switch
                size="small"
                checked={isUpdateNotificationEnabled}
                onCheckedChange={() =>
                  setIsUpdateNotificationEnabled(!isUpdateNotificationEnabled)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
