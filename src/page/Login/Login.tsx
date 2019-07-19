import * as React from 'react'
import { Form, Field } from 'react-final-form';
import { Input } from '../../component/Form/Field/Input';
import { required, minLength3 } from '../../component/Form/Field/validation';

interface LoginPagePublicProps {

}

interface LoginPageInjectedProps {

}

export const Login: React.FC<LoginPagePublicProps & LoginPageInjectedProps> = () => (
  <div>
    <div>
      <Form
        onSubmit={(values, form) =>
          new Promise<undefined>((resolve, _) =>
            setTimeout(() => {
              console.log(values, form)
              resolve()
            },
            3500,
          ),
        )}
        render={({ handleSubmit, pristine, invalid, submitting }) => (
          <form onSubmit={handleSubmit}>
            <h2>Simple Demo Form</h2>
            <div>
              <Field
                name="email"
                label="Email"
                component={Input}
                placeholder="e-mail"
                validate={required}
              />
            </div>

            <div>
              <Field
                name="password"
                label="Password"
                component={Input}
                placeholder="password"
                type="password"
                validate={minLength3}
              />
            </div>

            <button type="submit" disabled={pristine || invalid || submitting}>
              Submit
            </button>
          </form>
        )}
      />
    </div>
  </div>
)
