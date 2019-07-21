import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';

import * as styles from './Page.module.css'

interface PagePublicProps {
  title?: string
}

export const Page = withRouter(
  class PageImpl extends React.PureComponent<RouteComponentProps & PagePublicProps> {
    public componentWillMount() {
      const { title } = this.props
      if (title != null) {
        document.title = title
      }
    }

    public render() {
      const { children } = this.props
      return (
        <div className={styles.Page}>
          { children }
        </div>
      )
    }
  },
);
