import * as React from 'react'
import { AnyObject } from 'react-final-form';

import { State, Action, subscribe, getState } from './store';

export const connect = <S extends State, R extends AnyObject, P extends {} = {}, D extends { [key: string]: (...args: any) => Action<string> } = {}>(
  mapState?: (state: Readonly<S>) => R,
  mapDispatch?: D,
) => (
  Container: React.ComponentClass<P & R & D> | React.FunctionComponent<P & R & D>
) => {
  class WrappedContainer extends React.PureComponent<P, { token: number }> {
    static displayName = `Connected[${Container.displayName}]`

    private revoke: () => void = () => void(0)
    private mounted = false

    public lastMappedState: R | undefined

    public state = {
      token: 0
    }

    constructor(props: any) {
      super(props)

      if (mapState != null) {
        this.revoke = subscribe(this.remapState)
      }
      this.remapState()
    }

    public componentDidMount() {
      this.mounted = true
      this.remapState()
    }

    public componentWillUnmount() {
      this.mounted = false
      if (this.revoke != null) {
        this.revoke()
      }
    }

    public render() {
      return (
        <Container
          key={this.state.token}
          {...this.props}
          {...((this.lastMappedState || {}) as R)}
          {...(mapDispatch)}
        />
      )
    }

    private remapState = () => {
      if (mapState != null) {
        this.lastMappedState = mapState(getState() as S)
        if (this.mounted) {
          this.setState({ token: this.state.token + 1 })
        }
      }
    }
  }

  return WrappedContainer
}
