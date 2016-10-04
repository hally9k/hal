import React, { Component } from 'react';

import './hal.component.css';

import Header from './header/header.container';
import Nav from './nav/nav.component';
import Footer from './footer/footer.container';

class hal extends Component {
  render() {
    return (
      <div className="hal">
        <div className="hal-content-wrapper">
          <Header />
          <Nav />
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <div className="hal-footer-push"></div>
        <Footer />
      </div>
    );
  }
}

export default hal;
