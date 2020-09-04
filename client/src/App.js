import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Order from './components/Order';
import Dropoff from './components/Dropoff';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={(renderProps) => {
            return (
              <Order {...renderProps} />
            );
          }}
          exact
        />

        <Route
          path="/dropoff"
          render={(renderProps) => {
            return (
              <Dropoff {...renderProps} />
            );
          }}
          exact
        />
      </Switch>
    );
  }
}

export default App;
