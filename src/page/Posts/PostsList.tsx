import * as React from 'react'
import { createStructuredSelector } from 'reselect'

import { connect } from '../../store/connect';
import { Post } from '../../record/Post';
import { loadPosts } from '../../service/PostsService';
import { LoadingPortal } from '../../component/LoadingPortal';
import { allPostsSelector } from '../../service/PostsService/selectors';
import { getState } from '../../store/store';
import { PostCard } from '../../component/PostCard';
import { allUsersSelector } from '../../service/UserService/selectors';
import { User } from '../../record/User';
import { loadUsers } from '../../service/UserService/service';

interface PostsListPublicProps {
}

interface PostsListState {
  loading: {
    posts: boolean
    users: boolean
  }
}

interface PostsListInjectedStateProps {
  posts: Post[]
  users: User[]
}


const mapState = createStructuredSelector<any, PostsListInjectedStateProps>({
  posts: allPostsSelector,
  users: allUsersSelector,
})

class PostsListImpl extends React.PureComponent<PostsListPublicProps & PostsListInjectedStateProps, PostsListState> {
  static displayName = 'PostsListImpl'

  public state: PostsListState = {
    loading: {
      posts: false,
      users: false,
    }
  }

  public componentDidMount() {
    this.setState({ loading: { ...this.state.loading, posts: true } }, () =>
      loadPosts().then(() =>
        this.setState({ loading: { ...this.state.loading, posts: false } })))

    this.setState({ loading: { ...this.state.loading, users: true } }, () =>
      loadUsers().then(() =>
        this.setState({ loading: { ...this.state.loading, users: false } })))
  }

  public render() {
    const { posts, users } = this.props
    const { loading } = this.state

    console.log(posts, mapState(getState()), getState())

    return (
      <div>
        { posts.map((post) => <PostCard key={`${post.id}`} post={post} user={users.find((u) => u.id === post.userId)}/>)}

        <LoadingPortal
          message='Loading posts...'
          visible={loading.posts || loading.users}
        />
      </div>
    )
  }
}

export const PostsList = connect(mapState)(PostsListImpl)
