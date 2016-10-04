import React, {Component} from 'react';

import './blog.component.css';

class blog extends Component {
  render() {
    return (
    <div className="hal-blog">
      <h1>Things I wrote...</h1>
      <div className="hal-blog-post">
        <blockquote className="embedly-card" data-card-key="750f38e205d540638280b21550bb4cd5" data-card-type="article"><h4><a href="https://medium.com/@hally9k/rediscovering-the-wonderment-f77239b52c95#.zdofij1ci">Rediscovering the wonderment</a></h4><p>I have an app on my work computer that periodically posts notifications instructing me to look out of the window for the health of my eye balls. I seldom oblige. This morning though, I arrived at work an hour early. I'm sitting in the upstairs office of our Herne Bay villa overlooking the sea.</p></blockquote>
        <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
      </div>
      <div className="hal-blog-post">
        <blockquote className="embedly-card" data-card-key="750f38e205d540638280b21550bb4cd5" data-card-type="article"><h4><a href="https://medium.com/@hally9k/my-polymorphic-self-17093b403dd#.ve2avxyau">My Polymorphic Self</a></h4><p>It's about identity. How we want others to feel about us is not our identity. How people actually feel about us is our identity. I'm working this out for myself as I write this. I reread what I've written and check my logic.</p></blockquote>
        <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
      </div>
    </div>
    );
  }
}

export default blog;
