import axios from 'axios';
import axiosRetry from 'axios-retry';

import { IMAGES_URL } from 'config/consts';

/* -------------------------------------------------------------------------- */

// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

export const makeImagesRequest = async searchInput => {
  const { data } = await axios.get(IMAGES_URL, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API}`,
    },
    params: { query: searchInput },
  });

  return data;
};
