import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import CONFIG from '../config';

import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COMPLETED,
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_COMPLETED,
  VIEW_ALL_NOTIFICATIONS,
  VIEW_ALL_NOTIFICATIONS_COMPLETED,
  DISMISS_NOTIFICATIONS,
  DISMISS_NOTIFICATIONS_COMPLETED,
  CHANGE_NOTIFICATION_SETTINGS,
  CHANGE_NOTIFICATION_SETTINGS_COMPLETED,
  CHANGE_NOTIFICATION_SETTINGS_FAILED
} from '../types/notificationTypes';

function* createNotificationRequest(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/notification/${action.payload.variant}`,
    action.payload
  );
  if (!response.success) {
    console.log('handle failed notification');
  }
}

function* fetchNotificationsRequest(action) {
  const response = yield call(getRequest, `${CONFIG.serverUrl}/notification`);
  if (response.notifications) {
    yield put({
      type: FETCH_NOTIFICATIONS_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to fetch notifications');
  }
}

function* viewNotificationRequest(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/notification/view`,
    action.payload
  );
  if (response.notification) {
    yield put({
      type: VIEW_NOTIFICATION_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to view notification');
  }
}

function* viewAllNotifications(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/notification/viewAll`,
    action.payload
  );
  if (response.notifications) {
    yield put({
      type: VIEW_ALL_NOTIFICATIONS_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to dismiss notifications');
  }
}

function* dismissNotificationsRequest(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/notification/dismiss`,
    action.payload
  );
  if (response.notifications) {
    yield put({
      type: DISMISS_NOTIFICATIONS_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to dismiss notifications');
  }
}

function* changeNotificationSettingsRequest(action) {
  console.log(action.payload);
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/notification/settings`,
    action.payload
  );
  if (response.verify) {
    yield put({
      type: CHANGE_NOTIFICATION_SETTINGS_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('failed settings');
    yield put({
      type: CHANGE_NOTIFICATION_SETTINGS_FAILED,
      payload: { data: response }
    });
  }
}

export function* notificationWatcher() {
  yield takeLatest(CREATE_NOTIFICATION, createNotificationRequest);
  yield takeLatest(FETCH_NOTIFICATIONS, fetchNotificationsRequest);
  yield takeLatest(VIEW_NOTIFICATION, viewNotificationRequest);
  yield takeLatest(VIEW_ALL_NOTIFICATIONS, viewAllNotifications);
  yield takeLatest(DISMISS_NOTIFICATIONS, dismissNotificationsRequest);
  yield takeLatest(
    CHANGE_NOTIFICATION_SETTINGS,
    changeNotificationSettingsRequest
  );
}
