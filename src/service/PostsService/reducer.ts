import { lens } from 'lens.ts'

import { Post } from '../../record/Post';
import { PostsServiceActionType, PostsServiceAction } from './actions';

export interface PostServiceState {
  posts: Post[]
}

const PostServiceStateL = lens<PostServiceState>()

export const postsServiceInitialState: PostServiceState = {
  posts: []
}

export const postsServiceReducer = (state = postsServiceInitialState, action: PostsServiceAction) => {
  switch (action.type) {

  case PostsServiceActionType.POSTS_LOAD_SUCCESS:
    return PostServiceStateL.posts.set(action.posts)(state)

  default:
    return state
  }
}
