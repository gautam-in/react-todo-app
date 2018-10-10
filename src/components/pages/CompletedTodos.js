import React from 'react';
import Layout from '../molecule/Layout';
import TodoList from '../molecule/TodoList';
import { TodoConsumer } from '../../store';

const CompletedTodos = () => (
  <Layout>
    <h1>Completed Todos</h1>
    <TodoConsumer
      render={({ getCompleted, toggleTodoState }) => (
        <TodoList
          onToggle={toggleTodoState}
          todoList={getCompleted()}
          editable={false}
        />
      )}
    />
  </Layout>
);

export default CompletedTodos;
