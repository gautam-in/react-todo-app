import React from 'react';
import AppRoutes from './AppRoutes';
import { TodoProvider } from './store';

const App = () => {
  return (
    <TodoProvider>
      <AppRoutes />
    </TodoProvider>
  );
};

export default App;
