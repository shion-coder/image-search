import { ON_SEARCH_CHANGE } from './search.types';

/* -------------------------------------------------------------------------- */

/**
 * Control the value of input
 * @param {String} input
 */
export const onSearchChange = input => ({
  type: ON_SEARCH_CHANGE,
  payload: input,
});
