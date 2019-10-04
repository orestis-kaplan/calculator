import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const colors = {
  grey: '#e0e0e0',
  orange: '#f5913f',
};

const Button = ({
  name, wide, color, handleClick,
}) => 
  (
    <button
      type="button"
      className="button"
      style={{
        background: (!color) ? colors.grey : colors.orange,
        width: (wide) ? '50%' : '25%',
      }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );


Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
