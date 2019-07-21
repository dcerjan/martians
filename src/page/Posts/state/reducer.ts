import { Post } from '../../../record/Post';
import { Action } from '../../../store/store';

interface PostsListState {
  posts: Post[]
}

export const initialState: PostsListState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {

  default:
    return state
  }
}
