import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Restaurants from './components/Restaurants';
import Partners from './components/Partners';
import Footer from './components/Footer';

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
        <Partners />
      </Switch>
    );
  }
}

export default App;
