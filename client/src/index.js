import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact />
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
