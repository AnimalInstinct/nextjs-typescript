import { User } from './user'

export type Post = {
  title: string
  coverImage: string
  date: string
  slug: string
  excerpt: string
  author: User
}
