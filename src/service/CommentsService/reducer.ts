import { lens } from 'lens.ts'

import { Comment } from '../../record/Comment';
import { CommentsServiceActionType, CommentsServiceAction } from './actions';

export interface CommentServiceState {
  comments: Comment[]
}

const CommentServiceStateL = lens<CommentServiceState>()

export const commentsServiceInitialState: CommentServiceState = {
  comments: []
}

export const commentsServiceReducer = (state = commentsServiceInitialState, action: CommentsServiceAction) => {
  switch (action.type) {

  case CommentsServiceActionType.COMMENTS_LOAD_SUCCESS:
    return CommentServiceStateL.comments.set(action.comments)(state)

  default:
    return state
  }
}
