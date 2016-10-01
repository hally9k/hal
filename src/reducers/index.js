import {combineReducers} from 'redux';

import logos from './logos.reducers';
import header from './header.reducers';

export default combineReducers({
  header,
  logos
});
