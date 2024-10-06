"use client";

import { notificationClient } from "@/core/grpc-clients";
import {
  getUnreadNotifications,
  subscribeToNotifications,
} from "@/core/notifications";
import { SubscribeRequest } from "@/lib/grpc/proto/notification/notification_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useNotificationStore } from "@/stores/notifications/notifications.store";
import React, { createContext, useContext, useEffect, useCallback } from "react";

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

  const handleInitialNotifications = useCallback(async () => {
    if (!user) return;

    try {
      const notifications = await getUnreadNotifications({
        token: user.token,
        user_id: user.userId,
      });
      setNotifications(notifications);
    } catch (error) {
      console.error("Failed to fetch initial notifications:", error);
    }
  }, [user, setNotifications]);

  useEffect(() => {
    handleInitialNotifications();
  }, [handleInitialNotifications]);

  const handleSubscription = useCallback(() => {
    if (!user) return;

    const request = new SubscribeRequest();
    request.setUserId(user.userId);

    const stream = notificationClient.subscribeToNotifications(request);
    console.log("Subscribed to notifications:", stream);

    stream.on("status", (status) => {
      console.log("Notification stream status:", status);
    });

    stream.on("data", (response) => {
      const newNotification = response.getNotification();
      if (newNotification) {
        addNotification(newNotification.toObject());
      }
    });

    const handleError = (error: Error) => {
      console.error("Notification stream error:", error);
      // Implement reconnection logic
      setTimeout(() => handleSubscription(), 5000); // Retry after 5 seconds
    };

    stream.on("error", handleError);

    stream.on("end", () => {
      console.log("Notification stream ended");
      // Implement reconnection logic
      setTimeout(() => handleSubscription(), 5000); // Retry after 5 seconds
    });

    return () => {
      stream.cancel();
    };
  }, [user, addNotification]);

  useEffect(() => {
    const unsubscribe = handleSubscription();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [handleSubscription]);

  const contextValue: NotificationContextType = {
    subscribeToNotifications: useCallback(
      (userId: number) => subscribeToNotifications({ userId }),
      []
    ),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};