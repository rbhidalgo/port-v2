import Head from 'next/head'
import Navbar from './Navbar'


const Layout = (props) => (
    <main>
        <Head>
            <title>Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA</title>
        </Head>
        <Navbar />
        <div>
        {props.children}
        </div>
        <style jsx global>{`
        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
        }
      `}</style>
    </main>
)

export default Layout