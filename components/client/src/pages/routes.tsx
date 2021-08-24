// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { RouteWrapper } from '../app/providers/with-router';

const SignInPage = lazy(() => import('./auth/sign-in'));
const SignUpPage = lazy(() => import('./auth/sign-up'));
const NewsFeedPage = lazy(() => import('./user/news'));
const ProfilePage = lazy(() => import('./user/profile'));
const UserPage = lazy(() => import('./user/id'));
const NotFoundPage = lazy(() => import('./notFoundPage'));

type Props = {
  routes: {
    SIGN_IN_PAGE_PATH: string;
    SIGN_UP_PAGE_PATH: string;
    USER_PAGE_PATH: string;
    NEWS_PAGE_PATH: string;
    USER_PROFILE_PAGE_PATH: string;
  };
};

const Routing = ({ routes }: Props) => {
  console.log('Routing', routes);
  return (
    <Switch>
      <RouteWrapper
        exact
        path={routes.SIGN_IN_PAGE_PATH}
        component={SignInPage}
      />
      <RouteWrapper
        exact
        path={routes.SIGN_UP_PAGE_PATH}
        component={SignUpPage}
      />
      <RouteWrapper
        close
        exact
        path={routes.USER_PAGE_PATH}
        component={UserPage}
      />
      <RouteWrapper
        close
        exact
        path={routes.NEWS_PAGE_PATH}
        component={NewsFeedPage}
      />
      <RouteWrapper
        close
        exact
        path={routes.USER_PROFILE_PAGE_PATH}
        component={ProfilePage}
      />
      <RouteWrapper path={['*']} component={NotFoundPage} />
    </Switch>
  );
};

export default Routing;
