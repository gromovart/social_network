// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const AuthPage = lazy(() => import('./auth'));
const NewsFeedPage = lazy(() => import('./news-feed'));
const ProfilePage = lazy(() => import('./profile-page'));
const UserPage = lazy(() => import('./user-page'));

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/news-feed" component={NewsFeedPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/user" component={UserPage} />
      <Redirect to="/" />
    </Switch>
  );
};
