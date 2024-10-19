import {
  Notification,
  NotificationType,
} from "@/lib/grpc/proto/notification/notification_pb";
import { useNotificationStore } from "@/stores/notifications/notifications.store";
import { AlarmClock, Pin } from "lucide-react";
import React, { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState<Notification.AsObject[]>([]);
  return (
    <div className="notification-center">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

function NotificationItem({
  notification,
}: {
  notification: Notification.AsObject;
}) {
  return (
    <div className="flex items-start gap-3 bg-white dark:bg-background p-3 border-b cursor-pointer">
      {notification.type === NotificationType.EMAIL ? (
        <AlarmClock size={24} />
      ) : (
        <Pin size={24} />
      )}
      <div className="flex flex-col gap-1">
        <p className="text-foreground text-sm font-semibold">
          {notification.content}
        </p>
        {/* <span className="text-sm">8 min ago</span> */}
      </div>
      <Pin className="w-5 h-5 rotate-45 text-primary" />
    </div>
  );
}

export default Notifications;
