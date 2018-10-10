import React, { createContext, Component } from 'react';
import todoData from '../data/todoData';

const { Provider, Consumer } = createContext();

const __todoData__ = todoData || [];

export class TodoProvider extends Component {
  state = { todos: __todoData__ };

  getTodoList = () => this.state.todos;

  getCompleted = () => this.state.todos.filter(todo => todo.isCompleted);

  getPending = () => this.state.todos.filter(todo => !todo.isCompleted);

  addTodo = todo => {
    this.setState(prevState => ({
      todos: prevState.todos.concat(todo)
    }));
  };

  toggleTodoState = id => {
    this.setState(prevState => {
      const newState = { ...prevState };
      const todoItem = newState.todos.find(todo => todo.id === id);
      todoItem.isCompleted = !todoItem.isCompleted;
      return newState;
    });
  };

  render() {
    const todoValue = {
      addTodo: this.addTodo,
      getTodoList: this.getTodoList,
      toggleTodoState: this.toggleTodoState,
      getPending: this.getPending,
      getCompleted: this.getCompleted
    };
    return <Provider value={todoValue} children={this.props.children} />;
  }
}

export const TodoConsumer = ({ render }) => (
  <Consumer>{value => render(value)}</Consumer>
);
