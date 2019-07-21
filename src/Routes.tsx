import * as React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Login } from './page/Login/Login';
import { Posts } from './page/Posts';
import { Error404, Error403 } from './page/Error/ErrorPage';
import { Post } from './page/Post';

const PREFIX = 'Why is this needed'

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
          <Route
            path='/'
            exact
            render={(renderProps) => <Login { ...renderProps } prefix={PREFIX} />}
          />

          <Route
            path='/app'
            exact
            component={Posts}
          />

          <Route
            path='/posts/:id'
            exact
            component={Post}
          />

          <Route
            path='/forbidden'
            component={Error403}
          />

          <Route
            path='*'
            component={Error404}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </React.Fragment>
));
