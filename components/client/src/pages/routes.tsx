// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { RouteWrapper } from '../app/providers/with-router';

const HomePage = lazy(() => import('./home'));
const NewsFeedPage = lazy(() => import('./user/news'));
const ProfilePage = lazy(() => import('./user/profile'));
const UserPage = lazy(() => import('./user/id'));
const NotFoundPage = lazy(() => import('./notFoundPage'));

type Props = {
  routes: {
    HOME_PAGE_PATH: string;
    SIGN_IN_PAGE_PATH: string;
    SIGN_UP_PAGE_PATH: string;
    USER_PAGE_PATH: string;
    NEWS_PAGE_PATH: string;
    USER_PROFILE_PAGE_PATH: string;
  };
};

const Routing = ({ routes }: Props) => {
  return (
    <Switch>
      <RouteWrapper exact path={routes.HOME_PAGE_PATH} component={HomePage} />
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
