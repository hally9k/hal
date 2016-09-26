import React from 'react';
import ReactDOM from 'react-dom';
import hal from './hal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<hal />, div);
});
