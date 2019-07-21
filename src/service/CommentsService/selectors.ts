import { createSelector } from 'reselect';

import { COMMENTS_SERVICE_STATE_KEY } from './constants';
import { CommentServiceState, commentsServiceInitialState } from './reducer';

export const commentsServiceStateSelector = (state: { [COMMENTS_SERVICE_STATE_KEY]: CommentServiceState }) =>
  state[COMMENTS_SERVICE_STATE_KEY] || commentsServiceInitialState

export const allCommentsSelector = createSelector(
  [commentsServiceStateSelector],
  (state) =>
    state.comments
)
