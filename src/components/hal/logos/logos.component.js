import React, {Component} from 'react';

import './logos.component.css';

class logosComponent extends Component {
  render() {
    return (
      <div>
        <h1>Things I use...</h1>
        <div className="logos-container">
          {
            this.props.logos.map((logo) => {
              return <div className="tech-logo-container" key={logo.key}>
                        <img className="tech-logo" src={logo.url} alt={logo.key} />
                      </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default logosComponent;
