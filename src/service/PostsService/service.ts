import { Api } from '../Api';
import { Post } from '../../record/Post';
import { DomainError } from '../../record/DomainError';
import { dispatch } from '../../store/store';
import { postsLoadSuccess } from './actions';

export const loadPosts = async (): Promise<Post[]> =>
  new Promise((resolve, reject) =>
    Api.get<Post[]>('posts')
      .then((result) => {
        dispatch(postsLoadSuccess(result.data) || [])
        resolve(result.data)
      })
      .catch((error) => reject(new DomainError(error))))
