import Footer from './footer'
import Meta from './meta'
import Head from 'next/head'

interface Props {
  preview?: any
  children: any
}

export default function Layout(props: Props) {
  const { preview, children } = props
  return (
    <>
      <Meta />
      <Head>
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${process.env.PRISMTHEME}.css`}
          rel='stylesheet'
        />
      </Head>
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
