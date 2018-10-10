import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, id, label, type, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} name={name} id={id} onChange={onChange} />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Input;
