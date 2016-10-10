import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import header from './header.reducers';
import tech from './tech.reducers';
import footer from './footer.reducers';

export default combineReducers({
  routing: routerReducer,
  header,
  tech,
  footer
});
