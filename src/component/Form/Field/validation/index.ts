export const required = <T>(value?: T) =>
  value == null
    ? 'Value is required'
    : undefined

export const minLength3 = (value: string) =>
  value == null || value.length < 3
    ? 'Must be at least 3 characters long'
    : undefined
