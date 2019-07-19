import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import * as styles from './field.module.css'

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
    const { error } = meta

    return (
      <div className={styles.Field}>
        { label && <label htmlFor={input.name}>{label}</label> }
        <div>
          <InputField {...props} />
        </div>
        { error && <div className={styles.Error}>{error}</div> }
      </div>
    )
  }

  Component.displayName = `Field[${InputField.displayName}]`

  return Component
}
