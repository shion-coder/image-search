import { createReducer } from 'redux/create-reducer';

import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from './images.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  toggle: 'off',
  status: false,
  imagesList: [],
  isError: false,
  error: {},
};

const reducer = {
  [FETCH_IMAGES_REQUEST]: state => ({
    ...state,
    toggle: 'on',
    status: false,
    imagesList: [],
    isError: false,
    error: {},
  }),
  [FETCH_IMAGES_SUCCESS]: (state, payload) => ({
    ...state,
    status: true,
    imagesList: payload,
  }),
  [FETCH_IMAGES_FAILURE]: (state, payload) => ({
    ...state,
    status: true,
    isError: true,
    error: payload,
  }),
};

export const imagesReducer = createReducer(initialState, reducer);
