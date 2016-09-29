import {Map} from 'immutable';
import {actions} from '../actions/hal.actions';

const INITIAL_STATE = new Map({
  jobTitles: [
    'coder',
    'father',
    'coach',
    'dreamer',
    'frontend engineer',
    'devops guy'
  ],
  enter: true,
  currentJobTitleIndex: 0,
  currentJobTitle: 'coder'
});

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actions.HAL__JOB_TITLE_ENTERS:
      let jobTitles = state.get('jobTitles');
      let i = state.get('currentJobTitleIndex');
      i = ++i % (jobTitles.length);
      return state
              .set('currentJobTitleIndex', i)
              .set('currentJobTitle', jobTitles[i])
              .set('enter',true);
    case actions.HAL__JOB_TITLE_LEAVES:
      return state
              .set('enter',false);
    default:
      return state;
  }
}
