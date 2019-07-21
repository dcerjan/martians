import * as React from 'react'

import { Page } from '../../component/Page';

import * as styles from './ErrorPage.module.css'

interface ErrorPagePublicProps {
  code: number
  message: string
}

export const ErrorPage: React.FC<ErrorPagePublicProps> = ({ code, message }) => (
  <Page title={`Martian Forum - Error ${code}`}>
    <div className={styles.ErrorContainer}>
      <div className={styles.ErrorCode}>
        { code }
      </div>
      <div className={styles.ErrorMessage}>
        { message }
      </div>
    </div>
  </Page>
)

export const Error403: React.FC<{}> = () =>
  <ErrorPage code={403} message='Access to this resource is forbidden, you need to be logged in to access it' />

export const Error404: React.FC<{}> = () =>
  <ErrorPage code={404} message='Resource no found' />
