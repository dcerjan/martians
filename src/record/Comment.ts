import { lens } from 'lens.ts'

export interface Comment {
  id: number
  postId: number
  email: string
  name: string
  body: string
}

export const CommentL = lens<Comment>()
