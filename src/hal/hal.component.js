import React, { Component } from 'react';

import './hal.component.css';
const headerImage = 'http://res.cloudinary.com/hally9k/image/upload/w_700,h_700,c_crop,g_face,r_max/w_400/IMG_7441_xgx0ml.png';

import Logos from './logos/logos.container';


class hal extends Component {
  render(store) {
    return (
      <div className="hal">
        <div className="hal-header">
          <h2 className="hal-header-title">Hal Smith Stevens</h2>
          <img className="hal-header-image" src={headerImage} alt="my pic is gooone? Nooo!" />
        </div>
        <Logos store={store} />
      </div>
    );
  }
}

export default hal;
