import { registerReducer } from '../../store/store';
import { postsServiceReducer } from './reducer'
import { POSTS_SERVICE_STATE_KEY } from './constants'

export { loadPosts } from './service'
export { postsLoadSuccess } from './actions'

registerReducer(POSTS_SERVICE_STATE_KEY, postsServiceReducer)
