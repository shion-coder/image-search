import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const searchSelector = state => state.search;

export const selectSearchInput = createSelector([searchSelector], search => search.input);
