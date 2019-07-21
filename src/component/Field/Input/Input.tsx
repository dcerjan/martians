import clsx from 'clsx'
import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import * as styles from './Input.module.css'
import { field } from '../decorators/field'

type InputPublicProps =
  & FieldRenderProps<string, HTMLInputElement>
  & { className?: string, placeholder?: string }

export const PlainInput: React.FC<InputPublicProps> = ({ className, input, placeholder, meta }) => (
  <input
    className={clsx(styles.Input, className)}
    { ...input }
    id={input.name}
    type="text"
    placeholder={placeholder}
  />
)

PlainInput.displayName = 'PlainInput'

export const Input = field()(PlainInput)
