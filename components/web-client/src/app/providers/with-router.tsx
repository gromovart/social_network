import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { routesNames } from '../../shared/constants';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  );

type Props = {
  component: () => React.ReactNode;
  close?: boolean;
} & any;

export const RouteWrapper = (props: Props) => {
  const token = 'asd';
  const redirectPath = routesNames.SIGN_UP_PAGE_PATH;

  const { component: Component, close } = props;
  console.log('HEY======', props);
  // if (!Component) return null;

  return (
    <Route
      render={(routeRenderProps) => {
        if (close && !token) {
          return (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: routeRenderProps.location },
              }}
            />
          );
        } else {
          return <Component {...routeRenderProps} />;
        }
      }}
    />
    // <Route {...props} />
  );
};
