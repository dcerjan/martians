import { registerReducer } from '../../store/store'
import { reducer } from './state/reducer'

export { Posts } from './Posts'

registerReducer('posts', reducer)
