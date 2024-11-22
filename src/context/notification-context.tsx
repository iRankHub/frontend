"use client";
import { notificationClient } from "@/core/grpc-clients";
import {
  getUnreadNotifications,
  subscribeToNotifications,
} from "@/core/notifications";
import { SubscribeRequest } from "@/lib/grpc/proto/notification/notification_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { useNotificationStore } from "@/stores/notifications/notifications.store";
import React, { createContext, useContext, useEffect, useCallback, useRef } from "react";

interface NotificationContextType {
  subscribeToNotifications: (userId: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotificationContext must be used within a NotificationProvider");
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
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 5;
  const baseDelay = 5000; // 5 seconds
  const maxDelay = 30000; // 30 seconds
  const streamRef = useRef<any>(null);

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

  const calculateReconnectDelay = useCallback(() => {
    // Exponential backoff with jitter
    const exponentialDelay = Math.min(
      baseDelay * Math.pow(2, reconnectAttempts.current),
      maxDelay
    );
    // Add random jitter (±20% of delay)
    const jitter = exponentialDelay * 0.2 * (Math.random() - 0.5);
    return Math.floor(exponentialDelay + jitter);
  }, []);

  const handleSubscription = useCallback(() => {
    if (!user) return;

    const request = new SubscribeRequest();
    request.setUserId(user.userId);

    // Cancel existing stream if any
    if (streamRef.current) {
      streamRef.current.cancel();
    }

    const stream = notificationClient.subscribeToNotifications(request);
    streamRef.current = stream;
    
    console.log("Subscribed to notifications:", stream);

    stream.on("status", (status) => {
      console.log("Notification stream status:", status);
      if (status.code === 0) {
        // Successfully connected, reset reconnection attempts
        reconnectAttempts.current = 0;
      }
    });

    stream.on("data", (response) => {
      const newNotification = response.getNotification();
      if (newNotification) {
        addNotification(newNotification.toObject());
      }
    });

    const handleError = (error: Error) => {
      console.error("Notification stream error:", error);
      
      if (reconnectAttempts.current < maxReconnectAttempts) {
        const delay = calculateReconnectDelay();
        console.log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectAttempts.current + 1}/${maxReconnectAttempts})`);
        
        reconnectAttempts.current += 1;
        setTimeout(() => handleSubscription(), delay);
      } else {
        console.error("Max reconnection attempts reached. Please refresh the page or try again later.");
        // Here you could trigger a UI notification to inform the user
      }
    };

    stream.on("error", handleError);

    stream.on("end", () => {
      console.log("Notification stream ended");
      // Only attempt to reconnect if we haven't reached the maximum attempts
      if (reconnectAttempts.current < maxReconnectAttempts) {
        const delay = calculateReconnectDelay();
        console.log(`Stream ended. Attempting to reconnect in ${delay}ms (attempt ${reconnectAttempts.current + 1}/${maxReconnectAttempts})`);
        
        reconnectAttempts.current += 1;
        setTimeout(() => handleSubscription(), delay);
      }
    });

    return () => {
      if (streamRef.current) {
        streamRef.current.cancel();
        streamRef.current = null;
      }
    };
  }, [user, addNotification, calculateReconnectDelay]);

  useEffect(() => {
    handleInitialNotifications();
  }, [handleInitialNotifications]);

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