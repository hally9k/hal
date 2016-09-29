import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


import Hal from './hal/hal.container';
import './index.css';

import reducers from './reducers';

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store} >
    <Hal />
  </Provider>,
  document.getElementById('root')
);
