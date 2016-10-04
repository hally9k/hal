import {combineReducers} from 'redux';

import header from './header.reducers';
import tech from './tech.reducers';
import footer from './footer.reducers';
export default combineReducers({
  header,
  tech,
  footer
});
