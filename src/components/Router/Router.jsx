import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import asyncComponent from '../asyncComponent';

import styles from './Router.stylC';


const Welcome = asyncComponent(() => import('../Welcome/Welcome.jsx').then(mod => mod.default), { name: 'Welcome' });


const BasicExample = () => (
  <Router>
    <div className={styles.router}>
      <h4 className={styles.header}>Generate your own portfolio!</h4>

      <div className="route-content">
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>

      <nav className="navigation">
        <ul>
          <li><Link to="/">Return Home</Link></li>
        </ul>
      </nav>

    </div>
  </Router>
);

export default BasicExample;