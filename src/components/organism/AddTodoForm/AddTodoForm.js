import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from '../../atom/Button';
import Input from '../../atom/Input';

class AddTodoForm extends Component {
  state = {
    shouldRedirect: false
  };
  onAddTodo = event => {
    event.preventDefault();
    if (this.todoValue !== '') {
      this.props.onSubmit({
        id: Date.now(),
        label: this.todoValue,
        isCompleted: false
      });
      this.setState(() => ({
        shouldRedirect: true
      }));
    }
  };
  onValueChange = event => {
    this.todoValue = event.target.value;
  };
  render() {
    return this.state.shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.onAddTodo}>
        <Input
          name="todo"
          id="todo"
          label="Enter Todo"
          type="text"
          onChange={this.onValueChange}
        />
        <Button type="submit" label="Add Todo" />
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddTodoForm;
