import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

import { Loader } from '../Loader'

import * as styles from './LoadingPortal.module.css'

interface LoadingPortalPublicProps {
  message: string
  visible: boolean
}

const LoadingOverlay: React.FC<LoadingPortalPublicProps> = ({ message, visible }) => (
  <CSSTransition
    in={visible}
    timeout={200}
    classNames='Fade'
    unmountOnExit
  >
    <div className={styles.Container}>
      <div className={styles.Message}>
        { message }
      </div>
      <Loader />
    </div>
  </CSSTransition>
)

export const LoadingPortal: React.FC<LoadingPortalPublicProps> = (props) => {
  const hinge = document.getElementById('loading-portal')

  if (hinge == null) {
    throw new Error('Unable to locate element with #id loading-portal in the DOM')
  } else {
    return ReactDOM.createPortal(
      <LoadingOverlay {...props} />,
      hinge,
    )
  }
}
