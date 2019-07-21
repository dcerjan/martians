import * as React from 'react'
import { Link } from 'react-router-dom';

import { Post } from '../../record/Post';
import { User } from '../../record/User';
import { Comment } from '../../record/Comment';

import * as styles from './PostCard.module.css'
import { CommentCard } from '../CommentCard';

interface PostPublicProps {
  post: Post
  user?: User
  comments: Comment[]
  linkTo?: string
}

export const PostCard: React.FC<PostPublicProps> = ({ post, user, comments, linkTo }) => (
  <div className={styles.PostCard}>
    <div className={styles.Title}>
      { linkTo != null
        ? <Link className={styles.PostLink} to={`posts/${post.id}`}>{post.title}</Link>
        : post.title }
    </div>
    <div className={styles.Author}>Author: {user == null ? 'Anonymous' : user.name}</div>
    <div className={styles.Body}>{post.body}</div>
    <div className={styles.Comments}>
      { comments.map((comment) =>
        <CommentCard key={comment.id} comment={comment} />) }
    </div>
  </div>
)
