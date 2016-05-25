
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import configureStore from './store';

import 'semantic-ui-css/semantic.css';
import 'odyssee-client/styles/styles.scss';
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
