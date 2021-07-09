// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const AuthPage = lazy(() => import('./auth'));
const TaskDetailsPage = lazy(() => import('./task-details'));

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/:taskId" component={TaskDetailsPage} />
      <Redirect to="/" />
    </Switch>
  );
};
