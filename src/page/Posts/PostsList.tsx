import * as React from 'react'
import { createStructuredSelector } from 'reselect'
import { fuzzy } from 'fast-fuzzy'

import { connect } from '../../store/connect';
import { Post } from '../../record/Post';
import { Comment } from '../../record/Comment';
import { loadPosts } from '../../service/PostsService';
import { LoadingPortal } from '../../component/LoadingPortal';
import { allPostsSelector } from '../../service/PostsService/selectors';
import { PostCard } from '../../component/PostCard';
import { allUsersSelector } from '../../service/UserService/selectors';
import { User } from '../../record/User';
import { loadUsers } from '../../service/UserService/service';
import { PostsFilter } from './PostsFilter';
import { allCommentsSelector } from '../../service/CommentsService/selectors';
import { loadComments } from '../../service/CommentsService';

interface PostsListPublicProps {
}

interface PostsListState {
  loading: {
    posts: boolean
    users: boolean
    comments: boolean
  }
  filter: string
}

interface PostsListInjectedStateProps {
  posts: Post[]
  users: User[]
  comments: Comment[]
}


const mapState = createStructuredSelector<any, PostsListInjectedStateProps>({
  posts: allPostsSelector,
  users: allUsersSelector,
  comments: allCommentsSelector,
})

class PostsListImpl extends React.PureComponent<PostsListPublicProps & PostsListInjectedStateProps, PostsListState> {
  static displayName = 'PostsListImpl'

  public state: PostsListState = {
    loading: {
      posts: false,
      users: false,
      comments: false,
    },
    filter: ''
  }

  public componentDidMount() {
    this.setState({ loading: { ...this.state.loading, posts: true } }, () =>
      loadPosts().then(() =>
        this.setState({ loading: { ...this.state.loading, posts: false } })))

    this.setState({ loading: { ...this.state.loading, users: true } }, () =>
      loadUsers().then(() =>
        this.setState({ loading: { ...this.state.loading, users: false } })))

    this.setState({ loading: { ...this.state.loading, comments: true } }, () =>
      loadComments().then(() =>
        this.setState({ loading: { ...this.state.loading, comments: false } })))
  }

  public render() {
    const { posts, users, comments } = this.props
    const { loading, filter } = this.state

    return (
      <div>
        <PostsFilter
          onFilterChange={this.onFilterChange}
          filterValue={filter}
        />

        { posts
          .filter((post) => {
            const user = this.findUserForPost(post, users)
            if (user != null) {
              return fuzzy(filter, user.name) > 0.75
            } else {
              return false
            }
          })
          .map((post) => (
            <PostCard
              key={`${post.id}`}
              linkTo={`posts/${post.id}`}
              post={post}
              comments={this.findCommentsForPost(post, comments)}
              user={this.findUserForPost(post, users)}
            />
          )) }

        <LoadingPortal
          message='Loading posts...'
          visible={loading.posts || loading.users}
        />
      </div>
    )
  }

  private findUserForPost = (post: Post, users: User[]) =>
    users.find((u) => u.id === post.userId)

  private findCommentsForPost = (post: Post, comments: Comment[]) =>
    comments.filter((c) => c.postId === post.id)

  private onFilterChange = (event: React.SyntheticEvent<HTMLInputElement>) =>
    this.setState({ filter: event.currentTarget.value })
}

export const PostsList = connect(mapState)(PostsListImpl)
