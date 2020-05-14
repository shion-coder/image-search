import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const imagesSelector = state => state.images;

export const selectImagesToggle = createSelector([imagesSelector], images => images.toggle);

export const selectImagesList = createSelector([imagesSelector], images => images.imagesList);

export const selectImagesStatus = createSelector([imagesSelector], images => images.status);

export const selectImagesIsError = createSelector([imagesSelector], images => images.isError);

export const selectImagesError = createSelector([imagesSelector], images => images.error);
