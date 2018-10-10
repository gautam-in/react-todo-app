import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ isChecked, onToggle }) => (
  <input type="checkbox" defaultChecked={isChecked} onChange={onToggle} />
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Checkbox;
