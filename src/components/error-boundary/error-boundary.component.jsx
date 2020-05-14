import React, { Component } from 'react';

import Error from 'components/error/error.component';

/* -------------------------------------------------------------------------- */

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  // Catch error in any of the children
  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  // Access to error and error info
  // componentDidCatch(error, info) {}

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    // Check whether or not have error throught hasErrored state
    if (hasErrored) {
      return <Error height="60vh" />;
    }

    return children;
  }
}

/* -------------------------------------------------------------------------- */

export default ErrorBoundary;
