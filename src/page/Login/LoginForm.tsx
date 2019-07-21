import * as React from 'react'
import { SubmissionErrors, FORM_ERROR } from 'final-form'

import { form } from '../../component/Form/decorators/form';
import { LoginRequestData, login } from '../../service/UserService';
import { Field } from 'react-final-form';
import { Input } from '../../component/Field/Input';
import { required, minLength3 } from '../../component/Field/validation';
import { DomainError } from '../../record/DomainError';

import * as styles from './LoginForm.module.css'

export const LoginForm = form<LoginRequestData>({
  endpoint: 'login',
  onSubmit: (history) => (state) => login(state)
    .then(() => history.push('/app'))
    .catch((err: DomainError): SubmissionErrors => ({
      [FORM_ERROR]: err.originalMessage,
    })),
})(() =>
  <div className={styles.LoginForm}>
    <Field
      name="email"
      label="Email"
      component={Input}
      placeholder="e-mail"
      validate={required}
    />

    <Field
      name="password"
      label="Password"
      component={Input}
      placeholder="password"
      type="password"
      validate={minLength3}
    />
  </div>
)