import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import Restaurants from './components/Restaurants';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/main"
          render={(renderProps) => {
            return (
              <MainMenu {...renderProps} />
            );
          }}
          exact
        />

        <Route
          path="/restaurants"
          render={(renderProps) => {
            return (
              <Restaurants {...renderProps} />
            );
          }}
          exact
        />
      </Switch>
    );
  }
}

export default App;
