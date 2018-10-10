import React from 'react';
import Layout from '../molecule/Layout';
import TodoList from '../molecule/TodoList';
import { TodoConsumer } from '../../store';

const Main = () => (
  <Layout>
    <h1>Welcome to Todo</h1>
    <TodoConsumer
      render={({ getTodoList, toggleTodoState }) => (
        <TodoList
          onToggle={toggleTodoState}
          todoList={getTodoList()}
          editable={true}
        />
      )}
    />
  </Layout>
);

export default Main;
