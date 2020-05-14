import { FETCH_IMAGES_TRIGGER } from './images.types';

/* -------------------------------------------------------------------------- */

export const fetchImagesStart = searchInput => ({
  type: FETCH_IMAGES_TRIGGER,
  payload: searchInput,
});
