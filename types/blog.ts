import { User } from './user'

export type Post = {
  title: string
  content?: string
  coverImage: string
  date: string
  slug: string
  excerpt: string
  author: User
  ogImage?: OgImage
}

type OgImage = {
  url: string
}
