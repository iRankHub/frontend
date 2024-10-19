import {
    GetUnreadNotificationsRequest,
    GetUnreadNotificationsResponse,
    MarkNotificationsAsReadRequest,
    Notification,
    SubscribeRequest
} from "@/lib/grpc/proto/notification/notification_pb";
import { notificationClient } from "../grpc-clients";

export const getUnreadNotifications = async ({
    token,
    user_id
}: {
    token: string;
    user_id: number;
}): Promise<Notification.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetUnreadNotificationsRequest();
        request.setUserId(user_id);

        notificationClient.getUnreadNotifications(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().notificationsList);
            }
        });
    });
}

export const markNotificationsAsRead = async ({
    token,
    user_id
}: {
    token: string;
    user_id: number;
}): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = new MarkNotificationsAsReadRequest();
        request.setUserId(user_id);

        notificationClient.markNotificationsAsRead(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().success);
            }
        });
    });
}

export const subscribeToNotifications = ({
    userId,
}: {
    userId: number;
}) => {
    const request = new SubscribeRequest();
    request.setUserId(userId);

    const stream = notificationClient.subscribeToNotifications(request);

    stream.on('data', (response) => {
        const newNotification = response.getNotification();
        // Handle the new notification (e.g., update UI, show a toast message)
        console.log('New notification received:', newNotification);
    });

    stream.on('error', (error) => {
        console.error('Error in notification stream:', error);
        // Implement reconnection logic here
    });

    stream.on('end', () => {
        console.log('Notification stream ended');
        // Implement reconnection logic here
    });
}