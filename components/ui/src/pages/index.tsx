// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const SignInPage = lazy(() => import('./auth/sign-in'));
const SignUpPage = lazy(() => import('./auth/sign-up'));
const NewsFeedPage = lazy(() => import('./user/news'));
const ProfilePage = lazy(() => import('./user/profile'));
const UserPage = lazy(() => import('./user/id'));

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/auth/sign-in" component={SignInPage} />
      <Route exact path="/auth/sign-up" component={SignUpPage} />
      <Route exact path="user/id/:userId" component={UserPage} />
      <Route exact path="user/id/news" component={NewsFeedPage} />
      <Route exact path="user/id/profile/:profileId" component={ProfilePage} />
      <Route exact path="/user/:userId" component={UserPage} />
      <Redirect to="/" />
    </Switch>
  );
};
