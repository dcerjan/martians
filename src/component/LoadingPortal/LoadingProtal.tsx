import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Loader } from '../Loader'

import * as styles from './LoadingPortal.module.css'

interface LoadingPortalPublicProps {
  message: string
}

const LoadingOverlay: React.FC<LoadingPortalPublicProps> = ({ message }) => (
  <div className={styles.Container}>
    <div className={styles.Message}>
      { message }
    </div>
    <Loader />
  </div>
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
