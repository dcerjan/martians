import * as React from 'react'
import { Form, FormRenderProps } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Api } from '../../../service/Api';
import { LoadingPortal } from '../../LoadingPortal';
import { SubmissionErrors } from 'final-form';
import { Button } from '../../Button';

import * as styles from './form.module.css'
import { CSSTransition } from 'react-transition-group';

type SubmitFunction<S extends {}> = (values: S) => Promise<SubmissionErrors | undefined | void>

type FormOptions<S extends {}> = {
  endpoint: string
  onSubmit?: (history: RouteComponentProps['history']) => SubmitFunction<S>
}

const createOnSubmit = <S extends {}>(endpoint: string) =>
  async (state: S): Promise<SubmissionErrors | undefined> =>
    Api.post(endpoint, state)

export const form = <S extends {}>(
  { endpoint, onSubmit }: FormOptions<S>,
) => (
  FormBody: React.ComponentClass<FormRenderProps<S>> | React.FunctionComponent<FormRenderProps<S>>
) => {
  class WrappedForm extends React.PureComponent<RouteComponentProps> {
    static displayName = `Form[${FormBody.displayName || 'Anonymous'}]`

    private onSubmit: SubmitFunction<S>

    constructor(props: RouteComponentProps, context: any) {
      super(props, context)

      this.onSubmit = onSubmit && onSubmit(this.props.history) || createOnSubmit(endpoint)
    }

    public render() {
      return (
        <div className={styles.FormContainer}>
          <Form<S>
            onSubmit={this.onSubmit}
            render={(props) => (
              <form onSubmit={props.handleSubmit}>
                <FormBody {...props} />

                { props.submitError && <div className={styles.SubmissionError}>
                  { props.submitError }
                </div> }

                <Button
                  label='Login'
                  disabled={
                    props.pristine ||
                    props.submitting ||
                    Boolean(Object.keys(props.errors).length) ||
                    !props.dirtySinceLastSubmit && Boolean(props.submitErrors)
                  }
                  type='submit'
                />

                <CSSTransition
                  in={props.submitting}
                  timeout={200}
                  classNames='Fade'
                  unmountOnExit
                >
                  <LoadingPortal message='Submitting...'/>
                </CSSTransition>
              </form>
            )}
          />
        </div>
      )
    }
  }

  return withRouter(WrappedForm)
}
