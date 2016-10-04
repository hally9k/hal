import React, {Component} from 'react';

import './footer.component.css';

class footer extends Component {
  render() {
    return (
      <div className="hal-footer">
        {
          this.props.state.footer.map(function(social){
            return <a key={social.name} className="hal-footer-icon-box" href={social.link}><i className={ 'hal-footer-icon fa ' + social.icon}></i></a>;
          })
        }
      </div>
    );
  }
}

export default footer;
