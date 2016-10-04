import React, { Component } from 'react';
import {Link} from 'react-router';

import './nav.component.css';

class nav extends Component {
  render() {
    return (
      <div>
        <Link to="/me"><div className="nav-item">me</div></Link>
        <Link to="/tech"><div className="nav-item">tech</div></Link>
        <Link to="/work"><div className="nav-item">work</div></Link>
        <Link to="/blog"><div className="nav-item">blog</div></Link>
      </div>
    );
  }
}

export default nav;
