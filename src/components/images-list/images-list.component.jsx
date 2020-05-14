import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectImagesList,
  selectImagesStatus,
  selectImagesIsError,
  selectImagesError,
} from 'redux/images/images.selectors';

import Image from 'components/image/image.component';
import Spinner from 'components/spinner/spinner.component';

import { ImagesListContainer, ImagesNotFound } from './images-list.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  images: selectImagesList,
  responseStatus: selectImagesStatus,
  isError: selectImagesIsError,
  error: selectImagesError,
});

const ImageList = ({ images, responseStatus, isError, error }) => {
  return images.length ? (
    <ImagesListContainer>
      {images.map(image => (
        <Image key={image.id} imageDetail={image} />
      ))}
    </ImagesListContainer>
  ) : responseStatus && !isError ? (
    <ImagesNotFound>Data Not Found</ImagesNotFound>
  ) : isError ? (
    <ImagesNotFound>{error.message}</ImagesNotFound>
  ) : (
    <Spinner />
  );
};

/* -------------------------------------------------------------------------- */

ImageList.propTypes = {
  images: PropTypes.array,
  responseStatus: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.object,
};

export default connect(mapStateToProps)(ImageList);
