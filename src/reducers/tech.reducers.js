import {List} from 'immutable';

import {actions} from '../actions/tech.actions';

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
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999559/webpack_an3ush.jpg'
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
  },
  {
    key: 'karma',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914879/karma_otzuq9.png'
  },
  {
    key: 'yeoman',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999559/yeoman_pxdiao.png'
  },
  {
    key: 'gulp',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999558/gulp_gf6yr4.png'
  },
  {
    key: 'bootstrap',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914878/bootstrap_xthzqp.png'
  },
  {
    key: 'babel',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999558/babel_e3x8wc.png'
  },
  {
    key: 'aws',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914878/aws_kdkxcb.png'
  },
  {
    key: 'nodejs',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914879/nodejs_auyd1r.png'
  },
  {
    key: 'aspnetcore',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999558/aspnetcore_lkvkmz.png'
  },
  {
    key: 'jira',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999558/jira_xksgrh.png'
  },
  {
    key: 'teamcity',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/teamcity_g6xsuu.png'
  },
  {
    key: 'toggl',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/toggl_gak7p4.png'
  },
  {
    key: 'reactjs',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/reactjs_fhmmo5.png'
  },
  {
    key: 'postcss',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914880/postcss_n6i1d7.png'
  },
  {
    key: 'mongodb',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474999558/mongodb_uybc5y.png'
  },
  {
    key: 'elm',
    url: 'http://res.cloudinary.com/hally9k/image/upload/c_scale,w_60/v1474914878/elm_hijrdz.png'
  }
]);

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.HAL__TECH__ROTATE:
      let last = state.last();
      return state
              .pop()
              .unshift(last);
    default:
      return state;
  }
}
