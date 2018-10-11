
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.render(
    <Router>
      <Routes />
    </Router>,
  document.getElementById('app')
);

