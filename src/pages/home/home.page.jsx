import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectImagesToggle } from 'redux/images/images.selectors';

import SearchBar from 'components/search-bar/search-bar.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Spinner from 'components/spinner/spinner.component';

import { HomeContainer } from './home.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  imagesToggle: selectImagesToggle,
});

const ImageList = lazy(() => import('components/images-list/images-list.component'));

const Home = ({ imagesToggle }) => (
  <HomeContainer>
    <SearchBar />

    {imagesToggle === 'on' && (
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <ImageList />
        </Suspense>
      </ErrorBoundary>
    )}
  </HomeContainer>
);

/* -------------------------------------------------------------------------- */

Home.propTypes = {
  imagesToggle: PropTypes.string,
};

export default connect(mapStateToProps)(Home);
