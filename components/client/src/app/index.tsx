import Routing from '../pages';
import { withProviders } from './providers';
import { routesNames } from '../shared/constants';
import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Routing routes={routesNames} />
    </div>
  );
};

export default withProviders(App);
