import { createSelector } from 'reselect';

import { POSTS_SERVICE_STATE_KEY } from './constants';
import { PostServiceState, postsServiceInitialState } from './reducer';

export const postsServiceStateSelector = (state: { [POSTS_SERVICE_STATE_KEY]: PostServiceState }) =>
  state[POSTS_SERVICE_STATE_KEY] || postsServiceInitialState

export const allPostsSelector = createSelector(
  [postsServiceStateSelector],
  (state) =>
    state.posts
)
