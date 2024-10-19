import * as jspb from 'google-protobuf'



export class Notification extends jspb.Message {
  getId(): number;
  setId(value: number): Notification;

  getType(): NotificationType;
  setType(value: NotificationType): Notification;

  getTo(): string;
  setTo(value: string): Notification;

  getSubject(): string;
  setSubject(value: string): Notification;

  getContent(): string;
  setContent(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: number,
    type: NotificationType,
    to: string,
    subject: string,
    content: string,
  }
}

export class SendNotificationRequest extends jspb.Message {
  getType(): NotificationType;
  setType(value: NotificationType): SendNotificationRequest;

  getTo(): string;
  setTo(value: string): SendNotificationRequest;

  getSubject(): string;
  setSubject(value: string): SendNotificationRequest;

  getContent(): string;
  setContent(value: string): SendNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationRequest): SendNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: SendNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationRequest;
  static deserializeBinaryFromReader(message: SendNotificationRequest, reader: jspb.BinaryReader): SendNotificationRequest;
}

export namespace SendNotificationRequest {
  export type AsObject = {
    type: NotificationType,
    to: string,
    subject: string,
    content: string,
  }
}

export class SendNotificationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SendNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationResponse): SendNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: SendNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationResponse;
  static deserializeBinaryFromReader(message: SendNotificationResponse, reader: jspb.BinaryReader): SendNotificationResponse;
}

export namespace SendNotificationResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetUnreadNotificationsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetUnreadNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadNotificationsRequest): GetUnreadNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnreadNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadNotificationsRequest;
  static deserializeBinaryFromReader(message: GetUnreadNotificationsRequest, reader: jspb.BinaryReader): GetUnreadNotificationsRequest;
}

export namespace GetUnreadNotificationsRequest {
  export type AsObject = {
    userId: number,
  }
}

export class GetUnreadNotificationsResponse extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): GetUnreadNotificationsResponse;
  clearNotificationsList(): GetUnreadNotificationsResponse;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadNotificationsResponse): GetUnreadNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUnreadNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadNotificationsResponse;
  static deserializeBinaryFromReader(message: GetUnreadNotificationsResponse, reader: jspb.BinaryReader): GetUnreadNotificationsResponse;
}

export namespace GetUnreadNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class MarkNotificationsAsReadRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): MarkNotificationsAsReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkNotificationsAsReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkNotificationsAsReadRequest): MarkNotificationsAsReadRequest.AsObject;
  static serializeBinaryToWriter(message: MarkNotificationsAsReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkNotificationsAsReadRequest;
  static deserializeBinaryFromReader(message: MarkNotificationsAsReadRequest, reader: jspb.BinaryReader): MarkNotificationsAsReadRequest;
}

export namespace MarkNotificationsAsReadRequest {
  export type AsObject = {
    userId: number,
  }
}

export class MarkNotificationsAsReadResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): MarkNotificationsAsReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkNotificationsAsReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkNotificationsAsReadResponse): MarkNotificationsAsReadResponse.AsObject;
  static serializeBinaryToWriter(message: MarkNotificationsAsReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkNotificationsAsReadResponse;
  static deserializeBinaryFromReader(message: MarkNotificationsAsReadResponse, reader: jspb.BinaryReader): MarkNotificationsAsReadResponse;
}

export namespace MarkNotificationsAsReadResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class SubscribeRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): SubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    userId: number,
  }
}

export class NotificationEvent extends jspb.Message {
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): NotificationEvent;
  hasNotification(): boolean;
  clearNotification(): NotificationEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationEvent): NotificationEvent.AsObject;
  static serializeBinaryToWriter(message: NotificationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationEvent;
  static deserializeBinaryFromReader(message: NotificationEvent, reader: jspb.BinaryReader): NotificationEvent;
}

export namespace NotificationEvent {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export enum NotificationType { 
  EMAIL = 0,
  IN_APP = 1,
}
