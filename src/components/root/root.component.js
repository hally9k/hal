import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Hal from '../hal/hal.container';
import Me from '../hal/me/me.component';
import Logos from '../hal/logos/logos.container';
import Work from '../hal/work/work.component';
import Blog from '../hal/blog/blog.component';

const Root = ({store}) => (
  <Provider store={store} className="root">
    <Router history={browserHistory}>
      <Route path="/" component={Hal}>
        <Route path="me" component={Me} />
        <Route path="tech" component={Logos} />
        <Route path="work" component={Work} />
        <Route path="blog" component={Blog} />
      </Route>
    </Router>
  </Provider>
)

export default Root;
