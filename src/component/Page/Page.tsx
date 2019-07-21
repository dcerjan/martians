import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
import { createStructuredSelector } from 'reselect';

import * as styles from './Page.module.css'
import { connect } from '../../store/connect';
import { User } from '../../record/User';
import { currentUserSelector } from '../../service/UserService/selectors';

interface PagePublicProps {
  title?: string
  allowAccess?: (user: User | null) => boolean
}

interface PageInjectedStateProps {
  user: User | null
}

const mapState = createStructuredSelector<any, PageInjectedStateProps>({
  user: currentUserSelector
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
      ? <div className={styles.Page}>{ children }</div>
      : null
  }

  private canAccess = (user: User | null) => {
    const { allowAccess } = this.props
    return !allowAccess || allowAccess(user)
  }

  private evaluatePermissions = (user: User | null) => {
    // Required because of internal setState on CSSTransition, otherwise it
    // explodes inside of a setState recursion in its componentWillReceiveProps
    this.timeout = window.setTimeout(() => {
      const { history } = this.props
      if (!this.canAccess(user)) {
        history.replace('/forbidden')
      }
    }, 0)
  }
}

// It's a bt tedious to type connect correctly therefore this 'as React.ComponentClass<PagePublicProps>'
// which is actually a common pattern and will be untill TS gets proper variadic generic types so one
// can type function composition with ease without resorting to generating overloaded types for n+1 types
export const Page = connect(mapState)(withRouter(PageImpl)) as React.ComponentClass<PagePublicProps>
