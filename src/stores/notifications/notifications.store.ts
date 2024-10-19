import { Notification } from '@/lib/grpc/proto/notification/notification_pb';
import { create } from 'zustand';

interface NotificationStore {
    notifications: Notification.AsObject[];
    setNotifications: (notifications: Notification.AsObject[]) => void;
    addNotification: (notification: Notification.AsObject) => void;
    removeNotification: (id: number) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
    notifications: [],
    setNotifications: (notifications) => set({ notifications }),
    addNotification: (notification: Notification.AsObject) =>
        set((state) => ({
            notifications: [...state.notifications, notification],
        })),
    removeNotification: (id) =>
        set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
        })),
}));