import React, { Component } from 'react';
import './work.component.css';

class work extends Component {
  render() {
    return (
<div className="work-body col-lg-8 col-lg-push-2">

  <h1>Things I have worked on...</h1>

  <div className="work-place-section">
    <img src="http://res.cloudinary.com/hally9k/image/upload/c_scale,w_100/v1475352505/pixel_fusion_omj3jv.png" role="presentation" />
    <h3 className="work-place-title">Pixel Fusion</h3>
    <h5>2016 – Present</h5>
    <p>
      At Pixel Fusion Hal provides the engineering expertise required to deliver the next generation of digital experiences; robust, performant, scalable and exstensible. Four years experience designing and developing products in financial analytics and IOT, has earned Hal a broad skill base ranging from Product Design to DevOps. Hal not only provides the architectural experience to leverage the cutting edge in today's front-end technologies but brings the high level vision required to deliver a targeted and well-honed solution to perfectly serve the use case at hand.
      Hal's BSc in computer science is deftly counterweighted by his previous career path as a designer, musician and audio engineer. He prides himself in utilising a perfect mix of creativity and critical thinking throughout the decision-making process, offering that right-brain perspective where it is most required. At "Pixel Fusion" Hal is focused on delivering differentiating digital experiences while keenly scanning the landscape in pursuit of those precious little sparks of true innovation.
    </p>
  </div>

  <div className="work-place-section">
    <img src="http://res.cloudinary.com/hally9k/image/upload/c_scale,w_100/v1475353294/PA_gi2mwj.png" role="presentation" />
    <h3  className="work-place-title">Profitability Analytics</h3>
    <h5>2014 – 2016</h5>
    <p>Profitability Analytics are developing the next generation of SaaS products in the financial analytics space. At Profitability Analytics Hal's roles were Frontend Lead and DevOps Ninja. Hal is solely responsible for the design and development of the UI/UX and the deployment strategy and tooling. In this start-up environment Hal learnt to wear many hats in one day and make critical decisions on aspects of the project such as architectural design and technology choices.</p>
    <h4>Technologies Used: </h4>
    <p>AngularJS 1.5 components with Babel, ES6/7 Webpack and Redux, Kendo UI, Karma, Mocha, Chai and Sinon. C#, ASP.NET Core MVC6, MSSQL/PostgreSQL, Entity Framework 6/7, Teamcity, Octopus Deploy & AWS, Visual Studio and Atom.</p>
    <h4>Key Achievements:</h4>
    <p>• Designing, architecting and implementing the entire front end of the Profitability Analytics web application; a user configurable financial dashboarding solution with rich, interactive data visualisations.</p>
    <p>• Developing an end-to-end continuous deployment strategy. Building the required tool chain to continuously deploy onto immutable infrastructure in AWS. Migrating the developer culture from a two-week release cycle to multiple deployments a day.</p>
  </div>

  <div className="work-place-section">
    <img src="http://res.cloudinary.com/hally9k/image/upload/c_scale,w_150/v1475352505/OneNet_Logo_f2zm0z.png" role="presentation" />
    <h3 className="work-place-title">OneNet</h3>
    <h5>2013 - 2014</h5>
    <p>
      OneNet are a cloud services provider specializing in Microsoft technologies. At OneNet Hal's roles were Software Engineer, Systems Integrator and Full Stack Web Developer. The Software Engineering role had Hal working on .NET applications for internal analytics initiatives. The integration work involved syncing data between Dynamics CRM, Zendesk, MYOB Exo, Active Directory and the client facing OneNet Provisioning Portal. The web development part of the role of building and maintaining the OneNet Provisioning Portal. Hal's time at OneNet taught him to deliver software to a strict specification and maintain mission critical web applications in a production environment.
    </p>
    <h4>Technologies Used:</h4>
    <p>ASP.NET 4 MVC 5, KendoUI, JQuery, Entity Framework 6, MSSQL</p>
  	<h4>Key Achievements:</h4>
    <p>• The completion, deployment and maintenance of the <a href="https://provisioning.onenet.co.nz">OneNet Provisioning Portal</a>.</p>
  </div>

  <div className="work-place-section">
    <img src="http://res.cloudinary.com/hally9k/image/upload/c_scale,w_150/v1475353173/hally_logo_pnb1hy.png" role="presentation" />
    <h3 className="work-place-title">Hally</h3>
    <h5>2014 - Present</h5>
    <p>
      Hally is Hal's own brand under which he operate as a freelance web developer. As a freelancer Hal has contributed to and single handedly delivered a range of web applications running on the MEAN stack.
      More recently Hal has been building custom modules for Magento sites.
      Hal spemds his spare time working with new technologies to strengthen his skill base. ELM is a current focus as Hal moves towards the functional programming paradigm.
    </p>
    <div>
      <h4>Technologies Used: </h4>
      <p>
        NodeJS, Express, MongoDB, AngularJS, ReactJS, Redux, Bootstrap, Mailchimp & Mandrill, KendoUI, SCSS/LESS, Font Awesome, Mongoose, Webpack, Yeoman, Grunt/Gulp, Docker, Amazon Linux, PM2, Webstorm.
      </p>
    </div>
  	<h4>Key Achievements:</h4>
    <p>• Casual contracting as a frontend developer for <a href="http://mytoursapp.com"> My Tours</a>.</p>
    <p>• Key contributions on the <a href="http://www.videogel.com/">Videogel project</a>.</p>
    <p>• Bespoke CMS website for <a href="http://shelterrealty.nz">Shelter Realty</a>.</p>
    <p>• Development of a custom Magento theme for <a href="http://sweetbeginnings.co.nz">Sweet Beginnings</a>.</p>
  </div>

  <div className="work-place-section">
    <img src="http://res.cloudinary.com/hally9k/image/upload/c_scale,w_150/v1475352505/digital_water_b6wgid.png" role="presentation"/>
    <h3 className="work-place-title">Digital Water</h3>
    <h5>2012 - 2013</h5>
    <p>
      Digital Water is a future focused IoT company revolutionizing the way we manage water in our homes. Their product is a ‘Smart Valve’ that measures
      water usage to different areas in your home and monitors the water system for leaks and can shut itself off to prevent damage in such a scenario.
      Hal's role at Digital Water was Software Intern and he dealt with refactoring and testing the C++ core code base. Hal built a black box testing rig for Digital Water's Master Software system and supported the research team in finding the correct piezo electric ceramics for the flow detection system. At Digital Water Hal was exposed to embedded programming in C/C++ amongst many other languages and multiple platforms and operating systems. Hal's time with Digital Water was a great opportunity working with such a thrusting IoT company at this early stage in his career.
    </p>
    <h4>
      Technologies Used:
    </h4>
    <p>C/C++, Delphi, Debian, Komodo IDE.</p>
  	<h4>Key Achievements:</h4>
    <p>
      • Development of a plumbing system simulation to allow automated testing to be performed on the system’s master controllers without a hardware plumbing system being present.
    </p>
  </div>
</div>);
  }
}

export default work;
