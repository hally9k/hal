import {Map} from 'immutable';
import {actions} from '../actions/header.actions';

const INITIAL_STATE = new Map({
  jobTitles: [
    'coder',
    'father',
    'coach',
    'dreamer',
    'frontend engineer',
    'devops guy',
    'wannabe chef'
  ],
  currentJobTitleIndex: 0,
  greenJobTitle: 'coder',
  greenJobTitleShow: true,
  greenJobTitlePosition: 'center',
  blueJobTitle: 'father',
  blueJobTitleShow: false,
  blueJobTitlePosition: 'left',
});

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.HAL__HEADER__GREEN_JOB_TITLE_ENTERS:
      return greenJobTitleEnters(state, action);
    case actions.HAL__HEADER__GREEN_JOB_TITLE_LEAVES:
      return greenJobTitleLeaves(state, action);
    case actions.HAL__HEADER__BLUE_JOB_TITLE_ENTERS:
      return blueJobTitleEnters(state, action);
    case actions.HAL__HEADER__BLUE_JOB_TITLE_LEAVES:
      return blueJobTitleLeaves(state, action);
    default:
      return state;
  }
}

function greenJobTitleEnters(state, action) {
  let jobTitles = state.get('jobTitles');
  let i = state.get('currentJobTitleIndex');
  i = (i+2) % (jobTitles.length);
  return state
          .set('currentJobTitleIndex', i)
          .set('greenJobTitle', jobTitles[i])
          .set('greenJobTitleShow', true)
          .set('greenJobTitlePosition', 'center')
          .set('blueJobTitle', jobTitles[(i+1) % (jobTitles.length)])
          .set('blueJobTitleShow', false)
          .set('blueJobTitlePosition', 'left');
};

function greenJobTitleLeaves(state, action) {
  return state
        .set('greenJobTitlePosition', 'right');
};

function blueJobTitleEnters(state, action) {
  let jobTitles = state.get('jobTitles');
  let i = state.get('currentJobTitleIndex');
  i = (i+2) % (jobTitles.length);
  return state
          .set('currentJobTitleIndex', i)
          .set('blueJobTitle', jobTitles[i])
          .set('blueJobTitleShow', true)
          .set('blueJobTitlePosition', 'center')
          .set('greenJobTitle', jobTitles[(i+1) % (jobTitles.length)])
          .set('greenJobTitleShow', false)
          .set('greenJobTitlePosition', 'left');
};

function blueJobTitleLeaves(state, action) {
  return state
        .set('blueJobTitlePosition', 'right');
};
