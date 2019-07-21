import * as React from 'react'

import { Page } from '../../component/Page';
import { LoginForm } from './LoginForm'

export const Login: React.FC<{}> = () => (
  <Page title='Martian Forum'>
    <LoginForm />
  </Page>
)
