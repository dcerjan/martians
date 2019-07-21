import { AnyObject } from 'final-form';
import * as React from 'react'
import { createStructuredSelector } from 'reselect'

import { connect } from '../../store/connect';
import { Post } from '../../record/Post';
import { initialState } from './state/reducer';

interface PostsListPublicProps {
}

interface PostsListInjectedStateProps {
  posts: Post[]
}

const postsSelector = (state: AnyObject): Post[] => state.posts.posts

const mapState = createStructuredSelector<AnyObject, PostsListInjectedStateProps>({
  posts: postsSelector,
})

export const PostsList = connect(
  mapState,
)(
  class PostsListImpl extends React.PureComponent<PostsListPublicProps & PostsListInjectedStateProps> {
    public componentDidMount() {
      // fetch post data
    }

    public render() {
      const { posts } = this.props

      console.log(posts)

      return (
        <div>
          { posts.map((post) => <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>)}
        </div>
      )
    }
  },
)
