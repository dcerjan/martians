import * as React from 'react'
import { createStructuredSelector } from 'reselect'
import { withRouter, RouteComponentProps, Redirect } from 'react-router';

import { connect } from '../../store/connect';
import { Post } from '../../record/Post';
import { Comment } from '../../record/Comment';
import { allPostsSelector } from '../../service/PostsService/selectors';
import { PostCard } from '../../component/PostCard';
import { allUsersSelector } from '../../service/UserService/selectors';
import { User } from '../../record/User';
import { allCommentsSelector } from '../../service/CommentsService/selectors';

import * as styles from './ViewPost.module.css'

interface ViewPostPublicProps {
}

interface ViewPostInjectedStateProps {
  posts: Post[]
  users: User[]
  comments: Comment[]
}


const mapState = createStructuredSelector<any, ViewPostInjectedStateProps>({
  posts: allPostsSelector,
  users: allUsersSelector,
  comments: allCommentsSelector,
})

class ViewPostImpl extends React.PureComponent<ViewPostPublicProps & RouteComponentProps<{ id: string }> & ViewPostInjectedStateProps> {
  static displayName = 'ViewPostImpl'

  public render() {
    const { posts, users, comments, match } = this.props

    const post = this.findPost(Number.parseInt(match.params.id, 10), posts)

    if (post == null) {
      return <Redirect to='/notFound/' />
    } else {
      return (
        <div className={styles.ViewPost}>
          <PostCard
            post={post}
            comments={this.findCommentsForPost(post, comments)}
            user={this.findUserForPost(post, users)}
          />
        </div>
      )
    }
  }

  private findPost = (id: number, posts: Post[]) =>
    posts.find((p) => p.id === id)

  private findUserForPost = (post: Post, users: User[]) =>
    users.find((u) => u.id === post.userId)

  private findCommentsForPost = (post: Post, comments: Comment[]) =>
    comments.filter((c) => c.postId === post.id)
}

export const ViewPost = connect(mapState)(withRouter(ViewPostImpl))
