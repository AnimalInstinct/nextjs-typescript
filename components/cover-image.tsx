import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  src: string
  slug: string
  height: number
  width: number
}

export default function CoverImage(props: Props) {
  const { title, src, slug, height, width } = props
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout='responsive'
      width={width}
      height={height}
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
