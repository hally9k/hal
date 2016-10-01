import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

const headerImage = 'http://res.cloudinary.com/hally9k/image/upload/w_700,h_700,c_crop,g_face,r_max/w_400/IMG_7441_xgx0ml.png';

import './header.component.css';

class header extends Component {
  constructor() {
    super();
    setInterval(() => {
      if(this.props.jobTitleEnters){
        this.props.jobTitleEnters();
        setTimeout(() => {
          this.props.jobTitleLeaves();
        }, 1000);
      }
    }, 2000);
  }
  render() {
    const jobTitle = this.props.state.get('currentJobTitle');
    const enter = this.props.state.get('enter');
    return (
      <div>
        <div className="hal-header">
          <h2 className="hal-header-title">Hal Smith Stevens</h2>
          <img className="hal-header-image" src={headerImage} alt="my pic is gooone? Nooo!" />
        </div>
        <Motion style={{x: spring( enter ? 1000 : 0 )}}>
          {({x}) =>
            <h2 className="hal-header-job-title "
            style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }}>{jobTitle.toUpperCase()}</h2>
          }
        </Motion>
      </div>
    );
  }
}

export default header;
