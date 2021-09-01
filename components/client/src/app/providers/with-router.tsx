import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { routesNames } from '../../shared/constants';
import Spinner from './../../shared/ui/Spinner';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
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

  if (!Component) return null;

  return (
    <Route
      render={(routeRenderProps) => {
        return (
          (close && !token && (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: routeRenderProps.location },
              }}
            />
          )) || <Component {...routeRenderProps} />
        );
      }}
    />
  );
};
