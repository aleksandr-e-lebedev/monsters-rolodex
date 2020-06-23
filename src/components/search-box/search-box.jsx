import React from 'react';
import PropTypes from 'prop-types';

import './search-box.css';

const SearchBox = ({ placeholder, value, handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
