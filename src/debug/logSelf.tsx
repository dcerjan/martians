import * as React from 'react'

export interface LogSelfInjectedProps {
  prefix: string
}

export const logSelf = <P extends LogSelfInjectedProps>(
  Container: React.ComponentClass<P> | React.FunctionComponent<P>
) => {
  const WrappedContainer: React.FC<P> = (props) => {
    const { prefix } = props
    console.log(`${prefix} ${Container.displayName}`)
    return <Container { ...props } />
  }

  WrappedContainer.displayName = `LogSelf[${Container.displayName}]`

  return WrappedContainer
}
