import { all, call } from 'redux-saga/effects';

import { imagesSaga } from 'redux/images/images.sagas';

/* -------------------------------------------------------------------------- */

export const rootSaga = function*() {
  yield all([call(imagesSaga)]);
};
