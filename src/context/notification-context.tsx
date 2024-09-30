"use client";

import { notificationClient } from "@/core/grpc-clients";
import {
  getUnreadNotifications,
  subscribeToNotifications,
} from "@/core/notifications";
import { SubscribeRequest } from "@/lib/grpc/proto/notification/notification_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useNotificationStore } from "@/stores/notifications/notifications.store";
import React, { createContext, useContext, useEffect } from "react";

interface NotificationContextType {
  subscribeToNotifications: (userId: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const { addNotification, setNotifications } = useNotificationStore();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) {
      return;
    }

    // handle initial notifications fetch
    getUnreadNotifications({ token: user.token, user_id: user.userId }).then(
      (notifications) => {
        console.log("Initial notifications fetchedsss:", notifications); 
        setNotifications(notifications);
      }
    );
  }, [user, setNotifications]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const request = new SubscribeRequest();
    request.setUserId(user.userId);

    const stream = notificationClient.subscribeToNotifications(request);
    console.log("Subscribed to notifications:", stream);

    stream.on("status", (status) => {
      // console.log("Notification stream status:", status);
    });

    stream.on("data", (response) => {
      const newNotification = response.getNotification();
      // Handle the new notification (e.g., update UI, show a toast message)
      console.log("New notification received:", newNotification);

      if (newNotification) {
        addNotification(newNotification.toObject());
      }
    });

    stream.on("error", (error) => {
      console.error("Error in notification stream:", error);
      // Implement reconnection logic here
    });

    stream.on("end", () => {
      console.log("Notification stream ended");
      // Implement reconnection logic here
    });

    return () => {
      // Clean up the subscription when the component unmounts
      stream.cancel();
    };
  }, [user, addNotification]);

  const contextValue: NotificationContextType = {
    subscribeToNotifications: (userId: number) =>
      subscribeToNotifications({ userId }),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
