import React from "react";
import { AlarmClock, Pin } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Notification,
  NotificationType,
} from "@/lib/grpc/proto/notification/notification_pb";
import { useNotificationStore } from "@/stores/notifications/notifications.store";

function Notifications() {
  const { notifications } = useNotificationStore((state) => state);
  
  return (
    <ScrollArea className="h-full w-full rounded-md p-2">
      <div className="notification-center p-1">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </ScrollArea>
  );
}

function NotificationItem({
  notification,
}: {
  notification: Notification.AsObject;
}) {
  return (
    <div className="flex items-start gap-3 bg-white dark:bg-background p-3 border rounded-lg mb-2 cursor-pointer hover:bg-accent/50 transition-colors">
      <div className="shrink-0">
        {notification.type === NotificationType.EMAIL ? (
          <AlarmClock className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Pin className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
      <div className="flex flex-col gap-1 flex-grow">
        <p className="text-foreground text-sm font-medium line-clamp-2">
          {notification.content}
        </p>
        {/* <span className="text-xs text-muted-foreground">8 min ago</span> */}
      </div>
      <Pin className="w-4 h-4 rotate-45 text-primary shrink-0" />
    </div>
  );
}

export default Notifications;
