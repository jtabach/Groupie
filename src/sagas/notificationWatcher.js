import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COMPLETED,
  VIEW_NOTIFICATION,
  VIEW_NOTIFICATION_COMPLETED,
  VIEW_ALL_NOTIFICATIONS,
  VIEW_ALL_NOTIFICATIONS_COMPLETED,
  DISMISS_NOTIFICATIONS,
  DISMISS_NOTIFICATIONS_COMPLETED
} from '../types/notificationTypes';

function* notificationPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/notification',
    action.payload
  );
  if (!response.success) {
    console.log('handle failed notification');
  }
}

function* fetchNotificationsRequest(action) {
  const response = yield call(
    getRequest,
    `http://localhost:5000/api/notification`
  );
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
    `http://localhost:5000/api/notification/view`,
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
    `http://localhost:5000/api/notification/viewAll`,
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
    `http://localhost:5000/api/notification/dismiss`,
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

export function* notificationWatcher() {
  yield takeLatest(CREATE_NOTIFICATION, notificationPostRequest);
  yield takeLatest(FETCH_NOTIFICATIONS, fetchNotificationsRequest);
  yield takeLatest(VIEW_NOTIFICATION, viewNotificationRequest);
  yield takeLatest(VIEW_ALL_NOTIFICATIONS, viewAllNotifications);
  yield takeLatest(DISMISS_NOTIFICATIONS, dismissNotificationsRequest);
}
