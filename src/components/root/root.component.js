import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Hal from '../hal/hal.container';
import Me from '../hal/me/me.component';
import Tech from '../hal/tech/tech.container';
import Work from '../hal/work/work.component';
import Blog from '../hal/blog/blog.component';

const Root = ({store, history}) => (
  <Provider store={store} className="root">
    <Router history={history}>
      <Route path="/" component={Hal}>
        <IndexRoute component={Me} />
        <Route path="me" component={Me} />
        <Route path="tech" component={Tech} />
        <Route path="work" component={Work} />
        <Route path="blog" component={Blog} />
      </Route>
    </Router>
  </Provider>
)


export default Root;
