import {List} from 'immutable';

import {actions} from '../actions/logos.actions';

const INITIAL_STATE = new List([
  {
    key: 'JS',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914879/js_lqn0d5.png'
  },
  {
    key: 'angular',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914878/angular_iimtxg.png'
  },
  {
    key: 'github',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914879/github_l0fjz4.jpg'
  },
  {
    key: 'redux',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/redux_jwedhc.png'
  },
  {
    key: 'webpack',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/webpack_iwlbes.jpg'
  },
  {
    key: 'kendo',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914879/kendo_ngglpm.jpg'
  },
  {
    key: 'octopus',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/octopus_uxl3qc.png'
  },
  {
    key: 'atom',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914878/atom_oftrpi.png'
  }
]);

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.HAL__LOGOS__ROTATE:
      let last = state.last();
      return state
              .pop()
              .unshift(last);
    default:
      return state;
  }
}
