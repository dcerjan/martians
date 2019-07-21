import { Api } from '../Api';
import { Comment } from '../../record/Comment';
import { DomainError } from '../../record/DomainError';
import { dispatch } from '../../store/store';
import { commentsLoadSuccess } from './actions';

export const loadComments = async (): Promise<Comment[]> =>
  new Promise((resolve, reject) =>
    Api.get<Comment[]>('comments')
      .then((result) => {
        dispatch(commentsLoadSuccess(result.data) || [])
        resolve(result.data)
      })
      .catch((error) => reject(new DomainError(error))))
