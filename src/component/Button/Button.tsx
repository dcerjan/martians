import * as React from 'react'

import styles from './Button.module.css'

interface ButtonPublicProps {
  label: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonPublicProps> = ({ label, disabled, type }) => (
  <div>
    <button
      className={styles.Button}
      type={type || 'button'}
      disabled={disabled}
    >
      { label }
    </button>
  </div>
)
