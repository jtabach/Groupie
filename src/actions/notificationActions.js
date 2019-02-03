import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  VIEW_NOTIFICATION,
  VIEW_ALL_NOTIFICATIONS,
  DISMISS_NOTIFICATIONS,
  CHANGE_NOTIFICATION_SETTINGS
} from '../types/notificationTypes';

export const createNotification = (notificationData) => ({
  type: CREATE_NOTIFICATION,
  payload: notificationData
});

export const fetchNotifications = () => ({
  type: FETCH_NOTIFICATIONS,
  payload: {}
});

export const viewNotification = (notificationData) => ({
  type: VIEW_NOTIFICATION,
  payload: notificationData
});

export const viewAllNotifications = (notificationsArray) => ({
  type: VIEW_ALL_NOTIFICATIONS,
  payload: notificationsArray
});

export const dismissNotifications = (notificationsArray) => ({
  type: DISMISS_NOTIFICATIONS,
  payload: notificationsArray
});

export const changeNotificationSettings = (notificationSettings) => ({
  type: CHANGE_NOTIFICATION_SETTINGS,
  payload: notificationSettings
});
