import * as React from 'react'

import { Page } from '../../component/Page';
import { LoginForm } from './LoginForm'

interface LoginPagePublicProps {

}

interface LoginPageInjectedProps {

}

export const Login: React.FC<LoginPagePublicProps & LoginPageInjectedProps> = () => (
  <Page title='Martian Forum'>
    <LoginForm />
  </Page>
)
