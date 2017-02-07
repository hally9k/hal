import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from '../middleware/logger.middleware';


const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk, logger));
};

export {
  configureStore
}
