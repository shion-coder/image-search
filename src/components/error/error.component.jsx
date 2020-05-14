import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import error from 'assets/images/error.png';

import { ErrorContainer, ErrorImage, ErrorInfo, ErrorTitle, ErrorText } from './error.styles';

/* -------------------------------------------------------------------------- */

const Error = ({ height }) => (
  <ErrorContainer height={height}>
    <ErrorImage imageUrl={error} />

    <ErrorInfo>
      <ErrorTitle>Sorry, this page isn&apos;t available.</ErrorTitle>
      <ErrorText>The link you followed may be broken, or the page may have been removed.</ErrorText>
      <Link to="/">Go back to Home Page</Link>
    </ErrorInfo>
  </ErrorContainer>
);

/* -------------------------------------------------------------------------- */

Error.propTypes = {
  height: PropTypes.string,
};

export default Error;
