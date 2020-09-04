import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact >
        <Redirect path="/main" />
      </Route>
      <Header />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
