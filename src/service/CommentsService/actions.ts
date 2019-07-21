import { Comment } from '../../record/Comment';
import { Action } from '../../store/store';

export enum CommentsServiceActionType {
  COMMENTS_LOAD_SUCCESS = 'COMMENTS_LOAD_SUCCESS'
}

export const commentsLoadSuccess = (comments: Comment[]): Action<CommentsServiceActionType.COMMENTS_LOAD_SUCCESS, { comments: Comment[] }> =>
  ({ type: CommentsServiceActionType.COMMENTS_LOAD_SUCCESS, comments })

export type CommentsServiceAction =
  | ReturnType<typeof commentsLoadSuccess>
