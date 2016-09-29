import {combineReducers} from 'redux';

import logos from './logos.reducers';
import hal from './hal.reducers';

export default combineReducers({
  hal,
  logos
});
