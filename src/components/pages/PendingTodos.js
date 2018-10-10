import React from 'react';
import Layout from '../molecule/Layout';
import TodoList from '../molecule/TodoList';
import { TodoConsumer } from '../../store';

const PendingTodos = () => (
  <Layout>
    <h1>Pending Todos</h1>
    <TodoConsumer
      render={({ getPending, toggleTodoState }) => (
        <TodoList
          onToggle={toggleTodoState}
          todoList={getPending()}
          editable={false}
        />
      )}
    />
  </Layout>
);

export default PendingTodos;
