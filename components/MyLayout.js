import Head from 'next/head'
import Link from 'next/link'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const linkStyle = {
  marginRight: 15,
  float: 'right',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
    <Link href="/sign_up">
      <a style={linkStyle}>Sign up</a>
    </Link>
    <Link href="/log_in">
      <a style={linkStyle}>Log in</a>
    </Link>
    </Head>
    {props.children}
  </div>
)

export default Layout
