import * as React from 'react'

import { Comment } from '../../record/Comment';

import * as styles from './CommentCard.module.css'

interface CommentPublicProps {
  comment: Comment
}

export const CommentCard: React.FC<CommentPublicProps> = ({ comment }) => (
  <div className={styles.Comment}>
    <div className={styles.Author}>[{comment.email}] says:</div>
    <div className={styles.Body}>> {comment.body}</div>
  </div>
)
