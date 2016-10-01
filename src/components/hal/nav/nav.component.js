import React, { Component } from 'react';
import {Link} from 'react-router';

import './nav.component.css';

class nav extends Component {
  render() {
    return (
      <div>
        <Link to="/me"><a className="nav-item">me</a></Link>
        <Link to="/tech"><a className="nav-item">tech</a></Link>
        <Link to="/work"><a className="nav-item">work</a></Link>
        <Link to="/blog"><a className="nav-item">blog</a></Link>
      </div>
    );
  }
}

export default nav;
