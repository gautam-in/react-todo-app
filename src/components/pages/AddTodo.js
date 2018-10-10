import React from 'react';
import Layout from '../molecule/Layout';
import { TodoConsumer } from '../../store';
import AddTodoForm from '../organism/AddTodoForm';

const AddTodo = () => (
  <Layout>
    <h1>Add Todo</h1>
    <TodoConsumer
      render={({ addTodo }) => <AddTodoForm onSubmit={addTodo} />}
    />
  </Layout>
);

export default AddTodo;
