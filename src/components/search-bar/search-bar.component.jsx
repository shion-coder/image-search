import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchInput } from 'redux/search/search.selectors';
import { fetchImagesStart } from 'redux/images/images.actions';
import { onSearchChange } from 'redux/search/search.actions';

import { SearchBarContainer } from './search-bar.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  searchInput: selectSearchInput,
});

const SearchBar = ({ searchInput, onSearchChange, fetchImagesStart }) => {
  const onSubmit = async e => {
    e.preventDefault();

    fetchImagesStart(searchInput);
    onSearchChange('');
  };

  return (
    <SearchBarContainer>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">
          Images Search
          <input
            type="text"
            id="search"
            placeholder="..."
            value={searchInput}
            autoComplete="off"
            onChange={e => onSearchChange(e.target.value)}
          />
        </label>
      </form>
    </SearchBarContainer>
  );
};

/* -------------------------------------------------------------------------- */

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  onSearchChange: PropTypes.func,
  fetchImagesStart: PropTypes.func,
};

export default connect(mapStateToProps, { onSearchChange, fetchImagesStart })(SearchBar);
