import * as React from 'react'
import { createStructuredSelector } from 'reselect'

import { connect } from '../../store/connect';
import { Post } from '../../record/Post';
import { loadPosts } from '../../service/PostsService';
import { LoadingPortal } from '../../component/LoadingPortal';
import { allPostsSelector } from '../../service/PostsService/selectors';
import { getState } from '../../store/store';

interface PostsListPublicProps {
}

interface PostsListState {
  loading: boolean
}

interface PostsListInjectedStateProps {
  posts: Post[]
}


const mapState = createStructuredSelector<any, PostsListInjectedStateProps>({
  posts: allPostsSelector,
})

class PostsListImpl extends React.PureComponent<PostsListPublicProps & PostsListInjectedStateProps, PostsListState> {
  static displayName = 'PostsListImpl'

  public state: PostsListState = {
    loading: false
  }

  public componentDidMount() {
    this.setState({ loading: true }, () =>
      loadPosts().then(() =>
        this.setState({ loading: false })))
  }

  public render() {
    const { posts } = this.props
    const { loading } = this.state

    console.log(posts, mapState(getState()), getState())

    return (
      <div>
        { posts.map((post) => <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>)}

        <LoadingPortal
          message='Loading posts...'
          visible={loading}
        />
      </div>
    )
  }
}

export const PostsList = connect(mapState)(PostsListImpl)
