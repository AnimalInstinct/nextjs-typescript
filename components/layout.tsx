import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

interface Props {
  preview?: any
  children: any
}

export default function Layout(props: Props) {
  const { preview, children } = props
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
