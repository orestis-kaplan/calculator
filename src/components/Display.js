import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    {result}
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
Display.defaultProps = {
  result: '',
};

export default Display;
