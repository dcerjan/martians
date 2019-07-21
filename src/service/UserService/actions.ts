import { User } from '../../record/User';
import { Action } from '../../store/store';

export enum UserServiceActionType {
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS',
}

export const loginSuccess = (user: User): Action<UserServiceActionType.USER_LOGIN_SUCCESS, { user: User }> =>
  ({ type: UserServiceActionType.USER_LOGIN_SUCCESS, user })

export const logoutSuccess = (): Action<UserServiceActionType.USER_LOGOUT_SUCCESS> =>
  ({ type: UserServiceActionType.USER_LOGOUT_SUCCESS })

export const usersLoadSuccess = (users: User[]): Action<UserServiceActionType.USERS_LOAD_SUCCESS, { users: User[] }> =>
  ({ type: UserServiceActionType.USERS_LOAD_SUCCESS, users })

export type UserServiceAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof logoutSuccess>
  | ReturnType<typeof usersLoadSuccess>
