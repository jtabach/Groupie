import { put, takeLatest, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';

import {
  FETCH_PLAYER_NEWS,
  FETCH_PLAYER_NEWS_COMPLETED
} from '../types/newsTypes';

const socketServerURL = 'http://localhost:5000';
let socket;

// wrapping function for socket.on
const connect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

// This is how a channel is created
const createSocketChannel = (socket) =>
  eventChannel((emit) => {
    const handler = (data) => {
      emit(data);
    };
    socket.on('updated news', handler);
    return () => {
      socket.off('updated news', handler);
    };
  });

function* fetchPlayerNewsRequest(action) {
  // connect to the server
  const socket = yield call(connect);

  // then create a socket channel
  const socketChannel = yield call(createSocketChannel, socket);

  // then put the new data into the reducer
  while (true) {
    const response = yield take(socketChannel);
    if (response.news) {
      yield put({
        type: FETCH_PLAYER_NEWS_COMPLETED,
        payload: { data: response }
      });
    } else {
      console.log('handle failed to fetch player news');
    }
  }
}

export function* newsWatcher() {
  yield takeLatest(FETCH_PLAYER_NEWS, fetchPlayerNewsRequest);
}
