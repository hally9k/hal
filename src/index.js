import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store';
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

import Root from './components/root/root.component';
import './index.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
