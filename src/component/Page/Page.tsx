import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';

import * as styles from './Page.module.css'
import { connect } from '../../store/connect';
import { User } from '../../record/User';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './state/seelctors';

interface PagePublicProps {
  title?: string
  allowAccess?: (user: User | null) => boolean
}

interface PageInjectedStateProps {
  user: User | null
}

const mapState = createStructuredSelector<any, PageInjectedStateProps>({
  user: userSelector
})

export class PageImpl extends React.PureComponent<RouteComponentProps & PagePublicProps & PageInjectedStateProps> {
  private timeout: number = 0

  public componentWillMount() {
    const { title } = this.props
    if (title != null) {
      document.title = title
    }
  }

  public componentDidMount() {
    this.evaluatePermissions(this.props.user)
  }

  public componentWillUnmount() {
    if (this.timeout) {
      window.clearTimeout(this.timeout)
      this.timeout = 0;
    }
  }

  public componentWillReceiveProps(nextProps: RouteComponentProps & PagePublicProps & PageInjectedStateProps) {
    this.evaluatePermissions(nextProps.user)
  }

  public render() {
    const { children, user } = this.props
    return this.canAccess(user)
      ? (
        <div className={styles.Page}>
          { children }
        </div>
      )
      : null
  }

  private canAccess = (user: User | null) => {
    const { allowAccess } = this.props
    return !allowAccess || allowAccess(user)
  }

  private evaluatePermissions = (user: User | null) => {
    const { history } = this.props
    if (!this.canAccess(user)) {
      this.timeout = window.setTimeout(() => history.replace('/forbidden'), 0)
    }
  }
}

// It's a bt tedious to type connect correctly therefore this 'as React.ComponentClass<PagePublicProps>;'
// which is actually a common pattern and will be untill TS gets proper variadic generic types so one
// can type function composition with ease without resorting to generating overloaded types for n+1 types
export const Page = connect(mapState)(withRouter(PageImpl)) as React.ComponentClass<PagePublicProps>;
