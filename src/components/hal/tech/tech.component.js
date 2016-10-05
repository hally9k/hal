import React, {Component} from 'react';

import './tech.component.css';

class techComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="tech-main-title">Things I use...</h1>
        {/* <div className="tech-logos-container">
          {
            this.props.state.map((tech) => {
              return <div className="tech-logo-container" key={tech.key}>
                        <img className="tech-logo" src={tech.url} alt={tech.key} />
                      </div>
            })
          }
        </div> */}
        <div className="tech-section">
          <h3 className="tech-title">Front End</h3>
          <div className="tech-logos-container">
            {
              this.props.state.get('frontend').map((tech) => {
                return <div className="tech-logo-container" key={tech.key}>
                          <img className="tech-logo" src={tech.url} alt={tech.key} />
                        </div>
              })
            }
          </div>
        	<p>AngularJS & KendoUI Specialist</p>
        	<p>ReactJS Enthusiast</p>
          <p>Pure Functional Components with Redux, Please.</p>
          <p>ES6/7 with Babel, Webpack, Gulp and Yeoman</p>
          <p>TDD with Karma, Mocha, Chai & Sinon.</p>
        	<p>Bootstrap User</p>
        	<p>PostCSS / SCSS / LESS</p>
        </div>

        <div className="tech-section">
          <h3 className="tech-title">DevOps</h3>
          <div className="tech-logos-container">
            {
              this.props.state.get('devops').map((tech) => {
                return <div className="tech-logo-container" key={tech.key}>
                          <img className="tech-logo" src={tech.url} alt={tech.key} />
                        </div>
              })
            }
          </div>
        	<p>Continuous Deployment Proponent</p>
        	<p>Auto Scaling, Immutable Infrastructure for the win</p>
        	<p>If it moves - automate it.</p>
        	<p>Git -> Teamcity -> Nuget/Zip -> Octopus Deploy -> AWS - Rinse & repeat</p>
        </div>

        <div className="tech-section">
          <h3 className="tech-title">Full Stack</h3>
          <div className="tech-logos-container">
            {
              this.props.state.get('fullstack').map((tech) => {
                return <div className="tech-logo-container" key={tech.key}>
                          <img className="tech-logo" src={tech.url} alt={tech.key} />
                        </div>
              })
            }
          </div>
          <p>ASP.NET Core MVC 6</p>
        	<p>MSSQL / MySQL / MariaDB / PostgreSQL</p>
        	<p>NodeJS, Express & MongoDB – MEAN Stack.</p>
        	<p>Visual Studio 2015 and Atom</p>
        </div>

        <div className="tech-section">
          <h3 className="tech-title">Project</h3>
          <div className="tech-logos-container">
            {
              this.props.state.get('project').map((tech) => {
                return <div className="tech-logo-container" key={tech.key}>
                          <img className="tech-logo" src={tech.url} alt={tech.key} />
                        </div>
              })
            }
          </div>
        	<p>Scrum with Jira or Kanban with Trello</p>
        	<p>Time tracking with Toggl</p>
        </div>

        <div className="tech-section">
          <h3 className="tech-title">Other</h3>
          <div className="tech-logos-container">
            {
              this.props.state.get('other').map((tech) => {
                return <div className="tech-logo-container" key={tech.key}>
                          <img className="tech-logo" src={tech.url} alt={tech.key} />
                        </div>
              })
            }
          </div>
        	<p>Qualified Sound Engineer and Audio Geek</p>
        	<p>Synthesizers distract me</p>
        	<p>I coach a kid’s basketball team</p>
        	<p>I like cooking curry and occasionally brewing beer</p>
          <p>I’ve started contributing to an open source project for creaky old</p>
          <p>AngularJS folk who want to use Redux with the ui-router:</p>
          <p>https://github.com/neilff/redux-ui-router</p>
        </div>


      </div>
    );
  }
}

export default techComponent;
