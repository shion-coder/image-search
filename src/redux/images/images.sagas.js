import { takeLatest, all, call, put, cancelled } from 'redux-saga/effects';

import { CancelToken } from 'axios';

import { makeImagesRequest } from 'api/api';

import { FETCH_IMAGES_TRIGGER, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from './images.types';

/* -------------------------------------------------------------------------- */

const imagesStart = function*({ payload }) {
  const source = CancelToken.source();

  yield put({ type: FETCH_IMAGES_REQUEST });

  try {
    const data = yield call(makeImagesRequest, payload);

    yield put({ type: FETCH_IMAGES_SUCCESS, payload: data.results });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      yield put({ type: FETCH_IMAGES_FAILURE, payload: { ...error, message: 'Response Error !' } });
    } else if (error.request) {
      // The request was made but no response was received
      error.code === 'ECONNABORTED'
        ? yield put({ type: FETCH_IMAGES_FAILURE, payload: { ...error, message: 'Network Timeout !' } })
        : yield put({ type: FETCH_IMAGES_FAILURE, payload: { ...error, message: 'Network Error !' } });
    } else {
      // Something happened in setting up the request that triggered an Error
      yield put({ type: FETCH_IMAGES_FAILURE, payload: { ...error, message: 'Error!' } });
    }
  } finally {
    if (yield cancelled()) {
      source.cancel();
    }
  }
};

const getImagesTrigger = function*() {
  yield takeLatest(FETCH_IMAGES_TRIGGER, imagesStart);
};

/* -------------------------------------------------------------------------- */

export const imagesSaga = function*() {
  yield all([call(getImagesTrigger)]);
};
