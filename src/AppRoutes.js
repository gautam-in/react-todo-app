import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import AddTodo from './components/pages/AddTodo';
import CompletedTodos from './components/pages/CompletedTodos';
import PendingTodos from './components/pages/PendingTodos';

// import Lodable from 'react-loadable';
// import Loading from './components/atom/Loading';

// const Main = Lodable({
//   loader: () =>
//     import(/* webpackChunkName: "Index" */ './components/pages/Main'),
//   loading: Loading
// });
// const AddTodo = Lodable({
//   loader: () =>
//     import(/* webpackChunkName: "AddTodo" */ './components/pages/AddTodo'),
//   loading: Loading
// });
// const CompletedTodos = Lodable({
//   loader: () =>
//     import(/* webpackChunkName: "CompletedTodos" */ './components/pages/CompletedTodos'),
//   loading: Loading
// });
// const PendingTodos = Lodable({
//   loader: () =>
//     import(/* webpackChunkName: "PendingTodos" */ './components/pages/PendingTodos'),
//   loading: Loading
// });

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/new" component={AddTodo} />
    <Route path="/completed" component={CompletedTodos} />
    <Route path="/pending" component={PendingTodos} />
  </Switch>
);

export default AppRouter;
