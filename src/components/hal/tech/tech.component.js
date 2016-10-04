import React, {Component} from 'react';

import './tech.component.css';

class techComponent extends Component {
  render() {
    return (
      <div>
        <h1>Things I use...</h1>
        <div className="tech-logos-container">
          {
            this.props.state.map((tech) => {
              return <div className="tech-logo-container" key={tech.key}>
                        <img className="tech-logo" src={tech.url} alt={tech.key} />
                      </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default techComponent;
