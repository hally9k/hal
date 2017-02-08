import React, { Component } from 'react';
import './me.component.css';

class me extends Component {
  render() {
    return (
      <div className="col-lg-8 col-lg-push-2 me-body">
        <h1>About Me...</h1>
        <p>
          I am Hal. I write Javascript code for fun. When it’s time to let my brain subconsciously cogitate on the solution to a problem I relax by automating the continuous delivery pipeline. I know some things about some things but mostly I know how to learn new things; I enjoy it.
          My ideal position is in a start-up environment. I don’t feel at home in a corporate setting; bureaucracy hurts. I am motivated by being closely in touch with the business goals. I am all about team spirit and achieving real feats of awesomeness.
          On the internets I am hally9k. e.g: <a href="https://stackoverflow.com/users/1770624/hally9k">stackoverflow.com/users/1770624/hally9k</a> or <a href="https://github.com/hally9k">github.com/hally9k</a>.
        </p>
      </div>
    );
  }
}

export default me;
