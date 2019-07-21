import { registerReducer } from '../../store/store';
import { commentsServiceReducer } from './reducer'
import { COMMENTS_SERVICE_STATE_KEY } from './constants'

export { loadComments } from './service'
export { commentsLoadSuccess } from './actions'

registerReducer(COMMENTS_SERVICE_STATE_KEY, commentsServiceReducer)
