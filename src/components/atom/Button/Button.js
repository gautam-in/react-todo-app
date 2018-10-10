import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, label }) => (
  <button type={type} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired
};

export default Button;
