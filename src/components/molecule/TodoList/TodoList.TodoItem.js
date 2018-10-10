import React from 'react';
import Checkbox from '../../atom/Checkbox';
import PropTypes from 'prop-types';

const TodoItem = ({ id, label, isCompleted, onToggle, editable }) => (
  <li className={isCompleted ? 'checked' : 'unchecked'}>
    {editable ? (
      <Checkbox isChecked={isCompleted} onToggle={() => onToggle(id)} />
    ) : null}
    {label}
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired
};

export default TodoItem;
