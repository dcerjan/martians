import { registerReducer } from '../../store/store';
import { userServiceReducer } from './reducer'
import { USER_SERVICE_STATE_KEY } from './constants'

export { login, logout } from './service'
export { loginSuccess, logoutSuccess } from './actions'

registerReducer(USER_SERVICE_STATE_KEY, userServiceReducer)
