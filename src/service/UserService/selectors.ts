import { USER_SERVICE_STATE_KEY } from './constants';
import { UserServiceState } from './reducer';
import { createSelector } from 'reselect';

export const userServiceStateSelector = (state: { [USER_SERVICE_STATE_KEY]: UserServiceState }) =>
  state[USER_SERVICE_STATE_KEY]

export const currentUserSelector = createSelector(
  [userServiceStateSelector],
  (state) =>
    state.current
)
