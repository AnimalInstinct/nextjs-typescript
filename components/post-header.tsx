import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import { User } from '../types/user'

interface Props {
  title: string
  coverImage: string
  date: string
  author: User
  slug: string
}

export default function PostHeader(props: Props) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={620}
          width={1240}
        />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className='mb-6 text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
