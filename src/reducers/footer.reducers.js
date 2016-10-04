import {List} from 'immutable';

const INITIAL_STATE = new List([
  {
    name: 'Twitter',
    icon: 'fa-twitter-square',
    link: 'https://twitter.com/hally9k'
  },
  {
    name: 'Medium',
    icon: 'fa-medium',
    link: 'https://medium.com/@hally9k'
  },
  {
    name: 'Github',
    icon: 'fa-github',
    link: 'https://github.com/hally9k'
  },
  {
    name: 'Stack Overflow',
    icon: 'fa-stack-overflow',
    link: 'http://stackoverflow.com/users/1770624/hally9k'
  },
  {
    name: 'LinkedIn',
    icon: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/hal-smith-stevens-1a37ab64'
  },
  {
    name: 'Facebook',
    icon: 'fa-facebook-official',
    link: 'https://www.facebook.com/hally9k'
  },
  {
    name: 'Instagram',
    icon: 'fa-instagram',
    link: 'https://www.instagram.com/hally9k'
  },
]);

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
