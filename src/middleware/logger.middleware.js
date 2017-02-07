import createLogger from 'redux-logger';

export default createLogger({
  predicate: (getState, action) => !action.type.startsWith('HAL__HEADER__GREEN') && !action.type.startsWith('HAL__HEADER__BLUE'),
  collapsed: true
});
