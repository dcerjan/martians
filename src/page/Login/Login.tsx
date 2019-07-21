import * as React from 'react'

import { Page } from '../../component/Page';
import { LoginForm } from './LoginForm'
import { LogSelfInjectedProps, logSelf } from '../../debug/logSelf';

export const LoginImpl: React.FC<{}> = () => (
  <Page title='Martian Forum'>
    <LoginForm />
  </Page>
)

LoginImpl.displayName = 'Login'

export const Login: React.FC<LogSelfInjectedProps> = logSelf(LoginImpl)
