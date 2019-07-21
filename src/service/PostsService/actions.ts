import { Post } from '../../record/Post';
import { Action } from '../../store/store';

export enum PostsServiceActionType {
  POSTS_LOAD_SUCCESS = 'POSTS_LOAD_SUCCESS'
}

export const postsLoadSuccess = (posts: Post[]): Action<PostsServiceActionType.POSTS_LOAD_SUCCESS, { posts: Post[] }> =>
  ({ type: PostsServiceActionType.POSTS_LOAD_SUCCESS, posts })

export type PostsServiceAction =
  | ReturnType<typeof postsLoadSuccess>
