import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

const headerImage = 'http://res.cloudinary.com/hally9k/image/upload/w_700,h_700,c_crop,g_face,r_max/w_400/IMG_7441_xgx0ml.png';

import './header.component.css';

class header extends Component {
  constructor() {
    super();
    setInterval(() => {
      this.props.greenJobTitleLeaves();
        setTimeout(() => {
          this.props.blueJobTitleEnters();
        }, 100);
        setTimeout(() => {
            this.props.blueJobTitleLeaves();
            setTimeout(() => {
              this.props.greenJobTitleEnters();
            }, 100);
        }, 4000);
    }, 8000);
  }
  render() {
    const greenJobTitle = this.props.state.get('greenJobTitle');
    const greenJobTitleShow = this.props.state.get('greenJobTitleShow');
    const greenJobTitlePosition= this.props.state.get('greenJobTitlePosition');
    const blueJobTitle = this.props.state.get('blueJobTitle');
    const blueJobTitleShow = this.props.state.get('blueJobTitleShow');
    const blueJobTitlePosition= this.props.state.get('blueJobTitlePosition');
    return (
      <div>
        <div className="hal-header">
          <h2 className="hal-header-title">Hal Smith Stevens</h2>
          <img className="hal-header-image" src={headerImage} alt="my pic is gooone? Nooo!" />
        </div>
        <Motion style={{x: spring( { left: -1000, center: 0, right: 1000 }[greenJobTitlePosition] )}}>
          {({x}) =>
            <h2 className="hal-header-job-title"
            style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                  display: { true: 'block', false: 'none' }[greenJobTitleShow]
                }}>{greenJobTitle.toUpperCase()}</h2>
          }
        </Motion>
        <Motion style={{x: spring( { left: -1000, center: 0, right: 1000 }[blueJobTitlePosition] )}}>
          {({x}) =>
            <h2 className="hal-header-job-title"
            style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                  display: { true: 'block', false: 'none' }[blueJobTitleShow]
                }}>{blueJobTitle.toUpperCase()}</h2>
          }
        </Motion>
      </div>
    );
  }
}

export default header;
