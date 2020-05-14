import React, { useEffect, Suspense, lazy } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { setDimensions } from 'redux/dimensions/dimensions.actions';

import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Spinner from 'components/spinner/spinner.component';

import { debounce } from 'lodash-es';

/* -------------------------------------------------------------------------- */

const Home = lazy(() => import('pages/home/home.page'));
const Error = lazy(() => import('components/error/error.component'));

const App = ({ setDimensions }) => {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setDimensions]);

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* No match Page */}
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

/* -------------------------------------------------------------------------- */

App.propTypes = {
  setDimensions: PropTypes.func,
};

export default connect(null, { setDimensions })(App);
