import { lens } from 'lens.ts'

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export const PostL = lens<Post>()
