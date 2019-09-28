import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ result }) => (
  <div className="display-comp">
    <div className="result">
      <p style={{ fontSize: '28px' }}>{result}</p>
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
