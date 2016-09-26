import React, { Component } from 'react';
import './hal.css';
const headerImage = 'http://res.cloudinary.com/hally9k/image/upload/w_700,h_700,c_crop,g_face,r_max/w_400/IMG_7441_xgx0ml.png';

import Logos from './logos/logos';

class hal extends Component {
  render() {
    return (
      <div className="hal">
        <div className="hal-header">
          <h2 className="hal-header-title">Hal Smith Stevens</h2>
          <img className="hal-header-image" src={headerImage} alt="my pic is gooone? Nooo!" />
        </div>
        <Logos />
      </div>
    );
  }
}

export default hal;
