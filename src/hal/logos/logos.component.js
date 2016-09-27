import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './logos.component.css';

class logosComponent extends Component {
  // constructor() {
  //   super();
  //   setInterval(() => {
  //     this.props.onClick();
  //   }, 1000);
  // }
  render() {
    return (

      <div className="logos-container">
        {
          this.props.logos.map((logo) => {
            return <div className="tech-logo-container" key={logo.key}>
                      <img className="tech-logo" src={logo.url} alt={logo.key} />
                    </div>
          })
        }
      </div>
    );
  }
}

export default logosComponent;
