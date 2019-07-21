import * as React from 'react'
import { SubmissionErrors, FORM_ERROR } from 'final-form'

import { form } from '../../component/Form/decorators/form';
import { LoginRequestData, login } from '../../service/UserService/service';
import { Field } from 'react-final-form';
import { Input } from '../../component/Field/Input';
import { required, minLength3 } from '../../component/Field/validation';
import { DomainError } from '../../record/DomainError';

import * as styles from './LoginForm.module.css'
import { dispatch } from '../../store/store';
import { loginSuccess } from '../../service/UserService';
import { Password } from '../../component/Field/Input/Input';

export const LoginForm = form<LoginRequestData>({
  endpoint: 'login',
  onSubmit: (history) => (state) => login(state)
    .then((user) => {
      dispatch(loginSuccess(user))
      window.setTimeout(() => history.push('/app'), 0)
    })
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
      component={Password}
      placeholder="password"
      validate={minLength3}
    />
  </div>
)
