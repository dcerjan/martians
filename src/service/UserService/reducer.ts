import { lens } from 'lens.ts'

import { User } from '../../record/User';
import { UserServiceActionType, UserServiceAction } from './actions';

export interface UserServiceState {
  current: User | null
  users: User[]
}

const UserServiceStateL = lens<UserServiceState>()

export const userServiceState: UserServiceState = {
  current: null,
  users: [],
}

export const userServiceReducer = (state = userServiceState, action: UserServiceAction) => {
  switch (action.type) {

  case UserServiceActionType.USER_LOGIN_SUCCESS:
    return UserServiceStateL.current.set(action.user)(state)

  case UserServiceActionType.USER_LOGOUT_SUCCESS:
    return UserServiceStateL.current.set(null)(state)

  case UserServiceActionType.USERS_LOAD_SUCCESS:
    return UserServiceStateL.users.set(action.users)(state)

  default:
    return state
  }
}
