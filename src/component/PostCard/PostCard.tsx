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
    <div className={styles.Title}>{post.title}</div>
    <div className={styles.Author}>Author: {user == null ? 'Anonymous' : user.name}</div>
    <div className={styles.Body}>{post.body}</div>
  </div>
)
