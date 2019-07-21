import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import * as styles from './field.module.css'
import clsx from 'clsx';

interface FieldOptions {

}

type FieldProps<T = any, H extends HTMLElement = HTMLInputElement> =
  & FieldRenderProps<T, H>
  & {
    label?: string
  }

export const field = (
  options?: FieldOptions,
) => <P extends FieldProps>(
  InputField: React.ComponentClass<P> | React.FunctionComponent<P>,
): React.FC<P> => {
  const Component = (props: P) => {
    const { meta, input, label } = props
    const { error, submitError, pristine } = meta

    const fieldError = !pristine && (error || submitError)

    return (
      <div className={styles.Field}>
        { label && <label htmlFor={input.name}>{label}</label> }
        <div>
          <InputField {...props} />
        </div>
        <div className={clsx(styles.TypeLine, Boolean(fieldError) && styles.HasError)}/>
        <div className={styles.Error}>{fieldError}</div>
      </div>
    )
  }

  Component.displayName = `Field[${InputField.displayName}]`

  return Component
}
