import * as React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Login } from './page/Login/Login';
import { Posts } from './page/Posts';

export const Routes = withRouter(({ location }) => (
  <React.Fragment>
    <TransitionGroup>
      <CSSTransition
        key={location.key || 'index'}
        timeout={200}
        classNames='Fade'
        unmountOnExit
      >
        <Switch location={location}>
          <Route path="/" exact component={Login} />
          <Route path="/app" exact component={Posts} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </React.Fragment>
));
