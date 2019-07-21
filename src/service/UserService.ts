import { User } from '../record/User';
import { Api } from './Api';
import { DomainError } from '../record/DomainError';

export type LoginRequestData =
  & Pick<User, 'email'>
  & { password: string }

const VALID_EMAIL = 'martian@mars.com'
const VALID_PASSWROD = 'machine'

// Fake auth service

// Fake login
export const login = async (data: LoginRequestData): Promise<User> =>
  new Promise((resolve, reject) =>
    window.setTimeout(() => {
      if (data.email === VALID_EMAIL && data.password === VALID_PASSWROD) {
        Api.get<User>('users/1')
          .then((result) => resolve(result.data))
          .catch((error) => reject(new DomainError(error)))
      } else {
        reject(new DomainError('Entered credentials are invalid'))
      }
    }, 2000))

// Fake logout, in the real world it can also fail
export const logout = async (): Promise<void> =>
  new Promise((resolve, _) =>
    window.setTimeout(() => resolve(), 1000))
