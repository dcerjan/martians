import * as React from 'react'

import { Post } from '../../record/Post';
import { User } from '../../record/User';

import * as styles from './PostCard.module.css'

interface PostPublicProps {
  post: Post
  user?: User
}

export const PostCard: React.FC<PostPublicProps> = ({ post, user }) => (
  <div className={styles.PostCard}>
    <div>{post.title}</div>
    <div>Author: {user == null ? 'Anonymous' : user.email}</div>
    <div>{post.body}</div>
  </div>
)
