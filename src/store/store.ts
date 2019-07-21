import { AnyObject } from 'react-final-form';

export type State = {
  [key: string]: AnyObject
}

let subscribers: Array<() => void> = []

export const subscribe = (callback: () => void): (() => void) => {
  if (!subscribers.some((sub) => sub === callback)) {
    subscribers = [...subscribers, callback]
    return () => {
      subscribers = subscribers.filter((sub) => sub === callback)
    }
  } else {
    throw new Error('Subscriber already subscribed to the store changes!')
  }
}

export type Action<T extends string = string, P extends {} = {}> =
  & { type: T }
  & P

export type Reducer<S extends {}, A extends Action> = (state: S, action: A) => S

const registeredReducers: { [key: string]: Reducer<any, any> } = {}

let rootState: State = {}

let rootReducer: Reducer<any, any> = (state = {}, action) =>
  Object.entries(registeredReducers).reduce((state: State, [key, reducer]) => {
    state[key] = reducer(state[key], action)
    return state
  }, state)

export const dispatch = <A extends Action>(action: A) => {
  rootState = rootReducer(rootState, action)
  subscribers.forEach((cb) => cb())
}

export const registerReducer = (key: string, reducer: Reducer<any, any>) => {
  registeredReducers[key] = reducer
  dispatch({ type: '@@internal' })
}

export const getState = (): Readonly<State> => rootState

;(window as any).getState = getState
