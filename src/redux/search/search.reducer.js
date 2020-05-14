import { createReducer } from 'redux/create-reducer';

import { ON_SEARCH_CHANGE } from './search.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  input: '',
};

const reducer = {
  [ON_SEARCH_CHANGE]: (state, payload) => ({ ...state, input: payload }),
};

export const searchReducer = createReducer(initialState, reducer);
