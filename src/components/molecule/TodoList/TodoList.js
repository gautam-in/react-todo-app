import React from 'react';
import TodoItem from './TodoList.TodoItem';
import EmptyTodo from './TodoList.EmptyTodo';
import PropTypes from 'prop-types';

const TodoList = ({ onToggle, todoList, editable }) => {
  let todos;
  if (todoList.length > 0) {
    todos = (
      <ul>
        {todoList.map(todo => (
          <TodoItem
            onToggle={onToggle}
            key={todo.id}
            editable={editable}
            {...todo}
          />
        ))}
      </ul>
    );
  } else {
    todos = <EmptyTodo />;
  }
  return todos;
};

TodoList.propTypes = {
  onToggle: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
  editable: PropTypes.bool.isRequired
};

export default TodoList;
